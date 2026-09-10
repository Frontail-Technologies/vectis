import React from "react";
import { Shield, FileCheck, Code2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const trustItems = [
  {
    icon: Shield,
    title: "Confidential Handling",
    description: "Strict non-disclosure standards protecting your research data, code, and academic identity.",
  },
  {
    icon: FileCheck,
    title: "Quality & Originality Checks",
    description: "Rigorous similarity scanning, authentic mathematical modeling, and reproducible algorithmic benchmarks.",
  },
  {
    icon: Code2,
    title: "Source Code & Deliverables Handover",
    description: "Complete uncompiled source files, dataset scripts, simulation models, and walkthrough documentation.",
  },
];

export function TrustConfidentiality() {
  return (
    <section className="py-14 sm:py-18 bg-surface-soft border-b border-border">
      <Container>
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
            Academic Integrity
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
            Your Research Deserves Absolute Discretion
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-4 border border-border">
                  <Icon className="w-7 h-7" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-semibold text-card-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
