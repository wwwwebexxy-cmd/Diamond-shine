"use client";

import { useEffect, useState } from "react";
import BrandLogo from "@/components/brand/Logo";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f5faff] transition-opacity duration-500">
      <div className="flex flex-col items-center gap-6">
        <BrandLogo />
        <div className="h-1 w-36 overflow-hidden rounded-full bg-[#dce9f4]">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-[#12baf2]" />
        </div>
      </div>
    </div>
  );
}
