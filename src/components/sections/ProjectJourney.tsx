import React from "react";
import { projectJourneySteps } from "@/data/howItWorks";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectJourney() {
  return (
    <section className="py-16 sm:py-24 bg-background border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Structured Workflow"
          title="Your Project & Research Journey"
          description="A clear, milestone-driven process from initial requirement to final handover."
          centered
          className="mb-12 sm:mb-16"
        />

        {/* 7 Clean Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4">
          {projectJourneySteps.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col p-4 sm:p-4.5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-200"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg bg-secondary text-primary font-mono text-xs font-bold flex items-center justify-center border border-border">
                  {item.step}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-sm sm:text-base font-semibold text-card-foreground mb-1.5">
                {item.title}
              </h3>

              {/* One short line */}
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

