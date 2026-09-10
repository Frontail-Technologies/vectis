import React from "react";
import { MessageSquare, UserCheck, RefreshCcw, PackageCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Share Your Requirement",
    sub: "Send your topic, base paper, or project brief.",
  },
  {
    num: "02",
    icon: UserCheck,
    title: "Work With a Domain Expert",
    sub: "Your project is assigned to a specialist in your branch.",
  },
  {
    num: "03",
    icon: RefreshCcw,
    title: "Review & Refine",
    sub: "Progress updates, live demos, and revision rounds.",
  },
  {
    num: "04",
    icon: PackageCheck,
    title: "Receive Final Deliverables",
    sub: "Code, documentation, and presentation-ready output.",
  },
];

export function HowOurSupportWorks() {
  return (
    <section className="py-16 sm:py-24 bg-surface-brand border-b border-surface-brand-border">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-highlight block mb-4">
            Our Process
          </span>
          <h2 className="font-heading text-[34px] sm:text-[46px] font-semibold text-surface-brand-foreground tracking-tight leading-[1.1]">
            How Our Support Works
          </h2>
        </div>

        {/* 4 steps — icon + number + title + one line, no card borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map(({ num, icon: Icon, title, sub }, idx) => (
            <div key={num} className="relative flex flex-col items-start gap-4">
              {/* Connector line (desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-14 right-0 h-px bg-surface-brand-border" />
              )}

              {/* Icon circle */}
              <div className="relative z-10 w-12 h-12 rounded-xl bg-surface-brand-card border border-surface-brand-border flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-highlight" strokeWidth={1.5} />
              </div>

              <div>
                <span className="font-mono text-[10px] font-bold text-highlight/70 uppercase tracking-widest block mb-1">
                  Step {num}
                </span>
                <h3 className="font-heading text-base sm:text-lg font-semibold text-surface-brand-foreground mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-surface-brand-muted leading-relaxed">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
