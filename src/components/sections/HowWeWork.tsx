import React from "react";
import { processSteps } from "@/data/howItWorks";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowWeWork() {
  return (
    <section className="py-20 sm:py-28 bg-card border-b border-border">
      <Container>
        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <SectionHeading
            eyebrow="Workflow & Methodology"
            title="From Requirement to Final Implementation"
            highlightPhrase="Final Implementation"
            description="A transparent 5-step engineering process designed to keep your project on schedule with verified milestones."
          />
        </div>

        {/* Desktop Horizontal Process / Mobile Vertical Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col justify-between relative group"
            >
              {/* Step indicator bar */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xs shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {step.step}
                  </div>
                  <div className="h-px bg-border flex-1 hidden lg:block" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-card-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal mb-4">
                  {step.description}
                </p>
              </div>

              {/* Step deliverable tag */}
              <div className="pt-3 border-t border-border/60">
                <span className="text-[11px] font-mono text-primary font-semibold block">
                  Output: {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
