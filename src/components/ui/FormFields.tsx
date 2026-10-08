"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Upload } from "lucide-react";
import { cn } from "@/lib/cn";

const control =
  "peer block w-full border-0 border-b border-ink/20 bg-transparent px-0 pb-3 pt-2 text-lg text-ink outline-none transition-colors duration-300 placeholder:text-transparent focus:border-brand aria-[invalid=true]:border-red-700";

export function Field({
  label,
  name,
  type = "text",
  multiline,
  rows = 5,
  error,
  className,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  error?: string;
  className?: string;
  defaultValue?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  const id = useId();
  const errId = `${id}-error`;
  const shared = {
    id,
    name,
    placeholder: label,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errId : undefined,
    ...rest,
  };

  return (
    <div className={cn("relative pt-5", className)}>
      {multiline ? (
        <textarea {...shared} rows={rows} className={cn(control, "resize-y")} />
      ) : (
        <input {...shared} type={type} className={control} />
      )}
      <FloatingLabel htmlFor={id} label={label} required={rest.required} />
      <ErrorText id={errId} error={error} />
    </div>
  );
}

export function Select({
  label,
  name,
  options,
  error,
  defaultValue,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
  defaultValue?: string;
  placeholder: string;
  className?: string;
}) {
  const id = useId();
  const errId = `${id}-error`;
  return (
    <div className={cn("relative pt-5", className)}>
      <label htmlFor={id} className="absolute left-0 top-0 text-[11px] text-ink/55 label-text">
        {label} <span className="text-brand">*</span>
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          defaultValue={defaultValue ?? ""}
          required
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errId : undefined}
          className={cn(control, "cursor-pointer appearance-none pr-10")}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown aria-hidden className="pointer-events-none absolute bottom-4 right-0 size-5 text-ink/50" />
      </div>
      <ErrorText id={errId} error={error} />
    </div>
  );
}

/** File picker styled to match: a dashed drop zone that shows the chosen file's name. */
export function FileField({
  label,
  name,
  accept,
  hint,
  error,
  className,
}: {
  label: string;
  name: string;
  accept: string;
  hint: string;
  error?: string;
  className?: string;
}) {
  const id = useId();
  const errId = `${id}-error`;
  const [file, setFile] = useState<string | null>(null);
  const input = useRef<HTMLInputElement>(null);

  // Form actions reset the form after submitting; clear the shown file name with it.
  useEffect(() => {
    const form = input.current?.form;
    if (!form) return;
    const clear = () => setFile(null);
    form.addEventListener("reset", clear);
    return () => form.removeEventListener("reset", clear);
  }, []);

  return (
    <div className={cn("relative pt-5", className)}>
      <span className="absolute left-0 top-0 text-[11px] text-ink/55 label-text">{label}</span>
      <label
        htmlFor={id}
        className={cn(
          "mt-2 flex cursor-pointer items-center gap-4 border border-dashed px-5 py-5 transition-colors duration-300 focus-within:border-brand hover:border-brand",
          error ? "border-red-700" : "border-ink/25",
        )}
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-mist text-brand">
          <Upload aria-hidden className="size-4" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-ink">{file ?? "Choose a file"}</span>
          <span className="block text-sm text-ink/50">{hint}</span>
        </span>
        <input
          ref={input}
          id={id}
          name={name}
          type="file"
          accept={accept}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errId : undefined}
          onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)}
          className="sr-only"
        />
      </label>
      <ErrorText id={errId} error={error} />
    </div>
  );
}

/** Sits in the field as a placeholder, then rises to a small label on focus or once filled. */
function FloatingLabel({ htmlFor, label, required }: { htmlFor: string; label: string; required?: boolean }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "pointer-events-none absolute left-0 origin-left transition-all duration-300 ease-expo label-text",
        "top-0 text-[11px] text-ink/55",
        "peer-placeholder-shown:top-[1.85rem] peer-placeholder-shown:text-sm peer-placeholder-shown:text-ink/45",
        "peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-brand",
      )}
    >
      {label} {required && <span className="text-brand">*</span>}
    </label>
  );
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  return (
    <AnimatePresence initial={false}>
      {error && (
        <motion.p
          id={id}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-2 text-sm text-red-800"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
