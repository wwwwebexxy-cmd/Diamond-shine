"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 480);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#ef2a2a] text-white shadow-[0_12px_28px_rgba(3,45,99,0.24)] transition hover:-translate-y-1 hover:bg-[#d91f1f] focus:outline-none focus:ring-4 focus:ring-[#ef2a2a]/25 sm:bottom-7 sm:right-7"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[2.5]">
        <path strokeLinecap="round" strokeLinejoin="round" d="m5 14 7-7 7 7M12 8v10" />
      </svg>
    </button>
  );
}
