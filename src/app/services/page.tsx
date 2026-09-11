import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { ASSETS } from "@/data/assets";
import { primaryServiceGroups, coreServiceTaxonomy } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Engineering & Academic Research Services | Vectis Studio",
  description: "End-to-end B.Tech, M.Tech, Capstone, and IEEE project development, project synopsis, thesis writing, and research paper publication support.",
};

const supportPhases = [
  { step: "01", name: "Requirement", desc: "Scope, syllabus & base paper review" },
  { step: "02", name: "Planning", desc: "Architecture, tools & milestone mapping" },
  { step: "03", name: "Implementation", desc: "Verified code, hardware & simulation" },
  { step: "04", name: "Documentation", desc: "Reports, thesis & paper drafts" },
  { step: "05", name: "Delivery", desc: "Complete handover, walkthrough & viva prep" },
];

export default function ServicesPage() {
  const engineeringServices = coreServiceTaxonomy.filter((s) => s.group === "engineering");
  const researchServices = coreServiceTaxonomy.filter((s) => s.group === "research");
  const academicServices = coreServiceTaxonomy.filter((s) => s.group === "academic");

  return (
    <div className="flex flex-col min-h-screen">
      {/* 01: Hero Section */}
      <section className="relative py-14 sm:py-18 lg:py-20 bg-surface border-b border-border overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Service Catalog
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-semibold text-foreground tracking-tight leading-[1.1] mb-4 text-balance-editorial">
                Engineering Projects &amp;<br />Academic Research Support
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-7">
                Comprehensive technical assistance covering B.Tech &amp; M.Tech projects, Capstone prototypes, IEEE paper replication, project synopsis, thesis writing, and publication guidance.
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

      {/* 02: 3 Primary Overarching Groups */}
      <section className="py-16 sm:py-20 bg-background border-b border-border">
        <Container>
          <SectionHeading
            eyebrow="Specialization Overview"
            title="Three Pillars of Technical & Research Support"
            description="Explore our primary domains designed for engineering departments and postgraduate scholars."
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {primaryServiceGroups.map((group) => (
              <div
                key={group.id}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                {/* Illustration Top */}
                <div className="w-full bg-surface-soft flex items-center justify-center p-6 border-b border-border min-h-48">
                  <Image
                    src={group.illustration}
                    alt={group.illustrationAlt}
                    width={260}
                    height={160}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-36 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary block mb-1">
                      {group.badge}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2">
                      {group.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      {group.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {group.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2 py-0.5 rounded-md bg-secondary text-[11px] font-mono text-secondary-foreground"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-semibold">
                      Included Tracks:
                    </span>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {group.compactLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-surface text-foreground/90 border border-border hover:border-primary/50 hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 03: Complete 7-Track Dedicated Services Catalog */}
      <section className="py-16 sm:py-24 bg-surface-soft border-b border-border">
        <Container>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
              Full Service Breakdown
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
              All 7 Core Service Tracks
            </h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Clear deliverables, structured methodologies, and complete handover packages across undergraduate, postgraduate, and doctoral tracks.
            </p>
          </div>

          {/* Group A: Engineering Projects */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary px-2.5 py-1 rounded-md bg-secondary">
                Domain 01
              </span>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Engineering Projects
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engineeringServices.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col justify-between p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xs transition-all"
                >
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">
                      {service.tagline}
                    </span>
                    <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2.5">
                      {service.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.offerings.map((offering) => (
                        <div key={offering} className="flex items-center gap-2 text-xs font-medium text-foreground">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{offering}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild variant="outline" size="sm" className="w-full justify-between mt-2">
                    <Link href={service.href}>
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Group B: Research Projects */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary px-2.5 py-1 rounded-md bg-secondary">
                Domain 02
              </span>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Research &amp; Simulation Projects
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchServices.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col justify-between p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xs transition-all"
                >
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">
                      {service.tagline}
                    </span>
                    <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2.5">
                      {service.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.offerings.map((offering) => (
                        <div key={offering} className="flex items-center gap-2 text-xs font-medium text-foreground">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{offering}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild variant="outline" size="sm" className="w-full justify-between mt-2">
                    <Link href={service.href}>
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </Button>
                </div>
              ))}

              {/* Simulation Analysis Card */}
              <div className="flex flex-col justify-between p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xs transition-all">
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">
                    Multi-Physics &amp; Numerical Solvers
                  </span>
                  <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2.5">
                    Simulation &amp; Technical Analysis
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                    Finite element analysis, computational fluid dynamics, and power system grid modeling in MATLAB, ANSYS, and PSCAD.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {["MATLAB / Simulink", "ANSYS FEA & CFD", "Power Electronics", "Mesh Independence"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button asChild variant="outline" size="sm" className="w-full justify-between mt-2">
                  <Link href="/services/simulation-analysis">
                    <span>Explore Simulation &amp; Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Group C: Academic Research */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary px-2.5 py-1 rounded-md bg-secondary">
                Domain 03
              </span>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Academic Research &amp; Publication
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {academicServices.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col justify-between p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xs transition-all"
                >
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">
                      {service.tagline}
                    </span>
                    <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2.5">
                      {service.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.offerings.map((offering) => (
                        <div key={offering} className="flex items-center gap-2 text-xs font-medium text-foreground">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{offering}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild variant="outline" size="sm" className="w-full justify-between mt-2">
                    <Link href={service.href}>
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 04: Process Flow */}
      <section className="py-14 sm:py-18 bg-background border-b border-border">
        <Container>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
              Working Process
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
              Structured Support from Scope to Viva
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

      {/* 05: Final CTA */}
      <CtaBanner />
    </div>
  );
}

