import React from "react";
import Image from "next/image";
import { projectJourneySteps } from "@/data/howItWorks";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectJourney() {
  return (
    <section className="py-14 sm:py-20 bg-background border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Structured Workflow"
          title="Your Project & Research Journey"
          description="A clear, milestone-driven process from initial requirement to final handover."
          centered
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        {/* 7 Clean Visual Process Cards */}
        <div className="grid grid-cols-1 min-[440px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {projectJourneySteps.map((item) => (
            <div
              key={item.step}
              className="group flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-200"
            >
              {/* Large Prominent Illustration with Light Background */}
              <div className="w-full flex items-center justify-center p-3 rounded-xl bg-surface-soft/70 border border-border/50 mb-3.5 min-h-28 sm:min-h-32">
                <Image
                  src={item.illustration}
                  alt={item.illustrationAlt}
                  width={200}
                  height={160}
                  style={{ width: "auto", height: "auto" }}
                  className="max-h-24 sm:max-h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 180px, (max-width: 1280px) 200px, 160px"
                />
              </div>

              {/* Small Step Number Badge */}
              <span className="font-mono text-[10px] font-bold text-primary px-2.5 py-0.5 rounded-md bg-secondary border border-border/80 mb-2">
                Step {item.step}
              </span>

              {/* Step Title */}
              <h3 className="font-heading text-sm sm:text-base font-semibold text-card-foreground">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


