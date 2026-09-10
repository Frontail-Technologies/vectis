import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Microscope,
  Award,
} from "lucide-react";
import { ASSETS } from "@/data/assets";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Academic Research Support & Thesis Consulting | Vectis Studio",
  description: "End-to-end research guidance from topic selection and literature review to mathematical methodology, analysis, and Scopus/SCI publication.",
};

const whoWeSupport = [
  { icon: GraduationCap, title: "Master's Students", sub: "M.Tech, M.S. & M.E." },
  { icon: BookOpen, title: "Ph.D. Scholars", sub: "Dissertation & Defense" },
  { icon: Microscope, title: "Independent Researchers", sub: "Journal Manuscripts" },
  { icon: Award, title: "Academic Faculty", sub: "Grants & Co-Authorship" },
];

const researchStages = [
  "Topic Selection",
  "Literature Review",
  "Research Gap",
  "Methodology",
  "Data Collection",
  "Data Analysis",
  "Writing",
  "Publication",
];

const coreSupportBlocks = [
  {
    title: "Research Planning & Gap Analysis",
    description: "Systematic mapping of indexed literature to isolate novel contributions and formulate mathematical objectives.",
    illustration: ASSETS.phase2.researchThesis,
    illustrationAlt: ASSETS.phase2.researchThesisAlt,
  },
  {
    title: "Analysis & Methodology Formulation",
    description: "Rigorous algorithm design, benchmark simulation modeling, and empirical data validation with statistical rigor.",
    illustration: ASSETS.phase2.simulationAnalysis,
    illustrationAlt: ASSETS.phase2.simulationAnalysisAlt,
  },
  {
    title: "Writing & Journal Documentation",
    description: "Chapter authoring, LaTeX formatting, Turnitin plagiarism clearance, and Scopus/SCI peer review rebuttals.",
    illustration: ASSETS.phase2.researchSupportVisual,
    illustrationAlt: ASSETS.phase2.researchSupportVisualAlt,
  },
];

const researchDisciplines = [
  "Computer Science & AI",
  "Data Science & Analytics",
  "Electronics & VLSI",
  "Electrical & Power Systems",
  "Mechanical & Thermal FEA",
  "Civil & Structural Eng.",
  "Biomedical Engineering",
  "Interdisciplinary Tracks",
];

const howItWorks = [
  { step: "01", title: "Share Requirement", desc: "Submit your research topic, draft, or problem brief." },
  { step: "02", title: "Discuss With Expert", desc: "1-on-1 strategy alignment with a domain Ph.D. specialist." },
  { step: "03", title: "Review & Refine", desc: "Iterative chapter deliveries with supervisor feedback." },
  { step: "04", title: "Receive Structured Output", desc: "Camera-ready manuscripts, code, and defense slide decks." },
];

const researchFaqs = [
  {
    question: "At what stage of my research can I seek support?",
    answer: "We assist at any stage — from initial topic selection and proposal drafting to mid-term simulation troubleshooting and final thesis defense preparation.",
  },
  {
    question: "How do you ensure zero plagiarism in academic manuscripts?",
    answer: "All mathematical derivations, analysis text, and literature syntheses are authored from scratch and validated with Turnitin plagiarism reports.",
  },
  {
    question: "Do you provide code and simulation files for experimental research?",
    answer: "Yes, you receive complete unencrypted source code, dataset preprocessing scripts, and simulation models (MATLAB, Python, ANSYS) for full reproducibility.",
  },
  {
    question: "Can you assist in responding to journal peer review comments?",
    answer: "We help draft point-by-point rebuttal letters, perform additional experiments requested by reviewers, and format revised manuscripts.",
  },
  {
    question: "Is my research data kept confidential?",
    answer: "Yes, every research project is protected under a legally binding Non-Disclosure Agreement (NDA) with strict data privacy protocols.",
  },
  {
    question: "Can you format my thesis according to my university's template?",
    answer: "We format the entire manuscript in LaTeX or Word according to your university's exact margin, typography, and citation specifications.",
  },
];

