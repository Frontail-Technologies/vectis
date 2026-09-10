import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { ASSETS } from "@/data/assets";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-brand py-20 sm:py-28 lg:py-36 border-b border-surface-brand-border">
      {/* Full-width background image weighted to the right */}
      <div className="absolute inset-0 select-none">
        <Image
          src={ASSETS.hero.engineeringStudio}
          alt={ASSETS.hero.engineeringStudioAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] sm:object-[75%_center] lg:object-right"
        />
      </div>

      {/* Dark teal gradient overlay/fade on the left for maximum readability */}
      <div className="absolute inset-0 bg-linear-to-r from-surface-brand via-surface-brand/95 sm:via-surface-brand/85 to-surface-brand/40 lg:to-transparent pointer-events-none" />

      {/* Subtle technical grid texture */}
      <div className="absolute inset-0 technical-grid-dark opacity-20 pointer-events-none" />

      {/* Hero content on the left */}
      <Container className="relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-highlight mb-5">
            Research & Engineering Studio
          </span>

          <h1 className="font-heading text-3xl min-[420px]:text-4xl sm:text-5xl lg:text-[60px] font-semibold tracking-tight leading-[1.08] text-surface-brand-foreground mb-5 text-balance-editorial">
            Turn Engineering Ideas Into{" "}
            <span className="text-highlight">Working Projects.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-surface-brand-muted leading-relaxed max-w-xl mb-8 sm:mb-10">
            We help engineering students and research scholars build verified projects, simulations, and thesis-ready documentation.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 sm:mb-10">
            <Button
              asChild
              size="lg"
              className="h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base bg-highlight hover:bg-highlight/90 text-surface-brand font-semibold shadow-lg shadow-highlight/10"
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base border-surface-brand-border bg-surface-brand-card hover:bg-surface-brand-card/80 text-surface-brand-foreground"
            >
              <Link href="/contact">
                Discuss Your Requirement
              </Link>
            </Button>
          </div>

          {/* Credibility line */}
          <div className="flex items-center gap-2 text-sm text-surface-brand-muted">
            <ShieldCheck className="w-4 h-4 text-highlight shrink-0" />
            <span>100% Source Code · NDA Protected · Viva Walkthrough</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
