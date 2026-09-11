import React from "react";
import Image from "next/image";
import { projectJourneySteps } from "@/data/howItWorks";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectJourney() {
  const firstRow = projectJourneySteps.slice(0, 4);
  const secondRow = projectJourneySteps.slice(4, 7);

  return (
    <section className="py-14 sm:py-18 bg-surface-warm border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Structured Workflow"
          title="Your Project & Research Journey"
          description="A clear, milestone-driven process from initial requirement to final handover."
          centered
          className="mb-8 sm:mb-12"
        />

        {/* 4 Cards in Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-4 sm:mb-5">
          {firstRow.map((item) => (
            <div
              key={item.step}
              className="group flex flex-col items-center text-center p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-200"
            >
              {/* Prominent Illustration on Top */}
              <div className="w-full flex items-center justify-center p-3 rounded-xl bg-surface-soft/80 border border-border/50 mb-3.5 min-h-28 sm:min-h-32">
                <Image
                  src={item.illustration}
                  alt={item.illustrationAlt}
                  width={200}
                  height={150}
                  style={{ width: "auto", height: "auto" }}
                  className="max-h-24 sm:max-h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 180px, 200px"
                />
              </div>

              {/* Step Number Badge */}
              <span className="font-mono text-[10px] font-bold text-primary px-2.5 py-0.5 rounded-md bg-secondary border border-border/80 mb-2">
                Step {item.step}
              </span>

              {/* Title */}
              <h3 className="font-heading text-sm sm:text-base font-semibold text-card-foreground mb-1.5">
                {item.title}
              </h3>

              {/* Short Sentence */}
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Centered Cards in Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {secondRow.map((item) => (
            <div
              key={item.step}
              className="group flex flex-col items-center text-center p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-200"
            >
              {/* Prominent Illustration on Top */}
              <div className="w-full flex items-center justify-center p-3 rounded-xl bg-surface-soft/80 border border-border/50 mb-3.5 min-h-28 sm:min-h-32">
                <Image
                  src={item.illustration}
                  alt={item.illustrationAlt}
                  width={200}
                  height={150}
                  style={{ width: "auto", height: "auto" }}
                  className="max-h-24 sm:max-h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 180px, 200px"
                />
              </div>

              {/* Step Number Badge */}
              <span className="font-mono text-[10px] font-bold text-primary px-2.5 py-0.5 rounded-md bg-secondary border border-border/80 mb-2">
                Step {item.step}
              </span>

              {/* Title */}
              <h3 className="font-heading text-sm sm:text-base font-semibold text-card-foreground mb-1.5">
                {item.title}
              </h3>

              {/* Short Sentence */}
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}



