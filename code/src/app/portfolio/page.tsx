import type { Metadata } from "next";
import ScrollLayout from "../components/scrollLayout";

export const metadata: Metadata = {
  title: "Portfolio | SmallTech — AI Agents & Apps We've Built",
  description: "See what SmallTech has shipped: Zer0 (AI agents for small businesses), #local (civic issue reporting platform), and @str@ (AI-driven content and marketing).",
  alternates: {
    canonical: "https://smalltech.in/portfolio",
  },
  openGraph: {
    title: "Portfolio | SmallTech — AI Agents & Apps We've Built",
    description: "See what SmallTech has shipped: Zer0 (AI agents for small businesses), #local (civic issue reporting platform), and @str@ (AI-driven content and marketing).",
    url: "https://smalltech.in/portfolio",
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