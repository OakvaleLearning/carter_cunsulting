"use server";

import { EmailNotConfiguredError, sendEmail } from "@/lib/email";
import { EXPERTISE_AREAS } from "@/lib/people";

const FIELDS = ["name", "email", "organisation", "area", "specialism", "experience", "url", "message"] as const;
type Field = (typeof FIELDS)[number] | "cv";

export type AdviserState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
  values?: Partial<Record<Field, string>>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CV = 3 * 1024 * 1024;
const CV_TYPES = /\.(pdf|docx?|rtf|odt)$/i;
const str = (fd: FormData, key: string) => String(fd.get(key) ?? "").trim();

export async function submitAdviser(_prev: AdviserState, fd: FormData): Promise<AdviserState> {
  const values = Object.fromEntries(FIELDS.map((f) => [f, str(fd, f)])) as Record<(typeof FIELDS)[number], string>;
  if (str(fd, "website")) return { status: "success" };

  const cv = fd.get("cv");
  const file = cv instanceof File && cv.size > 0 ? cv : null;

  const errors: AdviserState["errors"] = {};
  if (!values.name) errors.name = "Please enter your full name.";
  if (!EMAIL.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!EXPERTISE_AREAS.includes(values.area)) errors.area = "Please choose an area of expertise.";
  if (!values.specialism) errors.specialism = "Please describe your area of specialist expertise.";
  if (!values.experience) errors.experience = "Please tell us about your experience.";
  if (values.url && !/^https?:\/\/\S+\.\S+/i.test(values.url)) errors.url = "Please enter a full URL, starting with https://";
  if (file && !CV_TYPES.test(file.name)) errors.cv = "Please upload a PDF or Word document.";
  if (file && file.size > MAX_CV) errors.cv = "Please upload a file under 3MB.";
  const tooLong = Object.values(values).some((v) => v.length > 5000);
  if (tooLong) errors.message ??= "One of your answers is too long.";
  if (Object.keys(errors).length) return { status: "error", errors, values };

  try {
    await sendEmail({
      subject: `Technical Adviser enquiry: ${values.area}, ${values.name}`,
      replyTo: values.email,
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Organisation / practice: ${values.organisation || "—"}`,
        `Area of expertise: ${values.area}`,
        `LinkedIn / website: ${values.url || "—"}`,
        `CV attached: ${file ? file.name : "no"}`,
        "",
        "Technical specialism:",
        values.specialism,
        "",
        "Professional experience:",
        values.experience,
        "",
        "Message:",
        values.message || "—",
      ].join("\n"),
      attachments: file
        ? [{ filename: file.name, content: Buffer.from(await file.arrayBuffer()).toString("base64") }]
        : undefined,
    });
    return { status: "success" };
  } catch (err) {
    if (err instanceof EmailNotConfiguredError) console.warn("Adviser enquiry not sent: email is not configured yet");
    else console.error("Adviser enquiry delivery failed", err);
    return {
      status: "error",
      values,
      message:
        err instanceof EmailNotConfiguredError
          ? "This form is not accepting submissions just yet. Please email info@carterltd.com directly."
          : "Something went wrong sending your details. Please try again, or email info@carterltd.com.",
    };
  }
}
