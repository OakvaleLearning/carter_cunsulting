import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** "light" for dark backgrounds, "brand" for the green-on-paper version. */
  tone?: "light" | "brand";
  className?: string;
};

// Globe mark stays an image; the wordmark is live text so it shares the site's Garamond.
export function Logo({ tone = "brand", className }: LogoProps) {
  const light = tone === "light";
  return (
    <span className={cn("inline-flex items-center gap-[0.35em] leading-none", className)}>
      <span className="relative aspect-square h-[1.25em] shrink-0">
        <Image
          src="/logo-mark-white.png"
          alt=""
          fill
          sizes="64px"
          loading="eager"
          className={cn("object-contain transition-opacity duration-500", light ? "opacity-100" : "opacity-0")}
        />
        <Image
          src="/logo-mark.png"
          alt=""
          fill
          sizes="64px"
          loading="eager"
          className={cn("object-contain transition-opacity duration-500", light ? "opacity-0" : "opacity-100")}
        />
      </span>
      <span
        className={cn(
          "whitespace-nowrap font-display font-medium tracking-[-0.01em] transition-colors duration-500",
          light ? "text-white" : "text-logo",
        )}
      >
        Carter Consulting
      </span>
    </span>
  );
}
