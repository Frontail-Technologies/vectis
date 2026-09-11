import React from "react";
import { ShieldCheck, Code2, FileCheck2, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "Confidential Handling",
    subtitle: "Strict NDA data privacy",
  },
  {
    icon: Code2,
    title: "Source Code Provided",
    subtitle: "100% verified unencrypted files",
  },
  {
    icon: FileCheck2,
    title: "Structured Documentation",
    subtitle: "University & IEEE formatting",
  },
  {
    icon: UserCheck,
    title: "Expert Guidance",
    subtitle: "Direct domain mentorship",
  },
];

export function TrustStrip() {
  return (
    <section className="py-6 sm:py-8 bg-surface-warm border-b border-border">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustBadges.map(({ icon: Icon, title, subtitle }, idx) => (
            <div
              key={title}
              className={`flex items-center gap-3.5 px-3 sm:px-4 py-2 ${
                idx !== 0 ? "md:border-l md:border-border/80" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 border border-border/60">
                <Icon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-sm font-semibold text-foreground leading-tight truncate">
                  {title}
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight truncate mt-0.5">
                  {subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
