import React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

const projectTypes = [
  "B.Tech Projects",
  "M.Tech Projects",
  "Capstone Projects",
  "IEEE Implementation",
  "Thesis Writing",
];

export function MidPageCallout() {
  return (
    <section className="py-10 sm:py-14 bg-background border-b border-border">
      <Container>
        <div className="relative rounded-2xl border border-border bg-surface-soft p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 overflow-hidden">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-secondary text-primary text-xs font-mono font-semibold mb-3 border border-border">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Tailored Guidance</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl lg:text-[26px] font-semibold text-foreground tracking-tight leading-snug mb-3">
              Not Sure Which Project Type Fits You?
            </h3>
            
            {/* Quick Track Badges */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {projectTypes.map((type, idx) => (
                <React.Fragment key={type}>
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {type}
                  </span>
                  {idx < projectTypes.length - 1 && (
                    <span className="text-muted-foreground/40 text-xs select-none">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex sm:flex-row items-center gap-3 shrink-0">
            <Button asChild size="default" className="h-11 px-6 text-sm font-semibold shadow-xs">
              <Link href="/contact">
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
