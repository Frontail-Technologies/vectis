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
    <section className="py-16 sm:py-24 bg-background border-b border-border overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Content + Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-3">
              Academic Advisory
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] font-semibold text-foreground tracking-tight mb-4 leading-[1.15]">
              Built for Researchers & Scholars at Every Milestone
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Step-by-step technical mentorship structured to satisfy institutional academic standards and peer-reviewed rigor.
            </p>

            {/* Clean 6-Item Checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9 w-full">
              {researchChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-secondary flex items-center justify-center text-primary shrink-0 mt-0.5 border border-border">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3.5">
              <Button asChild size="default" className="h-11 px-6">
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

          {/* Right Column: Clean Visual */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-130 rounded-2xl border border-border bg-surface-soft p-6 sm:p-8 flex items-center justify-center">
              <Image
                src={ASSETS.phase2.researchSupportVisual}
                alt={ASSETS.phase2.researchSupportVisualAlt}
                width={520}
                height={400}
                style={{ width: "auto", height: "auto" }}
                className="max-h-[320px] object-contain"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

