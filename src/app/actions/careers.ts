"use server";

import { EmailNotConfiguredError, sendEmail } from "@/lib/email";
import { CAREER_LEVELS, PRACTICES, shortTitle } from "@/lib/content";

const FIELDS = ["name", "email", "level", "area", "linkedin", "message"] as const;
type Field = (typeof FIELDS)[number] | "cv";

export type CareersState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
  values?: Partial<Record<Field, string>>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CV = 3 * 1024 * 1024;
const CV_TYPES = /\.(pdf|docx?|rtf|odt)$/i;
const AREAS = PRACTICES.map((p) => shortTitle(p.title));
const str = (fd: FormData, key: string) => String(fd.get(key) ?? "").trim();

export async function submitCareers(_prev: CareersState, fd: FormData): Promise<CareersState> {
  const values = Object.fromEntries(FIELDS.map((f) => [f, str(fd, f)])) as Record<(typeof FIELDS)[number], string>;
  if (str(fd, "website")) return { status: "success" };

  const cv = fd.get("cv");
  const file = cv instanceof File && cv.size > 0 ? cv : null;

  const errors: CareersState["errors"] = {};
  if (!values.name) errors.name = "Please enter your full name.";
  if (!EMAIL.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!CAREER_LEVELS.includes(values.level)) errors.level = "Please choose a career level.";
  if (!AREAS.includes(values.area)) errors.area = "Please choose a practice area.";
  if (!/^https?:\/\/(www\.)?linkedin\.com\/\S+/i.test(values.linkedin))
    errors.linkedin = "Please enter your LinkedIn profile link, starting with https://";
  if (!file) errors.cv = "Please attach your CV.";
  else if (!CV_TYPES.test(file.name)) errors.cv = "Please upload a PDF or Word document.";
  else if (file.size > MAX_CV) errors.cv = "Please upload a file under 3MB.";
  if (Object.values(values).some((v) => v.length > 5000)) errors.message ??= "One of your answers is too long.";
  if (Object.keys(errors).length) return { status: "error", errors, values };

  try {
    await sendEmail({
      subject: `Careers enquiry: ${values.level}, ${values.area}, ${values.name}`,
      replyTo: values.email,
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Career level: ${values.level}`,
        `Practice area of interest: ${values.area}`,
        `LinkedIn: ${values.linkedin}`,
        `CV attached: ${file!.name}`,
        "",
        "Message:",
        values.message || "—",
      ].join("\n"),
      attachments: [{ filename: file!.name, content: Buffer.from(await file!.arrayBuffer()).toString("base64") }],
    });
    return { status: "success" };
  } catch (err) {
    if (err instanceof EmailNotConfiguredError) console.warn("Careers enquiry not sent: email is not configured yet");
    else console.error("Careers enquiry delivery failed", err);
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
