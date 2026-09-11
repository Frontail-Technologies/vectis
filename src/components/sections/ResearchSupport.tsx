import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ASSETS } from "@/data/assets";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

const researchChecklist = [
  "Topic Selection & Problem Formulation",
  "Literature Review & Research Gap Mapping",
  "Methodology & Experimental Design",
  "Data Analysis & Simulation Modeling",
  "Thesis & Manuscript Drafting",
  "Publication & Journal Submission Guidance",
];

export function ResearchSupport() {
  return (
    <section className="py-14 sm:py-18 bg-background border-b border-border overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 50% Content + Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2.5">
              Academic Advisory
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-semibold text-foreground tracking-tight mb-3.5 leading-[1.15]">
              Built for Researchers &amp; Scholars at Every Milestone
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-lg leading-relaxed">
              Step-by-step technical mentorship structured to satisfy institutional academic standards and peer-reviewed rigor.
            </p>

            {/* Clean 6-Item Checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7 w-full">
              {researchChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-soft/60 border border-border/60">
                  <div className="w-5 h-5 rounded-md bg-secondary flex items-center justify-center text-primary shrink-0 mt-0.5 border border-border">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="default" className="h-11 px-6 font-semibold">
                <Link href="/research-support">
                  <span>Explore Research Support</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="default" className="h-11 px-6">
                <Link href="/contact">
                  Discuss Topic
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: 50% Large Visual */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full rounded-2xl border border-border bg-surface-soft p-4 sm:p-6 flex items-center justify-center">
              <Image
                src={ASSETS.phase2.researchSupportVisual}
                alt={ASSETS.phase2.researchSupportVisualAlt}
                width={560}
                height={420}
                style={{ width: "100%", height: "auto" }}
                className="max-h-90 sm:max-h-100 object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


