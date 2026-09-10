import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ASSETS } from "@/data/assets";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const primaryServices = [
  {
    id: "software-ai",
    label: "Software & AI",
    heading: "Software & AI Systems",
    sub: "Deep learning, computer vision, NLP, and full-stack engineering.",
    illustration: ASSETS.illustrations.softwareAi,
    alt: ASSETS.illustrations.softwareAiAlt,
  },
  {
    id: "research",
    label: "Research & Thesis",
    heading: "Research & Thesis",
    sub: "Ph.D. thesis support, dissertation guidance, and journal publication.",
    illustration: ASSETS.illustrations.researchThesis,
    alt: ASSETS.illustrations.researchThesisAlt,
  },
  {
    id: "simulation",
    label: "Simulation & Analysis",
    heading: "Simulation & Analysis",
    sub: "MATLAB, Simulink, ANSYS FEA/CFD, Proteus, and Vivado.",
    illustration: ASSETS.illustrations.simulationAnalysis,
    alt: ASSETS.illustrations.simulationAnalysisAlt,
  },
];

const secondaryServices = [
  "Engineering Projects",
  "Embedded Systems",
  "Electrical & Power",
  "Mechanical / FEA",
  "IEEE Projects",
  "Technical Documentation",
];

export function CoreServices() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-surface-soft border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="What We Build for You"
          description="End-to-end project support — from concept to final submission."
          className="mb-10 sm:mb-14"
        />

        {/* 3 primary service cards — illustration dominant */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {primaryServices.map((svc) => (
            <div
              key={svc.id}
              className="group bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Illustration — 60% of card height, object-contain, generous padding */}
              <div className="relative w-full bg-background flex items-center justify-center px-6 pt-8 pb-4"
                style={{ minHeight: "220px" }}>
                <Image
                  src={svc.illustration}
                  alt={svc.alt}
                  width={320}
                  height={220}
                  style={{ width: "auto", height: "auto" }}
                  className="w-auto h-auto max-h-55 object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 90vw, 33vw"
                />
              </div>

              {/* Content — tight, minimal */}
              <div className="px-5 pb-6 pt-2 flex flex-col flex-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-primary block mb-1.5">
                  {svc.label}
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  {svc.heading}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {svc.sub}
                </p>
                <Link
                  href="#consultation"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-4 hover:underline underline-offset-2"
                >
                  Learn more <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary: simple link pills */}
        <div className="flex flex-wrap gap-2.5">
          {secondaryServices.map((svc) => (
            <Link
              key={svc}
              href="#consultation"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-background hover:border-primary/50 hover:text-primary text-sm font-medium text-muted-foreground transition-colors duration-200"
            >
              {svc}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
