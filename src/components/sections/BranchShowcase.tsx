"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EngineeringBranch } from "@/types";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface BranchShowcaseProps {
  branches: EngineeringBranch[];
}

export function BranchShowcase({ branches }: BranchShowcaseProps) {
  const [activeId, setActiveId] = useState<string>(branches[0]?.id || "cse");

  const currentBranch =
    branches.find((b) => b.id === activeId) || branches[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      {/* Left Column: Clean Discipline Navigation (4 cols) */}
      <div className="lg:col-span-4 flex flex-col gap-1.5">
        <span className="text-xs font-mono uppercase tracking-widest text-section-dark-muted mb-2 block">
          Select Engineering Discipline
        </span>
        <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {branches.map((branch) => {
            const isActive = branch.id === activeId;
            return (
              <button
                key={branch.id}
                type="button"
                onClick={() => setActiveId(branch.id)}
                className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between group shrink-0 ${
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                    : "text-section-dark-muted hover:text-section-dark-foreground hover:bg-section-dark-card"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded-md ${
                      isActive
                        ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                        : "bg-section-dark-card text-accent font-semibold"
                    }`}
                  >
                    {branch.code}
                  </span>
                  <span className="text-sm font-medium tracking-tight">
                    {branch.name}
                  </span>
                </div>
                <ArrowRight
                  className={`w-4 h-4 transition-transform hidden lg:block ${
                    isActive
                      ? "text-primary-foreground translate-x-1"
                      : "text-section-dark-muted/50 group-hover:text-section-dark-foreground group-hover:translate-x-0.5"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Clean Typography-Led Presentation (8 cols) */}
      <div className="lg:col-span-8 flex flex-col gap-8 lg:pl-6">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3 font-semibold">
            <span>{currentBranch.code} Research &amp; Prototyping Domain</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-section-dark-foreground tracking-tight mb-4">
            {currentBranch.name}
          </h3>
          <p className="text-base sm:text-lg text-section-dark-muted leading-relaxed font-normal">
            {currentBranch.shortDesc}
          </p>
        </div>

        <Separator className="bg-section-dark-border" />

        {/* Core Focus Areas */}
        <div>
          <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-section-dark-muted mb-4">
            Specialized Implementation Focus
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentBranch.focusAreas.map((area) => (
              <div key={area} className="flex items-start gap-3">
                <div className="p-0.5 rounded-full bg-primary/20 text-primary shrink-0 mt-1">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm sm:text-base text-section-dark-foreground/90 font-medium leading-snug">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-section-dark-border" />

        {/* Standard Toolchains & CTA Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-1">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-section-dark-muted block mb-2">
              Verified Toolchains
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-section-dark-foreground/80">
              {currentBranch.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-md bg-section-dark-card border border-section-dark-border"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <Button asChild size="default" className="shrink-0">
            <Link href="#consultation">
              <span>Request {currentBranch.code} Topics</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
