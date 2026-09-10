import React from "react";
import { Users, Code, FileText, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";

const mentorshipPillars = [
  {
    num: "01",
    icon: Users,
    title: "1-on-1 Specialist Sessions",
    description: "Direct technical consultations on architecture design, algorithm formulation, and thesis methodology.",
  },
  {
    num: "02",
    icon: Code,
    title: "Staged Code & Simulation Reviews",
    description: "Transparent milestone updates with working intermediate code, simulation waveforms, and validation data.",
  },
  {
    num: "03",
    icon: FileText,
    title: "Complete Deliverables Package",
    description: "Uncompiled source files, circuit schematics, dataset scripts, and formatted academic documentation.",
  },
  {
    num: "04",
    icon: Award,
    title: "Viva & Defense Preparation",
    description: "Technical presentation walkthroughs, viva Q&A guidance, and conceptual doubt resolution.",
  },
];

export function HowOurSupportWorks() {
  return (
    <section className="py-16 sm:py-24 bg-surface-brand border-b border-surface-brand-border">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-highlight block mb-3">
            Mentorship Model
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] font-semibold text-surface-brand-foreground tracking-tight leading-[1.15]">
            How Our Consultation &amp; Support Operates
          </h2>
          <p className="text-sm sm:text-base text-surface-brand-muted mt-3 max-w-lg mx-auto leading-relaxed">
            Transparent, mentor-led guidance structured to ensure complete conceptual clarity and project success.
          </p>
        </div>

        {/* 4 Support Pillars — clean cards inside dark surface */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentorshipPillars.map(({ num, icon: Icon, title, description }) => (
            <div
              key={num}
              className="flex flex-col p-6 rounded-2xl bg-surface-brand-card/80 border border-surface-brand-border/60 hover:border-highlight/40 transition-all duration-200"
            >
              {/* Icon & Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-surface-brand border border-surface-brand-border flex items-center justify-center text-highlight">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="font-mono text-xs font-bold text-highlight/80">
                  {num}
                </span>
              </div>

              <h3 className="font-heading text-base font-semibold text-surface-brand-foreground mb-2">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-surface-brand-muted leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

