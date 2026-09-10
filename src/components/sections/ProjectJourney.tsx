import React from "react";
import Image from "next/image";
import { ASSETS } from "@/data/assets";
import { Container } from "@/components/ui/Container";

const steps = [
  "Requirement",
  "Planning",
  "Development",
  "Testing",
  "Documentation",
  "Review",
  "Delivery",
];

export function ProjectJourney() {
  return (
    <section className="py-16 sm:py-24 bg-background border-b border-border">
      <Container>
        {/* Centered heading only */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-3">
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-[42px] font-semibold text-foreground tracking-tight leading-[1.1]">
            Your Project Journey
          </h2>
          <p className="text-muted-foreground mt-3 text-base sm:text-lg">
            A structured, transparent process from requirement to delivery.
          </p>
        </div>

        {/* Wide illustration — nearly full container, object-contain */}
        <div className="w-full flex justify-center mb-10">
          <div className="w-full max-w-280">
            <Image
              src={ASSETS.illustrations.projectJourney}
              alt={ASSETS.illustrations.projectJourneyAlt}
              width={1120}
              height={420}
              style={{ width: "100%", height: "auto" }}
              className="w-full h-auto object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1120px"
              priority={false}
            />
          </div>
        </div>

        {/* Seven step labels — responsive grid */}
        <div className="grid grid-cols-2 min-[420px]:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-2 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={step} className="flex flex-col items-center text-center p-2 rounded-lg bg-surface/40 sm:bg-transparent">
              <span className="font-mono text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest mb-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-foreground">{step}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
