import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ASSETS } from "@/data/assets";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";

const primaryServices = [
  {
    id: "engineering-projects",
    slug: "engineering-projects",
    label: "Engineering Projects",
    title: "Engineering & Software Systems",
    description: "Custom hardware circuits, embedded systems, full-stack software, and AI/ML model implementations.",
    highlights: ["Working Hardware & Code", "Benchmark Validation"],
    illustration: ASSETS.phase2.engineeringProjects,
    alt: ASSETS.phase2.engineeringProjectsAlt,
  },
  {
    id: "research-thesis",
    slug: "research-thesis",
    label: "Research Consulting",
    title: "Research & Thesis Consulting",
    description: "Methodology formulation, literature matrix structuring, and chapter-wise dissertation guidance.",
    highlights: ["Methodology Structuring", "Chapter-Wise Drafting"],
    illustration: ASSETS.phase2.researchThesis,
    alt: ASSETS.phase2.researchThesisAlt,
  },
  {
    id: "simulation-analysis",
    slug: "simulation-analysis",
    label: "Technical Analysis",
    title: "Simulation & Numerical Analysis",
    description: "Multi-physics finite element analysis, computational fluid dynamics, and power system grid modeling.",
    highlights: ["MATLAB / Simulink", "ANSYS FEA & CFD"],
    illustration: ASSETS.phase2.simulationAnalysis,
    alt: ASSETS.phase2.simulationAnalysisAlt,
  },
];

export function CoreServices() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-surface-soft border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Core Specializations"
          title="Engineering & Research Support That Moves Your Work Forward"
          description="Structured technical assistance tailored for academic rigor and engineering excellence."
          centered
          className="mb-12 sm:mb-16"
        />

        {/* 3 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {primaryServices.map((svc) => (
            <div
              key={svc.id}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Illustration Area */}
                <div className="w-full bg-surface-warm/50 flex items-center justify-center p-6 border-b border-border min-h-45">
                  <Image
                    src={svc.illustration}
                    alt={svc.alt}
                    width={280}
                    height={180}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-40 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary block mb-2">
                    {svc.label}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2.5">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                    {svc.description}
                  </p>

                  {/* 2 Small Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {svc.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 rounded-md bg-secondary text-[11px] font-mono text-secondary-foreground"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-0">
                <Button asChild variant="outline" size="sm" className="w-full justify-between">
                  <Link href={`/services/${svc.slug}`}>
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

