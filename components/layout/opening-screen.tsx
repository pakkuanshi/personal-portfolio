"use client";

import { useEffect, useState } from "react";

export function OpeningScreen() {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timeout = window.setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = previousOverflow;
    }, 2200);

    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="opening-screen fixed inset-0 z-[100] flex items-center justify-center bg-background text-foreground"
    >
      <span className="opening-mark">
        <span className="opening-mark-text font-serif text-4xl leading-none md:text-5xl">
          KS
        </span>
      </span>
    </div>
  );
}
