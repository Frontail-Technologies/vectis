import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Cpu, Radio, Wrench, Building2, Sparkles } from "lucide-react";
import { getAllDisciplines } from "@/data/disciplines";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Engineering Disciplines & Domain Matrix | Vectis Studio",
  description: "Specialized engineering departments covering Computer Science, Electronics, Electrical, Mechanical, and Civil research.",
};

const disciplineIcons: Record<string, typeof Cpu> = {
  CSE: Cpu,
  ECE: Radio,
  EEE: Sparkles,
  MECH: Wrench,
  CIVIL: Building2,
};

export default function DisciplinesDirectoryPage() {
  const disciplines = getAllDisciplines();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Disciplines Hero */}
      <section className="py-14 sm:py-20 bg-surface border-b border-border">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-3">
              Engineering Matrix
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold text-foreground tracking-tight leading-[1.1] mb-3 text-balance-editorial">
              Specialized Engineering<br />Disciplines
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Dedicated domain teams equipped with branch-specific software licenses, mathematical models, and hardware testbenches.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Disciplines Grid */}
      <section className="py-16 sm:py-20 bg-background border-b border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((d) => {
              const IconComponent = disciplineIcons[d.code] || Cpu;
              return (
                <div
                  key={d.slug}
                  className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <Badge variant="secondary" className="font-mono text-xs">
                        {d.code}
                      </Badge>
                    </div>

                    <h2 className="font-heading text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2">
                      <Link href={`/disciplines/${d.slug}`}>
                        {d.name}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {d.shortDesc}
                    </p>

                    {/* Tools Sample */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {d.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded-md bg-secondary text-[11px] font-mono text-secondary-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-mono">
                      {d.keyAreas.length} Focus Tracks
                    </span>
                    <Link
                      href={`/disciplines/${d.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Discipline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaBanner />
    </div>
  );
}
