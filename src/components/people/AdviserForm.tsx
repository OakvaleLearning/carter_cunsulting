"use client";

import { startTransition, useActionState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { submitAdviser, type AdviserState } from "@/app/actions/adviser";
import { Button } from "@/components/ui/ButtonLink";
import { Field, FileField, Select } from "@/components/ui/FormFields";
import { EXPERTISE_AREAS } from "@/lib/people";
import { EASE_EXPO } from "@/lib/cn";

const initial: AdviserState = { status: "idle" };

export function AdviserForm() {
  const [state, action, pending] = useActionState(submitAdviser, initial);
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
    <AnimatePresence mode="wait" initial={false}>
      {state.status === "success" ? (
        <motion.div
          key="done"
          role="status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_EXPO }}
          className="flex min-h-[28rem] flex-col justify-center"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-brand text-white">
            <Check aria-hidden className="size-6" />
          </span>
          <p className="mt-8 font-display text-4xl leading-tight">Thank you. We have received your details.</p>
          <p className="mt-4 max-w-md leading-relaxed text-ink/70">
            We retain details of potential advisers for consideration as relevant assignments arise.
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
          <Field
            label="Current Organisation / Practice"
            name="organisation"
            defaultValue={v.organisation}
            autoComplete="organization"
            className="sm:col-span-2"
          />
          <Select
            label="Area of Expertise"
            name="area"
            options={EXPERTISE_AREAS}
            placeholder="Select an area of expertise"
            error={e.area}
            defaultValue={v.area}
            className="sm:col-span-2"
          />
          <Field
            label="Technical Specialism"
            name="specialism"
            multiline
            rows={3}
            error={e.specialism}
            defaultValue={v.specialism}
            required
            className="sm:col-span-2"
          />
          <Field
            label="Professional Experience"
            name="experience"
            multiline
            rows={4}
            error={e.experience}
            defaultValue={v.experience}
            required
            className="sm:col-span-2"
          />
          <Field
            label="LinkedIn Profile / Website"
            name="url"
            type="url"
            error={e.url}
            defaultValue={v.url}
            autoComplete="url"
            className="sm:col-span-2"
          />
          <FileField
            label="CV / Profile"
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

          <div className="flex flex-col gap-6 sm:col-span-2">
            <Button type="submit" disabled={pending} className="self-start">
              {pending ? "Sending…" : "Submit Enquiry"}
            </Button>
            <p className="max-w-xl text-xs italic leading-relaxed text-ink/55">
              Submitting an enquiry does not constitute an application for employment or guarantee an engagement. We
              retain details of potential advisers for consideration as relevant assignments arise.
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
  );
}
