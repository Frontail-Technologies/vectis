import React from "react";
import Image from "next/image";
import { whyChooseUsPillars } from "@/data/whyChooseUs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-surface-warm border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Why Vectis"
          title="Built for Serious Academic Work"
          description="Reliable implementation, research guidance, testing and complete project support."
          centered
          className="mb-12 sm:mb-16"
        />

        {/* 6 Clean Visual Cards — 3 columns × 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex flex-col items-center text-center p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-200"
            >
              {/* Prominent Illustration on Top */}
              <div className="w-full flex items-center justify-center mb-4 min-h-28 sm:min-h-32">
                <Image
                  src={pillar.illustration}
                  alt={pillar.illustrationAlt}
                  width={180}
                  height={140}
                  style={{ width: "auto", height: "auto" }}
                  className="max-h-28 sm:max-h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 200px, 180px"
                />
              </div>

              {/* Card Title */}
              <h3 className="font-heading text-base sm:text-lg font-semibold text-card-foreground mb-2">
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

