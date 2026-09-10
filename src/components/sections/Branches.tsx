import React from "react";
import { engineeringBranches } from "@/data/branches";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BranchShowcase } from "@/components/sections/BranchShowcase";
import { EngineeringCrosshair } from "@/components/shared/EngineeringCrosshair";

export function Branches() {
  return (
    <section
      id="branches"
      className="py-20 sm:py-28 bg-section-dark text-section-dark-foreground relative overflow-hidden border-b border-section-dark-border"
    >
      {/* Soft technical grid */}
      <div className="absolute inset-0 technical-grid-dark opacity-35 pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-18">
          <SectionHeading
            eyebrow="Engineering Disciplines"
            title="Built Across Engineering Disciplines"
            highlightPhrase="Engineering Disciplines"
            description="Dedicated technical stacks, mathematical formulations, and hardware testbenches configured per university department guidelines."
            theme="dark"
          />

          <div className="hidden sm:block shrink-0">
            <EngineeringCrosshair theme="dark" label="STANDARDS.IEEE_2026" />
          </div>
        </div>

        {/* Simplified Capabilities Presentation */}
        <BranchShowcase branches={engineeringBranches} />
      </Container>
    </section>
  );
}
