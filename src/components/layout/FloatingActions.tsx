"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUp, Phone, X } from "lucide-react";
import { useMediaQuery } from "@/lib/useReducedMotionSafe";
import { GENERAL_CONTACT } from "@/lib/content";
import { EASE_EXPO, cn } from "@/lib/cn";

const TEL = `tel:${GENERAL_CONTACT.phone.replace(/\s/g, "")}`;

const BUTTON =
  "flex size-12 items-center justify-center rounded-full shadow-[0_12px_30px_-10px_rgba(11,26,19,0.45)] transition-colors";

/**
 * Floating call + back-to-top buttons, bottom right. With a mouse the call button
 * reveals the number beside it; on touch devices it's a plain `tel:` link that
 * opens the dialler. Back-to-top appears once the reader is past the first screen.
 */
export function FloatingActions() {
  const desktop = useMediaQuery("(hover: hover) and (pointer: fine)");
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setShowTop(y > 600));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8"
    >
      <div className="flex items-center gap-3">
        <AnimatePresence>
          {open && desktop && (
            <motion.a
              href={TEL}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.4, ease: EASE_EXPO }}
              className="whitespace-nowrap rounded-full bg-white px-5 py-3 font-display text-lg text-ink shadow-[0_12px_30px_-10px_rgba(11,26,19,0.35)] select-all"
            >
              {GENERAL_CONTACT.phone}
            </motion.a>
          )}
        </AnimatePresence>
        <a
          href={TEL}
          aria-label={
            desktop
              ? open
                ? "Hide phone number"
                : "Show phone number"
              : `Call ${GENERAL_CONTACT.phone}`
          }
          aria-expanded={desktop ? open : undefined}
          onClick={(e) => {
            if (!desktop) return;
            e.preventDefault();
            setOpen((o) => !o);
          }}
          className={cn(BUTTON, "bg-brand text-white hover:bg-brand-deep")}
        >
          {open && desktop ? (
            <X aria-hidden className="size-5" />
          ) : (
            <Phone aria-hidden className="size-5" />
          )}
        </a>
      </div>

      {/* Fixed slot so the call button doesn't jump when this appears. */}
      <div className="size-12">
        <AnimatePresence>
          {showTop && (
            <motion.button
              type="button"
              aria-label="Scroll to top"
              onClick={() => window.scrollTo({ top: 0 })}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.4, ease: EASE_EXPO }}
              className={cn(BUTTON, "bg-white text-ink hover:bg-mist")}
            >
              <ArrowUp aria-hidden className="size-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
