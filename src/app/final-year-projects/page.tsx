import React from "react";
import type { Metadata } from "next";
import { getSeoPageBySlug } from "@/data/seoPages";
import { SeoLandingTemplate } from "@/components/seo/SeoLandingTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Final Year Major & Minor Engineering Projects | Vectis Studio",
  description: "End-to-end technical mentoring, prototype construction, and IEEE paper reproduction for engineering students.",
};

export default function FinalYearProjectsPage() {
  const pageData = getSeoPageBySlug("final-year-projects");
  if (!pageData) notFound();
  return <SeoLandingTemplate pageData={pageData} />;
}
