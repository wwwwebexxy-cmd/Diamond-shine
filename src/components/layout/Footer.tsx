import Link from "next/link";
import BrandLogo from "@/components/brand/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#032d63] px-5 pb-8 pt-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 lg:col-span-5">
          <div className="inline-block">
            <BrandLogo compact stroke />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-blue-100">
            Clean clothes, brighter days. Diamond Shine Laundry brings dependable laundry care to Karama, Dubai.
          </p>
          <p className="mt-5 text-sm font-bold text-white">Your laundry. Our priority.</p>
          <a
            href="https://www.instagram.com/diamondshine972/"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow Diamond Shine Laundry on Instagram"
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-2.5 text-sm font-bold text-white transition hover:border-[#8de2ff] hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.3" cy="6.8" r="1" className="fill-current stroke-none" />
            </svg>
            Instagram
          </a>
        </div>

        <div className="min-w-0 lg:col-span-3">
          <h3 className="font-display text-lg font-bold">Explore</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-blue-100">
            <Link href="/#hero" className="transition hover:text-white">Home</Link>
            <Link href="/#services" className="transition hover:text-white">Our services</Link>
            <Link href="/#why-us" className="transition hover:text-white">Why choose us</Link>
            <Link href="/#about" className="transition hover:text-white">About us</Link>
            <Link href="/#contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-4">
          <h3 className="font-display text-lg font-bold">Get in touch</h3>
          <div className="mt-4 space-y-3 text-sm leading-6 text-blue-100">
            <p>Al Kifaf Building, Street 4b,<br />Karama, Dubai U.A.E</p>
            <a className="block transition hover:text-white" href="tel:+971509273445">+971 50 927 3445</a>
            <a className="block break-all transition hover:text-white" href="mailto:diamondshineddxb78@gmail.com">diamondshineddxb78@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 pt-7 text-xs text-blue-200 sm:flex-row">
        <p>© 2026 Diamond Shine Laundry. All rights reserved.</p>
        <p>Karama, Dubai • UAE</p>
      </div>
    </footer>
  );
}
