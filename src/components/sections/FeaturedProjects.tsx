import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const displayProjects = featuredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-14 sm:py-18 bg-surface-warm border-b border-border">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <SectionHeading
            eyebrow="Recent Work"
            title="Featured Implementations"
            description="Verified engineering systems and computational research models."
          />
          <Button asChild variant="outline" size="sm" className="shrink-0">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </Button>
        </div>

        {/* 3 Project Cards — 55% Image Dominant */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-300 bg-card"
            >
              <div>
                {/* 55% Card Height Image Area */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-surface-brand/90 text-surface-brand-foreground text-[10px] font-mono font-bold uppercase tracking-wide border border-surface-brand-border">
                      {project.branchCode}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <span className="text-[10px] text-primary font-semibold uppercase tracking-widest block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline underline-offset-2"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

