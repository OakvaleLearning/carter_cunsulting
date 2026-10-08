"use client";

import { startTransition, useActionState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { submitEnquiry, type EnquiryState } from "@/app/actions/contact";
import { Button } from "@/components/ui/ButtonLink";
import { PRACTICE_AREAS } from "@/lib/content";
import { EASE_EXPO } from "@/lib/cn";
import { Field, Select } from "@/components/ui/FormFields";

const initial: EnquiryState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  // Submit without React's automatic form reset, so a correction keeps every
  // answer, including the dropdown and any attached file. The `action` prop
  // still posts the form if JavaScript hasn't loaded.
  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    startTransition(() => action(fd));
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {state.status === "success" ? (
          <motion.div
            key="done"
            role="status"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_EXPO }}
            className="flex min-h-[32rem] flex-col justify-center"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-brand text-white">
              <Check aria-hidden className="size-6" />
            </span>
            <p className="mt-8 font-display text-4xl leading-tight">Thank you. Your enquiry is on its way.</p>
            <p className="mt-4 max-w-md leading-relaxed text-ink/70">
              Enquiries will be directed to the relevant Carter team based on the nature of the assignment.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            action={action}
            onSubmit={onSubmit}
            noValidate
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE_EXPO }}
            className="grid gap-x-8 gap-y-9 sm:grid-cols-2"
          >
            <Field label="Full Name" name="name" error={e.name} defaultValue={v.name} autoComplete="name" required />
            <Field
              label="Organisation"
              name="organisation"
              defaultValue={v.organisation}
              autoComplete="organization"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              error={e.email}
              defaultValue={v.email}
              autoComplete="email"
              required
              className="sm:col-span-2"
            />
            <Select
              label="Practice Area of Interest"
              name="practice"
              options={PRACTICE_AREAS}
              error={e.practice}
              defaultValue={v.practice}
              placeholder="Select a practice area"
              className="sm:col-span-2"
            />
            <Field
              label="Message"
              name="message"
              multiline
              error={e.message}
              defaultValue={v.message}
              required
              className="sm:col-span-2"
            />

            {/* Honeypot for bots: hidden from people and assistive tech. */}
            <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" disabled={pending}>
                {pending ? "Sending…" : "Submit Enquiry"}
              </Button>
              <p className="max-w-xs text-xs leading-relaxed text-ink/55">
                General enquiries will be reviewed by our Client Delivery &amp; Partnerships team.
              </p>
            </div>

            {state.status === "error" && state.message && (
              <p role="alert" className="border-l-2 border-red-700 pl-4 text-sm text-red-800 sm:col-span-2">
                {state.message}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
