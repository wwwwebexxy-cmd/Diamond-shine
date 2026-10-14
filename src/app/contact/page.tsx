export default function ContactPage() {
  return (
    <section className="bg-[#eaf5fc] px-5 pb-24 pt-36 sm:px-8 lg:px-12 lg:pt-44">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:gap-20">
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ef2a2a]">Contact</p>
          <h1 className="font-display mt-5 text-5xl font-black leading-[1.02] tracking-[-0.05em] text-[#032d63] sm:text-7xl">
            Let&apos;s get your laundry shining.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5c6d82]">
            Call, WhatsApp, or email Diamond Shine Laundry in Karama, Dubai for service questions and pickup or delivery enquiries.
          </p>
        </div>
        <div className="min-w-0 rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_rgba(3,45,99,0.1)] sm:p-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#0a79cf]">Diamond Shine Laundry</p>
          <h2 className="font-display mt-2 text-3xl font-black text-[#032d63]">Get in touch</h2>
          <div className="mt-8 space-y-5 text-[#102a4a]">
            <p><span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-[#5c6d82]">Address</span><span className="mt-1 block font-bold leading-7">Al Kifaf Building, Street 4b,<br />Karama, Dubai U.A.E</span></p>
            <p><span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-[#5c6d82]">Mobile</span><a href="tel:+971509273445" className="mt-1 block font-bold text-[#06458d]">+971 50 927 3445</a></p>
            <p><span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-[#5c6d82]">Email</span><a href="mailto:diamondshineddxb78@gmail.com" className="mt-1 block break-all font-bold text-[#06458d]">diamondshineddxb78@gmail.com</a></p>
          </div>
          <a href="https://wa.me/971509273445?text=Hello%20Diamond%20Shine%20Laundry" target="_blank" rel="noreferrer" className="mt-9 flex justify-center rounded-2xl bg-[#ef2a2a] px-5 py-4 text-sm font-extrabold text-white transition hover:bg-[#d91f1f]">
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
