import React from "react";
import type { Metadata } from "next";
import { getAllProjects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectDirectoryClient } from "./ProjectDirectoryClient";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Engineering & Research Projects Library | Vectis Studio",
  description: "Explore verified technical projects, simulations, and IEEE paper implementations across CSE, ECE, EEE, and Mechanical engineering.",
};

export default function ProjectsDirectoryPage() {
  const allProjects = getAllProjects();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Projects Hero */}
      <section className="py-12 sm:py-16 bg-surface border-b border-border">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-3">
              Technical Project Library
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold text-foreground tracking-tight leading-[1.1] mb-3 text-balance-editorial">
              Explore Engineering &amp;<br />Research Projects
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Verified hardware, simulation, and algorithm implementations ready for replication, enhancement, and academic study.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Filterable Projects Section */}
      <section className="py-12 sm:py-16 bg-background border-b border-border">
        <Container>
          <ProjectDirectoryClient initialProjects={allProjects} />
        </Container>
      </section>

      {/* Final CTA */}
      <CtaBanner />
    </div>
  );
}
