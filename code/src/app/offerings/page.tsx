import type { Metadata } from "next";
import ScrollLayout from "../components/scrollLayout";

export const metadata: Metadata = {
  title: "Offerings | SmallTech — Design-First Software Delivery",
  description: "Explore SmallTech's core offerings: high-fidelity planning, design-first development, risk-driven project management, and continuous delivery — plus our full tech stack.",
  alternates: {
    canonical: "https://smalltech.in/offerings",
  },
  openGraph: {
    title: "Offerings | SmallTech — Design-First Software Delivery",
    description: "Explore SmallTech's core offerings: high-fidelity planning, design-first development, risk-driven project management, and continuous delivery — plus our full tech stack.",
    url: "https://smalltech.in/offerings",
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

export default function OfferingsPage() {
  return (
    <ScrollLayout />
  );
}
