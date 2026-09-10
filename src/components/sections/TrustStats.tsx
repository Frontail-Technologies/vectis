import React from "react";
import { placeholderStats } from "@/data/stats";
import { Container } from "@/components/ui/Container";

export function TrustStats() {
  return (
    <section className="py-18 sm:py-24 bg-background border-b border-border">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {placeholderStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col ${
                idx !== 0 ? "pt-6 sm:pt-0 sm:pl-8 lg:pl-10" : ""
              }`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-mono mb-2">
                {stat.value}
              </div>
              <h4 className="text-sm sm:text-base font-bold text-foreground tracking-tight mb-1">
                {stat.label}
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-normal font-sans">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
