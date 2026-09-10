import React from "react";
import type { Metadata } from "next";
import { getSeoPageBySlug } from "@/data/seoPages";
import { SeoLandingTemplate } from "@/components/seo/SeoLandingTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "IEEE Transactions Paper Implementation & Research | Vectis Studio",
  description: "Exact algorithmic reproduction and novel performance enhancement of published IEEE Transactions papers.",
};

export default function IeeeProjectsLandingPage() {
  const pageData = getSeoPageBySlug("ieee-projects");
  if (!pageData) notFound();
  return <SeoLandingTemplate pageData={pageData} />;
}
