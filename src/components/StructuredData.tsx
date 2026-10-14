const siteUrl = "https://diamondshineuae.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Diamond Shine Laundry",
      url: siteUrl,
      logo: `${siteUrl}/images/diamond-shine-logo-transparent.webp`,
      image: `${siteUrl}/images/diamond-shine-pickup-delivery.webp`,
      description: "Diamond Shine Laundry provides wash and fold, dry cleaning, steam ironing, bed linen, curtain care, and free pickup and delivery in Karama, Dubai.",
      telephone: "+971509273445",
      email: "diamondshineddxb78@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Al Kifaf Building, Street 4b",
        addressLocality: "Karama",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      areaServed: [
        { "@type": "Place", name: "Karama" },
        { "@type": "City", name: "Dubai" },
      ],
      sameAs: ["https://www.instagram.com/diamondshine972/"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971509273445",
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Laundry services",
        itemListElement: [
          "Wash & Fold",
          "Dry Cleaning",
          "Steam Ironing",
          "Bed Linen & Curtains",
          "Fresh & Hygienic Care",
          "Free Pick Up & Delivery",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Diamond Shine Laundry",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#business` },
      inLanguage: "en-AE",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What laundry services does Diamond Shine offer?",
          acceptedAnswer: { "@type": "Answer", text: "Diamond Shine offers wash and fold, dry cleaning, steam ironing, bed linen and curtain care, fresh hygienic finishing, and pickup and delivery." },
        },
        {
          "@type": "Question",
          name: "Does Diamond Shine offer free pickup and delivery?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Diamond Shine Laundry offers free pickup and delivery support in Karama, Dubai. Call +971 50 927 3445 to arrange your service." },
        },
        {
          "@type": "Question",
          name: "Where is Diamond Shine Laundry located?",
          acceptedAnswer: { "@type": "Answer", text: "Diamond Shine Laundry is located at Al Kifaf Building, Street 4b, Karama, Dubai, United Arab Emirates." },
        },
        {
          "@type": "Question",
          name: "How can I contact Diamond Shine Laundry?",
          acceptedAnswer: { "@type": "Answer", text: "Call +971 50 927 3445 or email diamondshineddxb78@gmail.com for laundry service, pickup, and delivery enquiries." },
        },
      ],
    },
  ],
};

export default function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
