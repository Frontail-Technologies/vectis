import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { primaryServiceGroups, coreServiceTaxonomy } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";

export function CoreServices() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-surface-soft border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Core Offerings"
          title="Engineering & Research Support That Moves Your Work Forward"
          description="Verified implementation, simulation modeling, and academic research consulting structured for university and peer-reviewed rigor."
          centered
          className="mb-12 sm:mb-16"
        />

        {/* 3 Primary Service Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {primaryServiceGroups.map((group) => (
            <div
              key={group.id}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Illustration Top */}
                <div className="w-full bg-surface-warm/50 flex items-center justify-center p-6 border-b border-border min-h-45">
                  <Image
                    src={group.illustration}
                    alt={group.illustrationAlt}
                    width={280}
                    height={180}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-40 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Eyebrow & Sub-Items */}
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary block mb-1">
                    {group.badge}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground block mb-3 tracking-tight">
                    {group.subItems}
                  </span>

                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2.5">
                    {group.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                    {group.description}
                  </p>

                  {/* 2 Small Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {group.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 rounded-md bg-secondary text-[11px] font-mono text-secondary-foreground"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Compact Direct Links */}
                  <div className="pt-3 border-t border-border/70">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-semibold">
                      Key Tracks:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.compactLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-md bg-surface text-foreground/85 border border-border/80 hover:border-primary/50 hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-0">
                <Button asChild variant="outline" size="sm" className="w-full justify-between">
                  <Link href={group.href}>
                    <span>Explore {group.badge}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Quick-Access Grid for All 7 Core Offerings */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-border">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block">
                Quick Service Directory
              </span>
              <h4 className="font-heading text-base sm:text-lg font-semibold text-foreground">
                All Core Academic &amp; Engineering Offerings
              </h4>
            </div>
            <Button asChild variant="ghost" size="sm" className="text-xs font-semibold text-primary w-fit -ml-3 sm:ml-0">
              <Link href="/services">
                View Full Services Page
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {coreServiceTaxonomy.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col justify-between p-3.5 rounded-xl border border-border bg-surface-soft hover:border-primary/40 hover:bg-surface transition-all duration-200"
              >
                <div>
                  <span className="text-[10px] font-mono text-primary font-bold block mb-1">
                    {item.groupLabel.split(" ")[0]}
                  </span>
                  <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground group-hover:text-primary">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


