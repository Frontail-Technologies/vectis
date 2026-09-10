import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { getAllServices, getServiceBySlug } from "@/data/services";
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

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Vectis Studio",
    };
  }

  return {
    title: `${service.title} | Vectis Research & Engineering`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allProjectsList = getAllProjects();
  const relatedProjects = service.relatedProjectSlugs
    .map((pSlug) => allProjectsList.find((p) => p.id === pSlug))
    .filter((p): p is typeof allProjectsList[0] => !!p);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 01: Service Hero — Compact Split */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-surface border-b border-border overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-primary mb-3">
                {service.categoryLabel}
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold text-foreground tracking-tight leading-[1.1] mb-4 text-balance-editorial">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
                {service.shortDescription}
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Button asChild size="default" className="h-11 px-6">
                  <Link href={`/contact?service=${service.slug}`}>
                    Discuss This Service
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="default" className="h-11 px-6">
                  <a href="#what-we-help">
                    View Scope &amp; Deliverables
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>NDA Protected · Direct Domain Specialist Guidance</span>
              </div>
            </div>

            {/* Right Column — Provided Custom Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-95 lg:max-w-105">
                <Image
                  src={service.illustration}
                  alt={service.illustrationAlt}
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

      {/* 02: What We Help With — Max 6 items */}
      <section id="what-we-help" className="py-16 sm:py-20 bg-background border-b border-border">
        <Container>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
              Scope of Support
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
              What We Help With
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatWeHelpWith.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary mb-3.5" />
                <h3 className="font-heading text-base font-semibold text-card-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 03: Process — 4 to 5 Steps */}
      <section id="process" className="py-16 sm:py-20 bg-surface-soft border-b border-border">
        <Container>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
              Execution Roadmap
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
              How We Deliver This Service
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={step.step}
                className={`relative flex flex-col p-5 rounded-xl bg-background border border-border ${
                  idx === 0 ? "border-primary/30" : ""
                }`}
              >
                <span className="font-mono text-xs font-bold text-primary mb-2">
                  Step {step.step}
                </span>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 04: Deliverables & Tools Grid (Split) */}
      <section className="py-16 sm:py-20 bg-background border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Deliverables Checklist */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Output
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-6">
                Deliverables Included
              </h2>

              <ul className="space-y-3.5">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 p-3 rounded-lg border border-border/60 bg-surface/50">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Tools & Technologies Compact Grid */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Stack
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-6">
                Tools &amp; Frameworks
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {service.tools.map((tool) => (
                  <div
                    key={tool}
                    className="p-3 rounded-xl border border-border bg-card text-center flex items-center justify-center"
                  >
                    <span className="text-xs font-mono font-medium text-foreground">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 05: Related Work */}
      {relatedProjects.length > 0 && (
        <section id="related-work" className="py-16 sm:py-20 bg-surface-soft border-b border-border">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                  Case Studies
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                  Related Implementations
                </h2>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects">
                  Explore Project Library
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 06: Service-Specific FAQs */}
      {service.faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-background border-b border-border">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                  Got Questions?
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
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

      {/* 07: CTA Banner */}
      <CtaBanner />
    </div>
  );
}
