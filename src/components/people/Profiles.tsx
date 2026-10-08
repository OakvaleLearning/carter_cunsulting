"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus, X } from "lucide-react";
import Image from "next/image";
import { initials, photoOf, type Person } from "@/lib/people";
import { cn, EASE_EXPO } from "@/lib/cn";

const OpenProfile = createContext<(p: Person) => void>(() => {});

/** Holds the profile drawer; cards anywhere inside can open it. */
export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [person, setPerson] = useState<Person | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = useCallback((p: Person) => {
    opener.current = document.activeElement as HTMLElement | null;
    setPerson(p);
  }, []);
  const close = useCallback(() => setPerson(null), []);

  useEffect(() => {
    if (!person) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener.current?.focus();
    };
  }, [person, close]);

  return (
    <OpenProfile.Provider value={open}>
      {children}
      <AnimatePresence>
        {person && (
          <motion.div
            key="drawer"
            className="fixed inset-0 z-[60] flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              type="button"
              aria-label="Close profile"
              tabIndex={-1}
              onClick={close}
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-labelledby="profile-name"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.7, ease: EASE_EXPO }}
              className="relative flex h-full w-full max-w-xl flex-col overflow-y-auto bg-paper p-8 shadow-2xl sm:p-12"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close profile"
                className="self-end rounded-full border border-ink/15 p-3 transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                <X aria-hidden className="size-5" />
              </button>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: EASE_EXPO }}
                className="mt-6"
              >
                <Portrait name={person.name} sizes="12rem" className="size-48" />
                <h2 id="profile-name" className="mt-10 font-display text-5xl leading-none">
                  {person.name}
                </h2>
                <p className="mt-4 text-xs text-brand label-text">{person.role}</p>
                <p className="mt-10 text-lg leading-relaxed text-ink/80">{person.bio}</p>
                {person.linkedin && <LinkedIn href={person.linkedin} className="mt-10" />}
              </motion.div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </OpenProfile.Provider>
  );
}

/**
 * Team card: portrait, name, role and the opening of the biography. The whole
 * card opens the full profile; the LinkedIn link sits above that hit area.
 */
export function PersonCard({ person }: { person: Person }) {
  const open = useContext(OpenProfile);

  return (
    <article className="group relative flex h-full flex-col border border-ink/10 bg-white transition-colors duration-500 hover:border-brand/40">
      <Portrait name={person.name} sizes="(min-width: 1280px) 16rem, (min-width: 640px) 22rem, 100vw" className="aspect-square w-full" />
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-700 ease-expo group-hover:scale-x-100"
      />
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <h3 className="font-display text-2xl leading-tight">{person.name}</h3>
        <p className="mt-2 text-[11px] text-ink/55 label-text">{person.role}</p>
        {person.bio && <p className="mt-5 line-clamp-3 text-[15px] leading-relaxed text-ink/65">{person.bio}</p>}

        <div className="mt-auto flex items-center justify-between gap-4 pt-8">
          {person.bio ? (
            <button
              type="button"
              onClick={() => open(person)}
              className="flex items-center gap-2 whitespace-nowrap text-[11px] text-ink transition-colors duration-300 label-text after:absolute after:inset-0 group-hover:text-brand"
            >
              View profile
              <span className="sr-only">: {person.name}</span>
              <Plus
                aria-hidden
                className="-mt-[0.2em] size-3.5 transition-transform duration-500 ease-expo group-hover:rotate-90"
              />
            </button>
          ) : (
            <span />
          )}
          {person.linkedin && <LinkedIn href={person.linkedin} compact name={person.name} />}
        </div>
      </div>
    </article>
  );
}

/**
 * Square portrait that eases in slightly on hover; people without a photo yet
 * get their initials on the same tinted ground, so cards stay uniform.
 */
export function Portrait({ name, sizes, className }: { name: string; sizes: string; className?: string }) {
  const src = photoOf(name);
  return (
    <div className={cn("relative shrink-0 overflow-hidden bg-mist", className)}>
      {src ? (
        <Image
          src={src}
          alt={`Portrait of ${name}`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-1000 ease-expo group-hover:scale-[1.04]"
        />
      ) : (
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center font-display text-[clamp(2.5rem,30%,5rem)] text-brand/50"
        >
          {initials(name)}
        </span>
      )}
    </div>
  );
}

export function LinkedIn({
  href,
  compact,
  name,
  className,
}: {
  href: string;
  compact?: boolean;
  name?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative z-10 inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[11px] leading-none text-ink/55 transition-colors duration-300 hover:text-brand",
        !compact && "rounded-full border border-ink/20 px-5 py-3 text-ink hover:border-brand",
        className,
      )}
    >
      <span className="-mr-[0.2em] label-text">LinkedIn</span>
      {name && <span className="sr-only"> profile of {name}</span>}
      <span className="sr-only"> (opens in a new tab)</span>
      <ArrowUpRight aria-hidden className={cn("size-3.5", compact && "-mt-[0.2em]")} />
    </a>
  );
}
