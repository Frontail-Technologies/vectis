import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectItem } from "@/types";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  const projectHref = `/projects/${project.id}`;

  return (
    <article
      className={`group flex flex-col rounded-2xl border border-border bg-background overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-300 ${className}`}
    >
      {/* Project Image */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-muted border-b border-border">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Branch Code Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-xs font-mono text-[11px] shadow-xs">
            {project.branchCode}
          </Badge>
        </div>

        {/* Optional Metric Tag */}
        {project.metrics && (
          <div className="absolute bottom-3 right-3">
            <span className="inline-block px-2.5 py-1 rounded-md bg-surface-brand/90 backdrop-blur-xs text-surface-brand-foreground text-[10px] font-mono font-medium shadow-xs">
              {project.metrics}
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[11px] font-mono text-primary uppercase tracking-wider font-semibold block mb-1.5">
            {project.category}
          </span>
          <h3 className="font-heading text-lg font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors leading-snug mb-2">
            <Link href={projectHref} className="focus-visible:outline-none">
              {project.title}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
            {project.summary}
          </p>

          {/* Tech Badges — 2 to 3 tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technology.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-secondary text-[11px] font-mono text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Link Action */}
        <div className="pt-3.5 border-t border-border flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-mono">
            Verified Build
          </span>
          <Link
            href={projectHref}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform"
          >
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
