import React from "react";
import type { Metadata } from "next";
import { getSeoPageBySlug } from "@/data/seoPages";
import { SeoLandingTemplate } from "@/components/seo/SeoLandingTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "B.Tech Final Year Engineering Projects | Vectis Studio",
  description: "Hardware prototypes, IoT systems, full-stack software, and simulation models with complete documentation for B.Tech students.",
};

export default function BTechProjectsPage() {
  const pageData = getSeoPageBySlug("btech-projects");
  if (!pageData) notFound();
  return <SeoLandingTemplate pageData={pageData} />;
}
