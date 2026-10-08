import "server-only";

/**
 * Sends a plain-text email through Resend (provisioned via the Vercel
 * Marketplace, which supplies RESEND_API_KEY). Until the sending domain is
 * verified in Resend, CONTACT_FROM must stay on resend.dev, and Resend will
 * only deliver to the account owner's address.
 */
export const CONTACT_TO = process.env.CONTACT_TO ?? "info@carterltd.com";
const CONTACT_FROM = process.env.CONTACT_FROM ?? "Carter Website <onboarding@resend.dev>";

export class EmailNotConfiguredError extends Error {}

export async function sendEmail({
  subject,
  text,
  replyTo,
  attachments,
}: {
  subject: string;
  text: string;
  replyTo?: string;
  /** `content` is base64. */
  attachments?: { filename: string; content: string }[];
}) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new EmailNotConfiguredError("RESEND_API_KEY is not set");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: CONTACT_FROM, to: [CONTACT_TO], subject, text, reply_to: replyTo, attachments }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
}
