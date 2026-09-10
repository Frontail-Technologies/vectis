import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceCategories } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Expertise() {
  const featuredCards = [
    serviceCategories[0], // 01 Software & AI
    serviceCategories[4], // 05 Research & Thesis
  ];

  const supportingCards = [
    serviceCategories[1], // 02 Electronics & Embedded
    serviceCategories[2], // 03 Electrical & Power
    serviceCategories[3], // 04 Mechanical & Thermal
    serviceCategories[5], // 06 IEEE Projects
  ];

  return (
    <section id="expertise" className="py-20 sm:py-28 bg-card border-b border-border">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-18">
          <SectionHeading
            eyebrow="Domain Expertise"
            title="From Research to Real-World Implementation"
            highlightPhrase="Real-World Implementation"
            description="End-to-end engineering development, algorithm reproduction, and thesis guidance led by domain specialists."
          />

          <div className="shrink-0">
            <Link
              href="#consultation"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group"
            >
              <span>Explore full service matrix</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 2-Tier Editorial Grid */}
        <div className="flex flex-col gap-8">
          {/* Top Tier: 2 Flagship Highlighted Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCards.map((service) => (
              <Card
                key={service.id}
                className="group flex flex-col sm:flex-row overflow-hidden border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative sm:w-1/2 aspect-16/10 sm:aspect-auto min-h-60 overflow-hidden bg-muted border-b sm:border-b-0 sm:border-r border-border">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-brand/90 backdrop-blur-xs text-brand-foreground font-mono text-xs font-bold border border-section-dark-border">
                    {service.number}
                  </div>
                </div>

                <div className="p-6 sm:p-7 sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider font-semibold block mb-1.5">
                      {service.tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-card-foreground tracking-tight group-hover:text-primary transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.domains.slice(0, 3).map((domain) => (
                        <span
                          key={domain}
                          className="px-2 py-0.5 rounded-md bg-secondary text-xs font-mono text-secondary-foreground"
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Separator className="mb-3.5" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-mono">
                        {service.deliverables.length} Deliverables
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Tier: 4 Supporting Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportingCards.map((service) => (
              <Card
                key={service.id}
                className="group flex flex-col overflow-hidden border-border hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-muted border-b border-border">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-brand/90 backdrop-blur-xs text-brand-foreground font-mono text-xs font-bold border border-section-dark-border">
                    {service.number}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider font-semibold block mb-1">
                      {service.tagline}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-card-foreground tracking-tight group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <Separator className="mb-3" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground font-mono">
                        {service.deliverables.length} Deliverables
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
                        <span>Details</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
