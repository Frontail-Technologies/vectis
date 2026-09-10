import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Layers, ArrowLeft } from "lucide-react";
import { getAllProjects, getProjectBySlug, getRelatedProjects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project/ProjectCard";
import { CtaBanner } from "@/components/sections/CtaBanner";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Vectis Studio",
    };
  }

  return {
    title: `${project.title} | Vectis Project Library`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(slug, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Back Navigation Bar */}
      <div className="bg-surface border-b border-border py-3">
        <Container>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Project Library</span>
          </Link>
        </Container>
      </div>

      {/* 01: Project Hero — Split layout */}
      <section className="py-12 sm:py-16 bg-surface border-b border-border overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="font-mono text-[11px]">
                  {project.branchCode}
                </Badge>
                <span className="text-xs font-mono text-primary font-semibold">
                  {project.category}
                </span>
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl lg:text-[40px] font-semibold text-foreground tracking-tight leading-[1.12] mb-4 text-balance-editorial">
                {project.title}
              </h1>

              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {project.summary}
              </p>

              {/* Technologies List */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technology.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="default" className="h-11 px-6">
                  <Link href={`/contact?project=${project.id}`}>
                    Discuss Similar Project
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
                {project.metrics && (
                  <div className="px-3.5 py-2 rounded-lg border border-border bg-background text-xs font-mono font-medium text-foreground">
                    Benchmark: <span className="text-primary font-bold">{project.metrics}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Large Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-16/11 rounded-2xl overflow-hidden border border-border shadow-md bg-muted">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 02: Overview & Key Objectives */}
      <section className="py-14 sm:py-18 bg-background border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Overview Left */}
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Scope &amp; Context
              </span>
              <h2 className="font-heading text-2xl font-semibold text-foreground tracking-tight mb-4">
                Project Overview
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.overview || project.summary}
              </p>
            </div>

            {/* Key Objectives Right */}
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Goals
              </span>
              <h2 className="font-heading text-2xl font-semibold text-foreground tracking-tight mb-4">
                Key Objectives
              </h2>
              <ul className="space-y-3">
                {(project.objectives || [
                  "Complete modular architecture design and hardware-software interface specification.",
                  "Implementation of core algorithms validated against benchmark datasets.",
                  "System performance tuning and edge-case verification under load.",
                  "Generation of publication-ready reports and viva defense slides.",
                ]).map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-[10px] font-mono font-bold text-primary shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-foreground/90 leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 03: System Architecture & Implementation */}
      {project.systemArchitecture && (
        <section className="py-14 sm:py-18 bg-surface-soft border-b border-border">
          <Container>
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Technical Blueprint
              </span>
              <h2 className="font-heading text-2xl font-semibold text-foreground tracking-tight mb-3">
                System &amp; Pipeline Architecture
              </h2>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <Layers className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
                  Data Flow &amp; Module Interaction
                </span>
              </div>
              <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                {project.systemArchitecture}
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* 04: Key Features & Deliverables Grid */}
      <section className="py-14 sm:py-18 bg-background border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Key Features — Max 6 */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Capabilities
              </span>
              <h2 className="font-heading text-2xl font-semibold text-foreground tracking-tight mb-6">
                Technical Highlights
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(project.keyFeatures || [
                  "Modular codebase adhering to clean code standards.",
                  "Parameter sweeps and benchmark metric reporting.",
                  "Hardware interface testbenches with sample stimulus.",
                  "Comprehensive exception handling and state safety.",
                ]).map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-border bg-surface/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mb-2" />
                    <p className="text-xs sm:text-sm text-foreground leading-relaxed">{feat}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                Package
              </span>
              <h2 className="font-heading text-2xl font-semibold text-foreground tracking-tight mb-6">
                Deliverables Included
              </h2>

              <ul className="space-y-2.5">
                {(project.deliverables || [
                  "Full Source Code & Repositories",
                  "Simulation Models & Test Scripts",
                  "IEEE Two-Column Project Report",
                  "Viva Presentation Slide Deck",
                  "Setup & Execution SOP Manual",
                ]).map((deliv, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 05: Related Projects — Max 3 */}
      {relatedProjects.length > 0 && (
        <section className="py-14 sm:py-18 bg-surface-soft border-b border-border">
          <Container>
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
                  Similar Research
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                  Related Projects
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

      {/* 06: Final CTA */}
      <CtaBanner />
    </div>
  );
}
