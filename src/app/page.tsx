"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";

const heroPanels = [
  {
    title: "Wash & Fold",
    subtitle: "Everyday clothes, beautifully fresh.",
    text: "A clean, neat finish for the clothes you wear every day.",
    image: "/images/diamond-shine-hero.png",
  },
  {
    title: "Dry Cleaning",
    subtitle: "Care for every special piece.",
    text: "Thoughtful cleaning for shirts, occasionwear, uniforms, and garments that need extra care.",
    image: "/images/diamond-shine-about.png",
  },
  {
    title: "Steam Ironing",
    subtitle: "Crisp clothes. Confident days.",
    text: "A smooth, polished finish for workwear, dresses, linens, and more.",
    image: "/images/diamond-shine-hero.png",
  },
  {
    title: "Pickup & Delivery",
    subtitle: "Your laundry, our priority.",
    text: "Call Diamond Shine Laundry in Karama, Dubai to ask about pickup and delivery.",
    image: "/images/diamond-shine-hero.png",
  },
] as const;

const pillars = [
  ["Reliable service", "Simple communication and dependable care for your everyday laundry."],
  ["Quality care", "Wash, dry clean, iron, and finish each item for the service it needs."],
  ["On-time delivery", "A more convenient laundry routine with pickup and delivery support."],
  ["Customer satisfaction", "Fresh, hygienic results and a bright, polished finish."],
];

