"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/brand/Logo";

const navigation = [
  ["Home", "/#hero"],
  ["Our services", "/#services"],
  ["Why choose us", "/#why-us"],
  ["About us", "/#about"],
  ["Contact", "/#contact"],
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-[#dce9f4] bg-white/95 shadow-[0_8px_26px_rgba(3,45,99,0.07)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:gap-5 sm:px-8 lg:px-12">
          <Link href="/#hero" aria-label="Diamond Shine Laundry home" onClick={() => setIsOpen(false)}>
            <BrandLogo compact />
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
            {navigation.map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                className={"text-sm font-semibold transition-colors hover:text-[#0a79cf] " + (index === 0 ? "text-[#06458d]" : "text-[#5c6d82]")}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+971509273445"
              className="hidden items-center gap-2 rounded-full bg-[#ef2a2a] px-5 py-3 text-sm font-extrabold text-white shadow-[0_8px_18px_rgba(239,42,42,0.2)] transition hover:-translate-y-0.5 hover:bg-[#d91f1f] sm:inline-flex"
            >
              <PhoneIcon />
              Call now
            </a>
            <button
              type="button"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eaf5fc] text-[#06458d] lg:hidden"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={"fixed inset-0 top-20 z-40 bg-[#032d63]/30 backdrop-blur-sm transition-opacity lg:hidden " + (isOpen ? "opacity-100" : "pointer-events-none opacity-0")}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div
        className={"fixed inset-y-0 left-0 z-50 flex w-80 max-w-[85vw] flex-col justify-between bg-white p-6 shadow-2xl transition-transform duration-300 lg:hidden " + (isOpen ? "translate-x-0" : "-translate-x-full")}
      >
        <div>
          <div className="flex items-center justify-between border-b border-[#dce9f4] pb-4">
            <BrandLogo compact />
            <button type="button" aria-label="Close menu" onClick={() => setIsOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf5fc] text-[#06458d]">
              <CloseIcon />
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="mt-6 flex flex-col gap-1">
            {navigation.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setIsOpen(false)} className="rounded-2xl px-4 py-3.5 font-bold text-[#5c6d82] transition hover:bg-[#eaf5fc] hover:text-[#06458d]">
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <a href="tel:+971509273445" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ef2a2a] py-3.5 font-extrabold text-white">
          <PhoneIcon />
          Call 050 927 3445
        </a>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.5]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.8 3.8 8 3l2.1 5.2-2 1.6a14.3 14.3 0 0 0 6.1 6.1l1.6-2 5.2 2.1-.8 3.2a2 2 0 0 1-2.2 1.5C10.2 19.4 4.6 13.8 3.3 6a2 2 0 0 1 1.5-2.2Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[2.2]">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[2.2]">
      <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
