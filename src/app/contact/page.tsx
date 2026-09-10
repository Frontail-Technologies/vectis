import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Mail, Phone, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ASSETS } from "@/data/assets";
import { Container } from "@/components/ui/Container";
import { ContactFormClient } from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact & Requirement Consultation | Vectis Studio",
  description: "Discuss your engineering project, simulation, or thesis requirement directly with our technical advisors.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Hero */}
      <section className="py-12 sm:py-16 bg-surface border-b border-border">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-3">
              Technical Consultation
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold text-foreground tracking-tight leading-[1.1] mb-3 text-balance-editorial">
              Tell Us What<br />You&apos;re Working On
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Share your project brief, base paper, or thesis topic. We&apos;ll assess feasibility and connect you with a domain specialist.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Area: Split Form + Contact Details */}
      <section className="py-14 sm:py-20 bg-background border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Form Container — 7 cols */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-xs">
              <h2 className="font-heading text-xl font-semibold text-card-foreground mb-6">
                Project &amp; Research Intake Form
              </h2>
              <ContactFormClient />
            </div>

            {/* Right Information & Direct Channels — 5 cols */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Channels Card */}
              <div className="p-6 rounded-2xl border border-border bg-surface space-y-5">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  Direct Advisory Channels
                </h3>

                <div className="space-y-4 text-sm">
                  {/* WhatsApp / Call */}
                  <a
                    href={`tel:${siteConfig.contactPhone}`}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-border bg-background hover:border-primary/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Phone / WhatsApp</span>
                      <span className="font-mono font-medium text-foreground">{siteConfig.contactPhone}</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.contactEmail}?subject=Project Consultation`}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-border bg-background hover:border-primary/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Email Inquiries</span>
                      <span className="font-mono font-medium text-foreground">{siteConfig.contactEmail}</span>
                    </div>
                  </a>

                  {/* Turnaround Time */}
                  <div className="flex items-start gap-3 p-3.5 rounded-xl border border-border bg-background">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Response Time</span>
                      <span className="font-medium text-foreground">Within 4–6 Business Hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Illustration */}
              <div className="p-6 rounded-2xl border border-border bg-surface-soft flex flex-col items-center text-center">
                <div className="w-full max-w-65 mb-4">
                  <Image
                    src={ASSETS.phase2.contactConsultation}
                    alt={ASSETS.phase2.contactConsultationAlt}
                    width={280}
                    height={210}
                    priority
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-42.5 object-contain mx-auto"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Strict Non-Disclosure &amp; IP Protection Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
