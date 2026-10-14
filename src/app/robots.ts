import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://diamondshineuae.com/sitemap.xml",
    host: "https://diamondshineuae.com",
  };
}
