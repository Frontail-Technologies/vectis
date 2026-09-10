import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ASSETS } from "@/data/assets";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Engineering & Research Services | Vectis Studio",
  description: "End-to-end engineering project development, simulation analysis, and academic research consulting for scholars and students.",
};

const primaryServiceCards = [
  {
    slug: "engineering-projects",
    title: "Engineering Project Development",
    sub: "Hardware, embedded firmware, and full-stack software with complete source code.",
    illustration: ASSETS.phase2.engineeringProjects,
    illustrationAlt: ASSETS.phase2.engineeringProjectsAlt,
  },
  {
    slug: "research-thesis",
    title: "Research & Thesis Support",
    sub: "Structured guidance for M.Tech dissertations, Ph.D. theses, and journal manuscripts.",
    illustration: ASSETS.phase2.researchThesis,
    illustrationAlt: ASSETS.phase2.researchThesisAlt,
  },
  {
    slug: "simulation-analysis",
    title: "Simulation & Technical Analysis",
    sub: "High-fidelity numerical modeling in MATLAB/Simulink, ANSYS FEA/CFD, and circuit solvers.",
    illustration: ASSETS.phase2.simulationAnalysis,
    illustrationAlt: ASSETS.phase2.simulationAnalysisAlt,
  },
];

const secondaryServiceLinks = [
  { label: "AI & Machine Learning", href: "/services/engineering-projects", tag: "CSE" },
  { label: "Embedded & IoT", href: "/services/engineering-projects", tag: "ECE" },
  { label: "Electrical Systems", href: "/services/simulation-analysis", tag: "EEE" },
  { label: "Mechanical Engineering", href: "/services/simulation-analysis", tag: "MECH" },
  { label: "IEEE Paper Implementation", href: "/services/ieee-projects", tag: "BENCHMARK" },
  { label: "Research Paper Assistance", href: "/services/research-paper-support", tag: "SCOPUS/SCI" },
  { label: "Technical Documentation", href: "/services/research-thesis", tag: "LATEX" },
  { label: "Viva & Defense Support", href: "/services/engineering-projects", tag: "MENTORING" },
];

const supportPhases = [
  { step: "01", name: "Requirement", desc: "Scope & brief review" },
  { step: "02", name: "Planning", desc: "Architecture & milestones" },
  { step: "03", name: "Implementation", desc: "Build & simulation" },
  { step: "04", name: "Review", desc: "Demo & guide feedback" },
  { step: "05", name: "Delivery", desc: "Code, reports & viva prep" },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Services Directory Hero */}
      <section className="relative py-14 sm:py-18 lg:py-20 bg-surface border-b border-border overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Our Services
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-semibold text-foreground tracking-tight leading-[1.1] mb-4 text-balance-editorial">
                Engineering, Research &amp;<br />Technical Support
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-7">
                Structured project implementation, simulation modeling, and academic consulting tailored to your curriculum and research goals.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="default" className="h-11 px-6">
                  <Link href="/contact">
                    Discuss Your Requirement
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="default" className="h-11 px-6">
                  <Link href="/projects">
                    View Project Library
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-95 lg:max-w-105">
                <Image
                  src={ASSETS.phase2.servicesHero}
                  alt={ASSETS.phase2.servicesHeroAlt}
                  width={420}
                  height={320}
                  style={{ width: "100%", height: "auto" }}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Primary Services — 3 Dominant Cards */}
      <section className="py-16 sm:py-20 bg-background border-b border-border">
        <Container>
          <SectionHeading
            eyebrow="Core Specializations"
            title="Primary Service Categories"
            description="Focused engineering domains with dedicated domain specialists."
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {primaryServiceCards.map((service) => (
              <div
                key={service.slug}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                {/* Illustration Top */}
                <div className="w-full bg-surface-soft flex items-center justify-center p-6 border-b border-border min-h-52.5">
                  <Image
                    src={service.illustration}
                    alt={service.illustrationAlt}
                    width={280}
                    height={190}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-45 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {service.sub}
                    </p>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Secondary Services — Typography & Row Links */}
      <section className="py-16 bg-surface-soft border-b border-border">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Specialized Tracks
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                Discipline-Specific Support
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Modular technical guidance across academic branches and delivery requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {secondaryServiceLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center justify-between p-4 rounded-xl border border-border bg-background hover:border-primary/50 hover:bg-surface transition-all duration-200"
              >
                <div>
                  <span className="text-[10px] font-mono text-primary font-bold block mb-0.5">
                    {item.tag}
                  </span>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* How We Support You — Minimal Phase Flow */}
      <section className="py-14 sm:py-18 bg-background border-b border-border">
        <Container>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
              Working Process
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
              How We Support You
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {supportPhases.map((phase, idx) => (
              <div
                key={phase.step}
                className={`flex flex-col items-center text-center p-3 rounded-xl ${
                  idx !== 0 ? "sm:border-l sm:border-border" : ""
                }`}
              >
                <span className="font-mono text-xs font-bold text-primary mb-1">
                  Step {phase.step}
                </span>
                <span className="text-sm font-semibold text-foreground mb-0.5">
                  {phase.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {phase.desc}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CtaBanner />
    </div>
  );
}
