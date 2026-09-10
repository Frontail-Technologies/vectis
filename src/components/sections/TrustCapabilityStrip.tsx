import React from "react";
import { Container } from "@/components/ui/Container";
import { Cpu, Server, Zap, Wrench, Brain, BookOpen } from "lucide-react";

export function TrustCapabilityStrip() {
  const domains = [
    { icon: <Server className="w-4 h-4 text-primary" />, label: "CSE & IT Systems" },
    { icon: <Cpu className="w-4 h-4 text-primary" />, label: "ECE & Embedded IoT" },
    { icon: <Zap className="w-4 h-4 text-primary" />, label: "EEE & Power Systems" },
    { icon: <Wrench className="w-4 h-4 text-primary" />, label: "Mechanical FEA & CFD" },
    { icon: <Brain className="w-4 h-4 text-primary" />, label: "AI, ML & Data Science" },
    { icon: <BookOpen className="w-4 h-4 text-primary" />, label: "Research & Thesis Support" },
  ];

  return (
    <div className="border-b border-border bg-card/60 backdrop-blur-xs py-4">
      <Container>
        <div className="flex items-center justify-between gap-6 overflow-x-auto scrollbar-none text-xs sm:text-sm font-medium text-foreground/80">
          {domains.map((domain, index) => (
            <div
              key={domain.label}
              className="inline-flex items-center gap-2 shrink-0 py-1"
            >
              {domain.icon}
              <span className="whitespace-nowrap">{domain.label}</span>
              {index < domains.length - 1 && (
                <span className="text-border ml-6 hidden lg:inline" aria-hidden="true">
                  •
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
