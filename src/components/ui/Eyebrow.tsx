import { DrawLine } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-4 text-xs label-text", className)}>
      <DrawLine className="-mt-[0.2em] w-10" />
      {children}
    </p>
  );
}
