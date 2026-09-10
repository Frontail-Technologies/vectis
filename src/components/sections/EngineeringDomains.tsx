import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const domains = [
  { code: "CS", label: "Computer Science", sub: "AI, ML, Data Science, Web", href: "/disciplines/computer-science" },
  { code: "ECE", label: "Electronics & Comm.", sub: "VLSI, FPGA, IoT, RF", href: "/disciplines/ece" },
  { code: "EEE", label: "Electrical Systems", sub: "Power, Control, Smart Grid", href: "/disciplines/eee" },
  { code: "ME", label: "Mechanical", sub: "FEA, CFD, CAD, Thermal", href: "/disciplines/mechanical" },
  { code: "CE", label: "Civil", sub: "Structural, Geo-technical", href: "/disciplines/civil" },
  { code: "RES", label: "Research", sub: "Thesis, Publications, Surveys", href: "/research-support" },
];

export function EngineeringDomains() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-surface-brand border-b border-surface-brand-border">
      <Container>
        {/* Large bold centered heading */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-highlight block mb-3 sm:mb-4">
            Disciplines
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-[60px] font-semibold text-surface-brand-foreground tracking-tight leading-[1.08]">
            Engineering Across<br />Disciplines
          </h2>
        </div>

        {/* 6 domains — 2 cols mobile / 3 cols desktop, subtle grid lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-surface-brand-border rounded-2xl overflow-hidden divide-y sm:divide-y-0 divide-surface-brand-border">
          {domains.map(({ code, label, sub, href }, idx) => (
            <Link
              key={code}
              href={href}
              className={`p-6 sm:p-8 lg:p-10 flex flex-col gap-2.5 hover:bg-surface-brand-card transition-colors duration-200 group ${
                idx % 2 === 1 ? "sm:border-l sm:border-surface-brand-border" : ""
              } ${
                idx % 3 !== 0 ? "lg:border-l lg:border-surface-brand-border" : ""
              } ${
                idx >= 2 ? "sm:border-t sm:border-surface-brand-border" : ""
              } ${
                idx >= 3 ? "lg:border-t lg:border-surface-brand-border" : ""
              }`}
            >
              <span className="font-mono text-xs font-bold text-highlight tracking-widest uppercase">
                {code}
              </span>
              <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-semibold text-surface-brand-foreground group-hover:text-highlight transition-colors leading-snug">
                {label}
              </h3>
              <p className="text-xs sm:text-sm text-surface-brand-muted leading-relaxed">{sub}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
