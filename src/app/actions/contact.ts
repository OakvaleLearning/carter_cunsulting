"use server";

import { PRACTICE_AREAS } from "@/lib/content";
import { EmailNotConfiguredError, sendEmail } from "@/lib/email";

const FIELDS = ["name", "organisation", "email", "practice", "message"] as const;
type Field = (typeof FIELDS)[number];

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
  values?: Partial<Record<Field, string>>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const str = (fd: FormData, key: string) => String(fd.get(key) ?? "").trim();

export async function submitEnquiry(_prev: EnquiryState, fd: FormData): Promise<EnquiryState> {
  const values = Object.fromEntries(FIELDS.map((f) => [f, str(fd, f)])) as Record<Field, string>;

  // Honeypot: real visitors never see or fill this field.
  if (str(fd, "website")) return { status: "success" };

  const errors: EnquiryState["errors"] = {};
  if (!values.name) errors.name = "Please enter your full name.";
  if (!EMAIL.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!PRACTICE_AREAS.includes(values.practice)) errors.practice = "Please choose a practice area.";
  if (values.message.length < 10) errors.message = "Please tell us a little more about what you are working on.";
  if (values.name.length > 200 || values.organisation.length > 200 || values.message.length > 5000) {
    errors.message ??= "That message is too long.";
  }
  if (Object.keys(errors).length) return { status: "error", errors, values };

  try {
    await sendEmail({
      subject: `Website enquiry: ${values.practice}, ${values.name}${values.organisation ? ` (${values.organisation})` : ""}`,
      replyTo: values.email,
      text: [
        `Name: ${values.name}`,
        `Organisation: ${values.organisation || "—"}`,
        `Email: ${values.email}`,
        `Practice area: ${values.practice}`,
        "",
        values.message,
      ].join("\n"),
    });
    return { status: "success" };
  } catch (err) {
    if (err instanceof EmailNotConfiguredError) console.warn("Enquiry not sent: email is not configured yet");
    else console.error("Enquiry delivery failed", err);
    return {
      status: "error",
      values,
      message:
        err instanceof EmailNotConfiguredError
          ? "Our enquiry form is not accepting messages just yet. Please email info@carterltd.com directly."
          : "Something went wrong sending your enquiry. Please try again, or email info@carterltd.com.",
    };
  }
}
