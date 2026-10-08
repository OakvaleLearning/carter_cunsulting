import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/motion/Magnetic";
import { cn } from "@/lib/cn";

const VARIANTS = {
  primary: "bg-brand text-white before:bg-brand-deep",
  light: "border border-white/40 text-white before:bg-white hover:text-ink",
  dark: "border border-ink/20 text-ink before:bg-ink hover:text-white",
} as const;

type Variant = keyof typeof VARIANTS;

const buttonClass = (variant: Variant, className?: string) =>
  cn(
    "group relative isolate inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-4 text-[13px] leading-none transition-colors duration-500",
    "before:absolute before:inset-0 before:-z-10 before:translate-y-full before:rounded-full before:transition-transform before:duration-500 before:ease-expo hover:before:translate-y-0",
    VARIANTS[variant],
    className,
  );

function Label({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="-mr-[0.2em] label-text">{children}</span>
      <ArrowRight
        aria-hidden
        className="size-4 shrink-0 transition-transform duration-500 ease-expo group-hover:translate-x-0.5"
      />
    </>
  );
}

/** Pill link with a fill that sweeps up on hover, an arrow that nudges, and a light magnetic pull. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Magnetic>
      <Link href={href} className={buttonClass(variant, className)}>
        <Label>{children}</Label>
      </Link>
    </Magnetic>
  );
}

/** The same pill as a native button, for forms. */
export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <Magnetic>
      <button {...props} className={buttonClass(variant, cn("disabled:cursor-wait disabled:opacity-70", className))}>
        <Label>{children}</Label>
      </button>
    </Magnetic>
  );
}
