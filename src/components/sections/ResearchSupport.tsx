import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ASSETS } from "@/data/assets";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

const areas = [
  "Topic Selection",
  "Literature Review",
  "Methodology",
  "Data Analysis",
  "Thesis Writing",
  "Publication Guidance",
];

export function ResearchSupport() {
  return (
    <section className="py-16 sm:py-24 bg-surface-soft border-b border-border overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: large illustration — no card border, transparent PNG sits naturally */}
          <div className="flex items-center justify-center">
            <Image
              src={ASSETS.illustrations.researchMethodology}
              alt={ASSETS.illustrations.researchMethodologyAlt}
              width={560}
              height={480}
              style={{ width: "100%", height: "auto" }}
              className="w-full max-w-130 h-auto object-contain"
              sizes="(max-width: 1024px) 90vw, 50vw"
            />
          </div>

          {/* Right: heading + concise checklist */}
          <div className="flex flex-col items-start">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-4">
              Research Support
            </span>
            <h2 className="font-heading text-3xl sm:text-[40px] font-semibold text-foreground tracking-tight mb-4 leading-[1.1]">
              Research Support<br />at Every Stage
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-sm">
              Dedicated guidance from your first draft to final publication.
            </p>

            {/* Compact checklist — label only, no sub-descriptions */}
            <ul className="space-y-2.5 mb-9 w-full">
              {areas.map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="default" className="h-11 px-6">
              <Link href="#consultation">
                Explore Research Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