export default function Home() {
  const [activeCol, setActiveCol] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = window.setTimeout(() => setActiveCol((current) => (current + 1) % heroPanels.length), 4500);
    return () => window.clearTimeout(timer);
  }, [activeCol, isHovered]);

  return (
    <div className="overflow-hidden bg-[#f5faff] text-[#102a4a]">
      <section
        id="hero"
        className="relative flex h-[100svh] min-h-[36rem] w-full flex-col overflow-hidden scroll-mt-20 bg-[#032d63] pt-20 lg:h-screen lg:min-h-0 lg:flex-row lg:pt-0"
        onPointerEnter={(event) => event.pointerType === "mouse" && setIsHovered(true)}
        onPointerLeave={(event) => event.pointerType === "mouse" && setIsHovered(false)}
      >
        {heroPanels.map((panel, index) => (
          <div
            key={panel.title}
            className={"group relative z-10 flex w-full cursor-pointer flex-col overflow-hidden border-b-2 border-white/20 transition-all duration-500 last:border-b-0 lg:h-full lg:w-1/4 lg:border-b-0 lg:border-r-2 lg:last:border-r-0 " + (activeCol === index ? "h-[62%] lg:h-full" : "h-[12.5%] lg:h-full")}
            onMouseEnter={() => setActiveCol(index)}
            onClick={() => setActiveCol(index)}
          >
            <Image src={panel.image} alt={panel.title} fill sizes="(min-width: 1024px) 25vw, 100vw" className={"object-cover transition duration-700 " + (activeCol === index ? "scale-105 opacity-100" : "scale-100 opacity-55")} />
            <div className={"absolute inset-0 transition duration-500 " + (activeCol === index ? "bg-[#032d63]/35" : "bg-[#032d63]/65")} />
            <div className={"relative z-10 flex h-full w-full flex-col justify-end p-5 sm:p-8 lg:p-7 xl:p-10 " + (activeCol === index ? "pb-8 sm:pb-10 lg:pb-12" : "justify-center lg:justify-end")}>
              <h2 className={"font-display mt-2 font-black text-white transition-all duration-500 " + (activeCol === index ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl lg:text-xl")}>{panel.title}</h2>
              <div className={"overflow-hidden transition-all duration-500 " + (activeCol === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0")}>
                <p className="mt-3 text-sm font-bold leading-6 text-white/90">{panel.subtitle}</p>
                <p className="mt-2 max-w-sm text-xs leading-5 text-white/75">{panel.text}</p>
                <a href="#contact" className="mt-5 inline-flex rounded-full bg-[#ef2a2a] px-5 py-2.5 text-xs font-extrabold text-white transition hover:bg-[#d91f1f]">Ask about this service →</a>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="about" className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 lg:py-28 lg:px-12">
        <ScrollReveal>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative min-w-0 lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-8 border-[#eaf5fc] shadow-[0_20px_45px_rgba(3,45,99,0.14)]">
              <Image src="/images/diamond-shine-about.png" alt="Diamond Shine Laundry care team folding fresh laundry" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-[#ffd82e] px-5 py-4 shadow-xl sm:-right-6">
              <p className="font-display text-2xl font-black text-[#032d63]">Shine on</p>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#06458d]">every day</p>
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-5 lg:col-span-6">
            <Badge>About Diamond Shine</Badge>
            <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.04em] text-[#032d63] sm:text-5xl">
              Laundry care that fits your day.
            </h2>
            <p className="leading-8 text-[#5c6d82]">
              Diamond Shine Laundry makes it easier to care for the clothes and fabrics around your home. From daily wash and fold to dry cleaning, steam ironing, bed linen, and curtains, we bring the right service together in one place.
            </p>
            <p className="leading-8 text-[#5c6d82]">
              Based in Al Kifaf Building, Street 4b, Karama, Dubai, our focus is simple: clean clothes, fresh results, and a laundry routine that feels lighter.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-2">
              <Stat value="5" label="Core services" />
              <Stat value="100%" label="Fresh focus" />
              <Stat value="1 call" label="To get started" />
            </div>
            <a href="#contact" className="self-start rounded-full bg-[#06458d] px-7 py-3.5 font-extrabold text-white transition hover:bg-[#032d63]">
              Contact our team →
            </a>
          </div>
        </div>
        </ScrollReveal>
      </section>

      <section id="services" className="section-grid scroll-mt-20 bg-[#f5faff] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <ScrollReveal>
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Badge>Our services</Badge>
              <h2 className="font-display mt-4 max-w-2xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#032d63] sm:text-5xl">
                Everything your laundry needs.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#5c6d82] md:text-right">
              Thoughtful care for everyday clothes, special pieces, and the fabrics that make your home feel fresh.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="group flex min-h-[410px] flex-col overflow-hidden rounded-[2rem] border border-[#dce9f4] bg-white shadow-[0_10px_30px_rgba(3,45,99,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(3,45,99,0.13)]">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={service.image} alt={service.title} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#032d63]/65 to-transparent" />
                  <span className="absolute bottom-4 left-5 text-xs font-black uppercase tracking-[0.16em] text-white">{service.kicker}</span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-9">
                  <div>
                    <h3 className="font-display text-2xl font-black text-[#032d63] sm:text-3xl">{service.title}</h3>
                    <p className="mt-3 max-w-lg leading-7 text-[#5c6d82]">{service.description}</p>
                  </div>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#06458d] transition group-hover:gap-4">Ask about this service →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      <section id="why-us" className="scroll-mt-20 bg-[#eaf5fc] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <ScrollReveal>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Badge>Why Diamond Shine</Badge>
            <h2 className="font-display mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-[#032d63] sm:text-5xl">
              A brighter way to do laundry.
            </h2>
            <p className="mt-4 leading-7 text-[#5c6d82]">
              Clean, fresh, hygienic laundry care with the friendly convenience of pickup and delivery.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="flex flex-col gap-4 lg:col-span-7">
              {pillars.map(([title, text]) => (
                <div key={title} className="flex items-start gap-5 rounded-2xl border border-[#dce9f4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#06458d] text-lg font-black text-[#ffd82e]">✓</div>
                  <div>
                    <h3 className="font-display text-xl font-black text-[#032d63]">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#5c6d82]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="rounded-[2rem] bg-[#032d63] p-8 text-white shadow-lg">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#8de2ff]">The Diamond Shine finish</p>
                <h3 className="font-display mt-2 text-3xl font-black">Freshness you can feel.</h3>
                <div className="mt-6 space-y-4 text-sm">
                  {["Wash & fold", "Dry cleaning", "Steam ironing", "Bed linen & curtains", "Fresh & hygienic care"].map((item) => (
                    <div key={item} className="flex items-center gap-3 border-b border-white/15 pb-3">
                      <span className="font-black text-[#ffd82e]">✓</span>
                      <span className="text-blue-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] bg-[#ef2a2a] p-8 text-white shadow-lg">
                <div className="mb-3 text-[#ffd82e]">✦ ✦ ✦</div>
                <p className="font-display text-2xl font-black leading-tight">Your laundry. Our priority.</p>
                <p className="mt-3 text-sm leading-6 text-red-100">Call us in Karama, Dubai and make your next laundry day feel lighter.</p>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      <section id="contact" className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <ScrollReveal>
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 rounded-[2rem] bg-[#06458d] p-8 text-center shadow-sm sm:p-12 lg:p-16">
            <Badge>Let&apos;s connect</Badge>
            <h2 className="font-display mx-auto mt-4 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">
              Ready for fresher laundry?
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-7 text-blue-100">
              Call or WhatsApp Diamond Shine Laundry to ask about your next pickup and delivery.
            </p>
            <a href="tel:+971509273445" className="mt-8 inline-flex rounded-full bg-[#ffd82e] px-7 py-3.5 font-extrabold text-[#032d63] transition hover:bg-[#ffe66c]">
              Call 050 927 3445 →
            </a>
          </div>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-5">
              <h3 className="font-display text-3xl font-black text-[#032d63]">Get in touch</h3>
              <p className="mt-3 leading-7 text-[#5c6d82]">We are here to help with service questions, pickup, and delivery enquiries.</p>
              <div className="mt-8 space-y-4">
                <ContactCard label="Call us" value="+971 50 927 3445" detail="Mobile" href="tel:+971509273445" />
                <ContactCard label="Email us" value="diamondshineddxb78@gmail.com" detail="Direct correspondence" href="mailto:diamondshineddxb78@gmail.com" />
                <div className="rounded-2xl bg-[#eaf5fc] p-5 text-sm">
                  <p className="font-bold uppercase tracking-wider text-[#5c6d82]">Find us</p>
                  <p className="mt-2 font-bold text-[#032d63]">Al Kifaf Building, Street 4b</p>
                  <p className="text-[#5c6d82]">Karama, Dubai U.A.E</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[20rem] min-w-0 overflow-hidden rounded-[2rem] bg-[#eaf5fc] sm:min-h-[24rem] lg:col-span-7">
              <Image src="/images/diamond-shine-hero.png" alt="Fresh folded laundry in a modern laundry studio" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#032d63]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-[#032d63]/85 p-5 text-white backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#8de2ff]">Clean clothes. Brighter days.</p>
                <p className="mt-2 font-display text-2xl font-black">Diamond Shine Laundry</p>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-2 rounded-full bg-[#fff4d1] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#06458d]">✦ {children}</span>;
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-2xl border border-[#dce9f4] bg-[#f5faff] p-4 text-center shadow-sm"><span className="block font-display text-2xl font-black text-[#06458d]">{value}</span><span className="text-xs font-bold text-[#5c6d82]">{label}</span></div>;
}

function ContactCard({ label, value, detail, href }: { label: string; value: string; detail: string; href: string }) {
  return <a href={href} className="flex items-center gap-4 rounded-2xl bg-[#eaf5fc] p-5 transition hover:-translate-y-1 hover:shadow-md"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#06458d] text-xl font-black text-[#ffd82e]">+</div><div className="min-w-0"><div className="text-xs font-bold uppercase tracking-wider text-[#5c6d82]">{label}</div><div className="truncate font-bold text-[#032d63]">{value}</div><div className="text-xs text-[#5c6d82]">{detail}</div></div></a>;
}
