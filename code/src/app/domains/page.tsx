import type { Metadata } from "next";
import ScrollLayout from "../components/scrollLayout";

export const metadata: Metadata = {
  title: "Domains | SmallTech — Industry Expertise Across Tech Verticals",
  description: "SmallTech delivers across app dev, web dev, AI, cloud, security, e-commerce, healthcare, logistics, and marketplace platforms. See our industry domain expertise.",
  alternates: {
    canonical: "https://smalltech.in/domains",
  },
  openGraph: {
    title: "Domains | SmallTech — Industry Expertise Across Tech Verticals",
    description: "SmallTech delivers across app dev, web dev, AI, cloud, security, e-commerce, healthcare, logistics, and marketplace platforms. See our industry domain expertise.",
    url: "https://smalltech.in/domains",
    siteName: "SmallTech",
    images: [
      {
        url: "https://smalltech.in/logo.png",
        alt: "SmallTech Logo",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function DomainsPage() {
  return <ScrollLayout />;
}
