import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { SeoLandingPage } from "@/types";
import { getAllProjects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project/ProjectCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBanner } from "@/components/sections/CtaBanner";

interface SeoLandingTemplateProps {
  pageData: SeoLandingPage;
}

export function SeoLandingTemplate({ pageData }: SeoLandingTemplateProps) {
  const allProjects = getAllProjects();
  const relatedProjects = pageData.relatedProjectSlugs
    .map((slug) => allProjects.find((p) => p.id === slug))
    .filter((p): p is typeof allProjects[0] => !!p);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 01: Hero */}
      <section className="py-14 sm:py-20 bg-surface border-b border-border">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-3">
              {pageData.heroEyebrow}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-semibold text-foreground tracking-tight leading-[1.1] mb-4 text-balance-editorial">
              {pageData.heroHeading}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              {pageData.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Button asChild size="default" className="h-11 px-6">
                <Link href={`/contact?track=${pageData.slug}`}>
                  Discuss Your Requirement
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="default" className="h-11 px-6">
                <Link href="/projects">
                  Explore Project Library
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>{pageData.targetAudience}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 02: Featured Domains & Deliverables Grid */}
      <section className="py-14 sm:py-18 bg-background border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Domains Left */}
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Specializations
              </span>
              <h2 className="font-heading text-2xl font-semibold text-foreground tracking-tight mb-6">
                Supported Technical Domains
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pageData.featuredDomains.map((domain) => (
                  <div key={domain} className="p-4 rounded-xl border border-border bg-card flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{domain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Right */}
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Package Included
              </span>
              <h2 className="font-heading text-2xl font-semibold text-foreground tracking-tight mb-6">
                Deliverables &amp; Support
              </h2>

              <ul className="space-y-3">
                {pageData.deliverablesList.map((del) => (
                  <li key={del} className="flex items-start gap-3 p-3.5 rounded-xl border border-border bg-surface">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 03: Process Steps */}
      <section className="py-14 sm:py-18 bg-surface-soft border-b border-border">
        <Container>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
              Execution Path
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
              Our 4-Stage Working Model
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageData.processSteps.map((step) => (
              <div key={step.step} className="p-5 rounded-xl bg-background border border-border flex flex-col">
                <span className="font-mono text-xs font-bold text-primary mb-2">
                  Step {step.step}
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 04: Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-14 sm:py-18 bg-background border-b border-border">
          <Container>
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                  Implementations
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                  Sample Project Portfolio
                </h2>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects">
                  Browse All
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 05: FAQs */}
      {pageData.faqs.length > 0 && (
        <section className="py-14 sm:py-18 bg-surface-soft border-b border-border">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                  Frequently Asked Questions
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                  Common Scholar Inquiries
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {pageData.faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`seo-faq-${idx}`}>
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
      )}

      {/* 06: Final CTA */}
      <CtaBanner />
    </div>
  );
}
