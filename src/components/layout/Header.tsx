"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Magnetic } from "@/components/motion/Magnetic";
import { NAV } from "@/lib/content";
import { cn, EASE_EXPO, EASE_INOUT } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  // Solid once the page moves; tucks away while scrolling down, returns on any scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 48);
    setHidden(y > prev && y > 480);
  });

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const light = !scrolled || open;
  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: EASE_EXPO }}
      >
        <div
          className={cn(
            "border-b transition-[background-color,border-color] duration-500",
            scrolled && !open ? "border-ink/10 bg-paper/85 backdrop-blur-xl" : "border-transparent bg-transparent",
          )}
        >
          <div className="container-x flex h-20 items-center justify-between lg:h-24">
            <Link
              href="/"
              onClick={close}
              aria-label="Carter Consulting, home"
              className="relative block h-8 w-[160px] lg:h-10 lg:w-[198px]"
            >
              <Image
                src="/logo-white.png"
                alt=""
                fill
                sizes="200px"
                loading="eager"
                className={cn("object-contain object-left transition-opacity duration-500", light ? "opacity-100" : "opacity-0")}
              />
              <Image
                src="/logo.png"
                alt=""
                fill
                sizes="200px"
                loading="eager"
                className={cn("object-contain object-left transition-opacity duration-500", light ? "opacity-0" : "opacity-100")}
              />
            </Link>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-10">
                {NAV.slice(0, -1).map((item) => {
                  const active = pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "group relative text-[13px] transition-colors duration-300 label-text",
                          light ? "text-white/80 hover:text-white" : "text-ink/70 hover:text-ink",
                        )}
                      >
                        {item.label}
                        <span
                          className={cn(
                            "absolute -bottom-2 left-0 h-px w-full origin-left bg-current transition-transform duration-500 ease-expo",
                            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Magnetic>
                    <Link
                      href="/contact"
                      className={cn(
                        "inline-flex items-center rounded-full border px-6 py-3 text-[13px] leading-none transition-colors duration-300",
                        light
                          ? "border-white/40 text-white hover:bg-white hover:text-ink"
                          : "border-brand bg-brand text-white hover:border-brand-deep hover:bg-brand-deep",
                      )}
                    >
                      <span className="-mr-[0.2em] label-text">Contact Us</span>
                    </Link>
                  </Magnetic>
                </li>
              </ul>
            </nav>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn("relative h-11 w-11 lg:hidden", light ? "text-white" : "text-ink")}
            >
              <motion.span
                className="absolute left-2.5 right-2.5 top-1/2 h-px bg-current"
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.4, ease: EASE_EXPO }}
              />
              <motion.span
                className="absolute left-2.5 right-2.5 top-1/2 h-px bg-current"
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.4, ease: EASE_EXPO }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-6 pb-12 pt-28 text-white lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease: EASE_INOUT }}
          >
            <nav aria-label="Mobile">
              <ul className="space-y-2">
                {NAV.map((item, i) => (
                  <li key={item.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "110%" }}
                      transition={{ duration: 0.7, delay: 0.2 + i * 0.06, ease: EASE_EXPO }}
                    >
                      <Link
                        href={item.href}
                        onClick={close}
                        className="flex items-baseline gap-4 py-1 font-display text-5xl text-white/90 hover:text-brand-light"
                      >
                        <span className="text-xs text-brand-light label-text">0{i + 1}</span>
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.p
              className="mt-12 border-t border-white/10 pt-6 font-display text-xl italic text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              From intent to impact, since 2009.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
