import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Users, Terminal } from "lucide-react";
import { ASSETS } from "@/data/assets";
import { teamMembers } from "@/data/team";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Vectis Research & Engineering Studio",
  description: "An academic research and engineering project studio bridging complex theoretical formulations with working, verified implementations.",
};

const pillars = [
  {
    icon: Terminal,
    title: "100% Working Code & Models",
    description: "Every algorithm, simulation, and hardware prototype is built to run flawlessly in your local environment with zero unverified placeholders.",
  },
  {
    icon: Users,
    title: "Direct Domain Specialists",
    description: "Work directly with postgraduates and doctoral scholars in your exact branch who understand your curriculum rubric and academic demands.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Academic Integrity & NDA",
    description: "Complete intellectual property ownership, zero-plagiarism guarantees, and confidential data management for every client.",
  },
  {
    icon: Award,
    title: "End-to-End Viva Support",
    description: "From chapter drafts to live code walkthroughs and defense slide decks, we ensure you can defend every equation and design decision.",
  },
];

const capabilities = [
  "Deep Learning & Artificial Intelligence",
  "FPGA & Embedded Hardware Design",
  "MATLAB/Simulink Dynamic Modeling",
  "ANSYS FEA Structural & CFD Analysis",
  "IEEE Transactions Algorithm Replication",
  "Ph.D. Thesis & Dissertation Advisory",
  "Scopus & SCI Journal Paper Support",
  "Custom Testbed & Prototype Building",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 01: Hero — Who We Are */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-surface border-b border-border overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Who We Are
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-semibold text-foreground tracking-tight leading-[1.1] mb-4 text-balance-editorial">
                Bridging Academic Theory With Working Engineering
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-7">
                Vectis is a specialized research and engineering studio. We help engineering students, postgraduate researchers, and Ph.D. scholars turn complex theoretical concepts into verified working projects, high-fidelity simulations, and publication-ready documentation.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="default" className="h-11 px-6">
                  <Link href="/contact">
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="default" className="h-11 px-6">
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-95 lg:max-w-105">
                <Image
                  src={ASSETS.innerPages.serviceHero}
                  alt={ASSETS.innerPages.serviceHeroAlt}
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

      {/* 02: What We Do & Scope */}
      <section className="py-16 sm:py-20 bg-background border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Our Mission
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4">
                Engineered for Academic &amp; Technical Excellence
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                Unlike generic online tutoring services or black-box project sellers, Vectis operates as a collaborative technical studio. We work with you step-by-step to build transparent, modular architectures that you can confidently present, defend, and expand upon.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl border border-border bg-surface-soft space-y-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Our Engineering Philosophy
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We believe that every technical project should be reproducible, thoroughly documented, and academically honest. That is why all our source files, simulation models, and scripts are delivered unencrypted with full code comments and 1-on-1 walkthroughs.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <strong className="text-foreground block">Strict Confidentiality</strong>
                    Protected under Non-Disclosure Agreements (NDA).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03: Why Work With Us — 4 Pillars */}
      <section className="py-16 sm:py-20 bg-surface border-b border-border">
        <Container>
          <SectionHeading
            eyebrow="Core Strengths"
            title="Why Work With Vectis Studio"
            description="Dedicated standards ensuring transparency, reproducibility, and successful evaluations."
            className="mb-12 sm:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col p-6 rounded-2xl border border-border bg-background hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-4 shrink-0">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 04: Technical Experts */}
      <section className="py-16 sm:py-20 bg-background border-b border-border">
        <Container>
          <SectionHeading
            eyebrow="Our Team"
            title="Domain Specialists &amp; Research Mentors"
            align="center"
            className="mb-12 sm:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center gap-3.5">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-border bg-muted shrink-0 shadow-sm">
                  <Image
                    src={member.photo}
                    alt={member.photoAlt}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-primary font-medium mt-0.5">{member.title}</p>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{member.credential}</p>
                </div>
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
