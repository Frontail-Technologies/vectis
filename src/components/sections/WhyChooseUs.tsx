import React from "react";
import Image from "next/image";
import { whyChooseUsPillars } from "@/data/whyChooseUs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-18 bg-surface-soft border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Why Vectis"
          title="Built for Serious Academic Work"
          description="Reliable implementation, research guidance, testing and complete project support."
          centered
          className="mb-10 sm:mb-14"
        />

        {/* 6 Clean Visual Cards — 3 columns × 2 rows with 55-60% illustration weight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {whyChooseUsPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-200"
            >
              {/* Prominent Illustration on Top — 55-60% of card visual weight */}
              <div className="w-full flex items-center justify-center p-4 rounded-xl bg-surface-warm/60 border border-border/50 mb-4 min-h-36 sm:min-h-40">
                <Image
                  src={pillar.illustration}
                  alt={pillar.illustrationAlt}
                  width={220}
                  height={160}
                  style={{ width: "auto", height: "auto" }}
                  className="max-h-32 sm:max-h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 220px"
                />
              </div>

              {/* Card Title */}
              <h3 className="font-heading text-base sm:text-lg font-semibold text-card-foreground mb-1.5">
                {pillar.title}
              </h3>

              {/* Short Supporting Line */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


