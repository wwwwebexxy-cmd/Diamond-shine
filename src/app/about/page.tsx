import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-[#f5faff] px-5 pb-24 pt-36 sm:px-8 lg:px-12 lg:pt-44">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="relative h-[30rem] overflow-hidden rounded-[2rem] border-8 border-white bg-[#eaf5fc] shadow-[0_22px_50px_rgba(3,45,99,0.12)] sm:h-[38rem]">
          <Image src="/images/diamond-shine-about.png" alt="Diamond Shine Laundry care team folding fresh laundry" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-center" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ef2a2a]">About Diamond Shine</p>
          <h1 className="font-display mt-5 max-w-2xl text-5xl font-black leading-[1.02] tracking-[-0.05em] text-[#032d63] sm:text-7xl">
            Clean clothes.<br /><span className="text-[#0a79cf]">Brighter days.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#5c6d82]">
            Diamond Shine Laundry is your local laundry care partner in Karama, Dubai, offering wash and fold, dry cleaning, steam ironing, bed linen, curtains, and hygienic finishing.
          </p>
          <p className="mt-4 max-w-xl leading-8 text-[#5c6d82]">
            Our approach is simple: make laundry easier to manage, keep communication direct, and give every piece the care it needs.
          </p>
          <Link href="/#contact" className="mt-9 inline-flex rounded-full bg-[#ef2a2a] px-7 py-4 text-sm font-extrabold text-white transition hover:bg-[#d91f1f]">
            Contact the team
          </Link>
        </div>
      </div>
    </section>
  );
}
