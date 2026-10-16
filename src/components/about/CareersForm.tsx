"use client";

import { startTransition, useActionState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { submitCareers, type CareersState } from "@/app/actions/careers";
import { Button } from "@/components/ui/ButtonLink";
import { Field, FileField, Select } from "@/components/ui/FormFields";
import { CAREER_LEVELS, PRACTICES, shortTitle } from "@/lib/content";
import { EASE_EXPO } from "@/lib/cn";

const initial: CareersState = { status: "idle" };
const AREAS = PRACTICES.map((p) => shortTitle(p.title));

/** Careers enquiries, kept separate from the Technical Advisor form on Our People. */
export function CareersForm() {
  const [state, action, pending] = useActionState(submitCareers, initial);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  // As with the adviser form: submit without React's automatic reset so a correction keeps every answer.
  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    startTransition(() => action(fd));
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {state.status === "success" ? (
        <motion.div
          key="done"
          role="status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_EXPO }}
          className="flex min-h-[24rem] flex-col justify-center"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-brand text-white">
            <Check aria-hidden className="size-6" />
          </span>
          <p className="mt-8 font-display text-4xl leading-tight">Thank you. We have received your details.</p>
          <p className="mt-4 max-w-md leading-relaxed text-ink/70">
            We will be in touch if there is a role that matches your experience and interests.
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
          className="relative grid gap-x-8 gap-y-9 sm:grid-cols-2"
        >
          <Field label="Full Name" name="name" error={e.name} defaultValue={v.name} autoComplete="name" required />
          <Field
            label="Email Address"
            name="email"
            type="email"
            error={e.email}
            defaultValue={v.email}
            autoComplete="email"
            required
          />
          <Select
            label="Career Level"
            name="level"
            options={CAREER_LEVELS}
            placeholder="Select a career level"
            error={e.level}
            defaultValue={v.level}
          />
          <Select
            label="Practice Area of Interest"
            name="area"
            options={AREAS}
            placeholder="Select a practice area"
            error={e.area}
            defaultValue={v.area}
          />
          <Field
            label="LinkedIn Profile Link"
            name="linkedin"
            type="url"
            error={e.linkedin}
            defaultValue={v.linkedin}
            autoComplete="url"
            required
            className="sm:col-span-2"
          />
          <FileField
            label="CV"
            name="cv"
            accept=".pdf,.doc,.docx,.rtf,.odt"
            hint="PDF or Word, up to 3MB"
            error={e.cv}
            className="sm:col-span-2"
          />
          <Field
            label="Message"
            name="message"
            multiline
            rows={4}
            error={e.message}
            defaultValue={v.message}
            className="sm:col-span-2"
          />

          <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label>
              Website
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="sm:col-span-2">
            <Button type="submit" disabled={pending}>
              {pending ? "Sending…" : "Submit"}
            </Button>
          </div>

          {state.status === "error" && state.message && (
            <p role="alert" className="border-l-2 border-red-700 pl-4 text-sm text-red-800 sm:col-span-2">
              {state.message}
            </p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
