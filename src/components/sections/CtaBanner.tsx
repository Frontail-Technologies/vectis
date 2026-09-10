import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section id="consultation" className="py-14 sm:py-20 bg-background">
      <Container>
        {/* Bold Colored Banner — Clean, high contrast block */}
        <div className="relative rounded-2xl bg-primary p-8 sm:p-12 lg:p-14 text-center overflow-hidden border border-primary shadow-md">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] font-semibold text-primary-foreground tracking-tight leading-[1.15] mb-3">
              Not Sure What Support You Need?
            </h2>
            <p className="text-sm sm:text-base text-primary-foreground/85 mb-8 leading-relaxed max-w-xl">
              Share your project topic or base paper. Our domain advisors will review feasibility and recommend the most effective technical path.
            </p>

            <Button
              asChild
              size="lg"
              className="h-12 px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-xs"
            >
              <Link href="/contact">
                <span>Discuss Your Project Now</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <div className="flex items-center gap-2 text-xs text-primary-foreground/75 font-mono mt-6">
              <ShieldCheck className="w-4 h-4 text-highlight" />
              <span>Confidential Handling · NDA Protected Consultation</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

