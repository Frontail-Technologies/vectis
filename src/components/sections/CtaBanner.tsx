import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ASSETS } from "@/data/assets";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section id="consultation" className="py-12 sm:py-16 bg-background">
      <Container>
        {/* Wide teal band — full container width */}
        <div className="relative rounded-2xl bg-primary overflow-hidden border border-primary shadow-lg">
          <div className="absolute inset-0 technical-grid-dark opacity-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end">
            {/* Left: Heading + One sentence + CTAs */}
            <div className="p-6 sm:p-10 lg:p-12 flex flex-col items-start">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-semibold text-primary-foreground tracking-tight leading-[1.15] mb-2 text-balance-editorial">
                Not Sure Which Support<br className="hidden sm:block" /> You Need?
              </h2>
              <p className="text-sm sm:text-base text-primary-foreground/80 mb-6 sm:mb-8 leading-relaxed max-w-md">
                Share your topic or brief — our technical advisors will assess feasibility and recommend the right approach.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Button
                  asChild
                  size="default"
                  className="h-11 px-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-xs justify-center"
                >
                  <Link href="/contact">
                    <span>Discuss Your Requirement</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="default"
                  className="h-11 px-5 text-primary-foreground hover:bg-primary-foreground/10 justify-center"
                >
                  <a href={`tel:${siteConfig.contactPhone}`}>
                    <Phone className="w-4 h-4 mr-1.5" />
                    <span>Call Directly</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Consultation illustration — below on mobile, right-aligned on desktop */}
            <div className="relative self-center lg:self-end px-6 sm:px-10 lg:pr-6 pb-0 pt-2 lg:pt-0 flex justify-center overflow-hidden">
              <Image
                src={ASSETS.phase2.contactConsultation}
                alt={ASSETS.phase2.contactConsultationAlt}
                width={400}
                height={290}
                style={{ width: "auto", height: "auto" }}
                className="w-65 sm:w-80 lg:w-95 xl:w-105 max-h-55 lg:max-h-70 object-contain object-bottom"
                sizes="(max-width: 1024px) 320px, 420px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
