"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

/** Surface with a soft brand-green spotlight that follows the pointer (CSS variables, no re-renders). */
export function GlowCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className={cn(
        "group relative overflow-hidden border border-white/10 bg-white/[0.03] transition-colors duration-500 hover:border-brand-light/40",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(520px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(36, 121, 84, 0.28), transparent 45%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
