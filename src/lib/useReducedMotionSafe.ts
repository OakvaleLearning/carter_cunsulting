"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Live media-query match that reports `false` while hydrating so render-time
 * values (transforms, markup) match the server, then updates.
 */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** Like framer's useReducedMotion, but hydration-safe (see useMediaQuery). */
export function useReducedMotionSafe() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
