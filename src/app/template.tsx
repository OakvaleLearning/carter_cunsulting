"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE_EXPO, EASE_INOUT } from "@/lib/cn";

// Runs on every route entry: a brand-green curtain lifts away and the page settles in.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden
        data-motion-hide
        className="pointer-events-none fixed inset-0 z-[70] flex origin-top items-center justify-center bg-brand"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.85, delay: 0.35, ease: EASE_INOUT }}
      >
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, delay: 0.2, ease: EASE_EXPO }}
        >
          <Image src="/logo-white.png" alt="" width={900} height={182} loading="eager" className="h-auto w-[220px]" />
        </motion.div>
      </motion.div>
      <motion.main
        data-motion
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease: EASE_EXPO }}
      >
        {children}
      </motion.main>
    </>
  );
}
