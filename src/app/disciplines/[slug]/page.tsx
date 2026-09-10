import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { getAllDisciplines, getDisciplineBySlug } from "@/data/disciplines";
import { getAllProjects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project/ProjectCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBanner } from "@/components/sections/CtaBanner";

interface DisciplinePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const disciplines = getAllDisciplines();
  return disciplines.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: DisciplinePageProps): Promise<Metadata> {
  const { slug } = await params;
  const discipline = getDisciplineBySlug(slug);

  if (!discipline) {
    return {
      title: "Discipline Not Found | Vectis Studio",
    };
  }

  return {
    title: `${discipline.name} Projects & Research | Vectis Studio`,
    description: discipline.shortDesc,
  };
}

export default async function DisciplineDetailPage({ params }: DisciplinePageProps) {
  const { slug } = await params;
  const discipline = getDisciplineBySlug(slug);

  if (!discipline) {
    notFound();
  }

  const allProjects = getAllProjects();
  const relatedProjects = discipline.relatedProjectSlugs
    .map((pSlug) => allProjects.find((p) => p.id === pSlug))
    .filter((p): p is typeof allProjects[0] => !!p);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Back Navigation Bar */}
      <div className="bg-surface border-b border-border py-3">
        <Container>
          <Link
            href="/disciplines"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Disciplines</span>
          </Link>
        </Container>
      </div>

      {/* 01: Hero */}
      <section className="py-12 sm:py-16 lg:py-20 bg-surface border-b border-border">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="default" className="font-mono text-xs font-bold">
                {discipline.code}
              </Badge>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Engineering Discipline Track
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold text-foreground tracking-tight leading-[1.1] mb-4 text-balance-editorial">
              {discipline.name}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              {discipline.overview}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="default" className="h-11 px-6">
                <Link href={`/contact?branch=${discipline.code}`}>
                  Discuss {discipline.code} Project
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="default" className="h-11 px-6">
                <a href="#focus-areas">
                  View Specialization Tracks
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 02: Key Focus Areas (6 items) */}
      <section id="focus-areas" className="py-14 sm:py-18 bg-background border-b border-border">
        <Container>
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
              Domain Coverage
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
              Specialized Research &amp; Implementation Tracks
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {discipline.keyAreas.map((area) => (
              <div
                key={area.title}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary mb-3.5" />
                <h3 className="font-heading text-base font-semibold text-card-foreground mb-1.5">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 03: Supported Project Types & Tools (Split) */}
      <section className="py-14 sm:py-18 bg-surface-soft border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Project Types Left */}
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Project Catalog
              </span>
              <h2 className="font-heading text-2xl font-semibold text-foreground tracking-tight mb-6">
                Types of Projects Supported
              </h2>

              <ul className="space-y-3">
                {discipline.projectTypes.map((type) => (
                  <li key={type} className="flex items-center gap-3 p-3.5 rounded-xl border border-border bg-background">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Grid Right */}
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Engineering Stack
              </span>
              <h2 className="font-heading text-2xl font-semibold text-foreground tracking-tight mb-6">
                Standard Software &amp; Frameworks
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {discipline.tools.map((tool) => (
                  <div
                    key={tool}
                    className="p-4 rounded-xl border border-border bg-background text-center flex items-center justify-center shadow-2xs"
                  >
                    <span className="text-xs font-mono font-medium text-foreground">{tool}</span>
                  </div>
                ))}
              </div>

              {/* Deliverables snippet */}
              <div className="mt-8 p-5 rounded-xl border border-primary/20 bg-background">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block mb-2">
                  Package Deliverables
                </span>
                <ul className="text-xs text-muted-foreground space-y-1.5">
                  {discipline.deliverables.map((del) => (
                    <li key={del} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 04: Related Projects (3 items) */}
      {relatedProjects.length > 0 && (
        <section className="py-14 sm:py-18 bg-background border-b border-border">
          <Container>
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                  Portfolio
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                  Featured {discipline.code} Implementations
                </h2>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects">
                  Browse All Projects
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

      {/* 05: Discipline FAQs */}
      {discipline.faqs.length > 0 && (
        <section className="py-14 sm:py-18 bg-surface-soft border-b border-border">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                  Frequently Asked Questions
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                  {discipline.code} Consultation FAQs
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {discipline.faqs.map((faq, idx) => (
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

      {/* 06: Final CTA */}
      <CtaBanner />
    </div>
  );
}
