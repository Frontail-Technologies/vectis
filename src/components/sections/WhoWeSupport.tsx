import React from "react";
import { GraduationCap, FlaskConical, BookOpen, Microscope } from "lucide-react";
import { Container } from "@/components/ui/Container";

const supporters = [
  {
    icon: GraduationCap,
    title: "B.Tech Final Year",
    sub: "Capstone & Hardware Projects",
  },
  {
    icon: FlaskConical,
    title: "M.Tech Scholars",
    sub: "IEEE Paper Implementation",
  },
  {
    icon: BookOpen,
    title: "Ph.D. Candidates",
    sub: "Dissertation & Methodology",
  },
  {
    icon: Microscope,
    title: "Faculty & Researchers",
    sub: "Journal Publication & Analysis",
  },
];

export function WhoWeSupport() {
  return (
    <section className="py-14 sm:py-16 bg-surface border-b border-border">
      <Container>
        {/* Compact heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-3">
            Who We Support
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
            Supporting Engineers & Researchers<br className="hidden sm:block" /> Across Their Academic Journey
          </h2>
        </div>

        {/* 4 items separated by vertical separators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {supporters.map(({ icon: Icon, title, sub }, idx) => (
            <div
              key={title}
              className={`flex flex-col items-center text-center gap-3 px-4 sm:px-6 py-4 lg:py-1 ${
                idx !== 0 ? "lg:border-l lg:border-border" : ""
              } ${
                idx % 2 === 1 ? "border-l border-border" : ""
              } ${
                idx >= 2 ? "border-t border-border lg:border-t-0" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
