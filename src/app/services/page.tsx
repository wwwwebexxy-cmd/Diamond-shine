import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Laundry Services in Karama, Dubai",
  description: "Explore Diamond Shine Laundry services in Karama, Dubai: wash and fold, dry cleaning, steam ironing, bed linen, curtains, hygienic care, and free pickup and delivery.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <section className="section-grid bg-[#f5faff] px-5 pb-24 pt-36 sm:px-8 lg:px-12 lg:pt-44">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ef2a2a]">Our services</p>
            <h1 className="font-display mt-5 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.05em] text-[#032d63] sm:text-7xl">
              Care for the clothes and fabrics in your life.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5c6d82]">
              Choose the service that suits you best, then call or WhatsApp Diamond Shine Laundry for pickup and delivery in Karama.
            </p>
          </div>
          <div className="relative h-64 min-w-0 overflow-hidden rounded-[2rem] border-8 border-white bg-[#eaf5fc] shadow-[0_18px_40px_rgba(3,45,99,0.12)] sm:h-80">
            <Image src="/images/diamond-shine-services.webp" alt="Fresh laundry, towels, and ironing care arranged in a modern studio" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-center" />
          </div>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[1.7rem] border border-[#dce9f4] bg-white p-7 shadow-[0_10px_28px_rgba(3,45,99,0.05)]">
              <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0a79cf]">{service.kicker}</p>
              <h2 className="font-display mt-2 text-2xl font-black text-[#032d63]">{service.title}</h2>
              <p className="mt-3 leading-7 text-[#5c6d82]">{service.description}</p>
            </article>
          ))}
        </div>
        <Link href="/#contact" className="mt-10 inline-flex rounded-full bg-[#06458d] px-7 py-4 text-sm font-extrabold text-white transition hover:bg-[#032d63]">
          Ask about pickup and delivery
        </Link>
      </div>
    </section>
  );
}
