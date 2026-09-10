import React from "react";
import type { Metadata } from "next";
import { getSeoPageBySlug } from "@/data/seoPages";
import { SeoLandingTemplate } from "@/components/seo/SeoLandingTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "M.Tech Projects & Dissertation Support | Vectis Studio",
  description: "Advanced engineering projects, simulation modeling, and dissertation documentation for M.Tech & M.S. scholars.",
};

export default function MTechProjectsPage() {
  const pageData = getSeoPageBySlug("mtech-projects");
  if (!pageData) notFound();
  return <SeoLandingTemplate pageData={pageData} />;
}
