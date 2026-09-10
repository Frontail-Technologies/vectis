import React from "react";
import { CheckCircle2, FileText, BookOpen, FlaskConical, Presentation, Package } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Small placeholder metric — isolated here for easy replacement
const metric = { value: "500+", label: "Projects Delivered" };

const benefits = [
  {
    icon: CheckCircle2,
    title: "Working Implementation",
    sub: "Fully tested code, circuits, and simulations — nothing broken.",
  },
  {
    icon: FileText,
    title: "Complete Documentation",
    sub: "Chapter-wise reports, schematics, and IEEE-format manuscripts.",
  },
  {
    icon: BookOpen,
    title: "Research Guidance",
    sub: "Methodology, benchmarking, and Scopus journal draft support.",
  },
  {
    icon: FlaskConical,
    title: "Simulation & Testing",
    sub: "MATLAB, ANSYS, Proteus, Vivado — high-accuracy results.",
  },
  {
    icon: Presentation,
    title: "Viva Preparation",
    sub: "Slide decks, expected questions, and presentation walkthroughs.",
  },
  {
    icon: Package,
    title: "Structured Delivery",
    sub: "Milestone-based progress with full handover documentation.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-surface-warm border-b border-border">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Why Vectis"
            title="Built for Serious Academic Work"
            description="Rigorous execution, reproducible results, and complete guidance from start to submission."
          />
          {/* Lone metric integrated here */}
          <div className="shrink-0 text-right">
            <p className="font-heading text-4xl font-semibold text-primary">{metric.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
          </div>
        </div>

        {/* 6 benefits — icon + title + one line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {benefits.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