export default function ResearchSupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 01: Hero — Clean, Low-Density Split */}
      <section className="relative py-14 sm:py-18 lg:py-20 bg-surface border-b border-border overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Research Support
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-semibold text-foreground tracking-tight leading-[1.1] mb-4 text-balance-editorial">
                Research Support From<br />Idea to Submission
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-7">
                Structured methodology design, mathematical modeling, simulation analysis, and publication consulting for scholars and postgraduate researchers.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="default" className="h-11 px-6">
                  <Link href="/contact?type=research">
                    Discuss Your Research
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="default" className="h-11 px-6">
                  <a href="#stages">
                    Explore Research Stages
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-95 lg:max-w-105">
                <Image
                  src={ASSETS.phase2.researchSupportHero}
                  alt={ASSETS.phase2.researchSupportHeroAlt}
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

      {/* 02: Who We Support — Minimal 4-column divided strip */}
      <section className="py-12 bg-background border-b border-border">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {whoWeSupport.map(({ icon: Icon, title, sub }, idx) => (
              <div
                key={title}
                className={`flex flex-col items-center text-center gap-2.5 px-4 sm:px-6 py-4 lg:py-1 ${
                  idx !== 0 ? "lg:border-l lg:border-border" : ""
                } ${
                  idx % 2 === 1 ? "border-l border-border lg:border-l" : ""
                } ${
                  idx >= 2 ? "border-t border-border lg:border-t-0" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
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

      {/* 03: Research Stages — Clear Visual Timeline */}
      <section id="stages" className="py-16 sm:py-20 bg-surface-soft border-b border-border">
        <Container>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
              Academic Roadmap
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
              The 8-Stage Research Lifecycle
            </h2>
          </div>

          {/* Research Stages Graphic */}
          <div className="w-full flex justify-center mb-10">
            <div className="w-full max-w-240">
              <Image
                src={ASSETS.phase2.researchStages}
                alt={ASSETS.phase2.researchStagesAlt}
                width={960}
                height={260}
                style={{ width: "100%", height: "auto" }}
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {researchStages.map((stage, idx) => (
              <div
                key={stage}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-background border border-border"
              >
                <span className="font-mono text-xs font-bold text-primary mb-1.5">
                  0{idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 04: Core Support — 3 Major Visual Blocks */}
      <section className="py-16 sm:py-20 bg-background border-b border-border">
        <Container>
          <SectionHeading
            eyebrow="Core Pillars"
            title="Comprehensive Research Assistance"
            description="Focused advisory across foundational research milestones."
            className="mb-12 sm:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreSupportBlocks.map((block) => (
              <div
                key={block.title}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                {/* Illustration Area */}
                <div className="w-full bg-surface-soft flex items-center justify-center p-6 border-b border-border min-h-52.5">
                  <Image
                    src={block.illustration}
                    alt={block.illustrationAlt}
                    width={280}
                    height={190}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-45 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-base font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2">
                    {block.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 05: Research Disciplines — Compact Grid */}
      <section className="py-14 sm:py-18 bg-surface-warm border-b border-border">
        <Container>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
              Domains
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
              Covered Research Fields
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
            {researchDisciplines.map((field) => (
              <div
                key={field}
                className="p-3.5 rounded-xl border border-border bg-background text-center flex items-center justify-center"
              >
                <span className="text-xs font-medium text-foreground">{field}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 06: How Support Works — 4 Simple Steps */}
      <section className="py-16 sm:py-20 bg-background border-b border-border">
        <Container>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
              Consultation Workflow
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
              How Our Support Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-start p-5 rounded-xl bg-surface border border-border">
                <span className="font-mono text-xs font-bold text-primary mb-2">
                  Step {step}
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1.5">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 07: FAQs — Max 6 items */}
      <section className="py-16 sm:py-20 bg-surface-soft border-b border-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Scholar FAQs
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {researchFaqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-heading text-base font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* 08: Final CTA */}
      <CtaBanner />
    </div>
  );
}
