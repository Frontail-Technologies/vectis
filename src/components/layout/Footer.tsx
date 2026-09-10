import React from "react";
import Link from "next/link";
import { Mail, Phone, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerNavConfig } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-brand text-surface-brand-foreground border-t border-surface-brand-border pt-16 sm:pt-20 pb-12">
      <Container>
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-mono font-bold text-base tracking-wider border border-surface-brand-border">
                V<span className="text-accent text-xs">.</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-lg text-surface-brand-foreground tracking-tight leading-none">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-surface-brand-muted tracking-tight mt-1">
                  Research & Engineering Studio
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-surface-brand-muted max-w-xs">
              Engineering project support, simulation, and academic research guidance across all major engineering disciplines.
            </p>

            <div className="flex flex-col gap-2 text-xs text-surface-brand-muted">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="hover:text-surface-brand-foreground transition-colors"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href={`tel:${siteConfig.contactPhone}`}
                  className="hover:text-surface-brand-foreground transition-colors"
                >
                  {siteConfig.contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-surface-brand-muted/60 shrink-0" />
                <span>{siteConfig.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-semibold text-surface-brand-foreground uppercase tracking-widest">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {footerNavConfig.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-surface-brand-muted hover:text-surface-brand-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines Column (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-xs font-semibold text-surface-brand-foreground uppercase tracking-widest">
              Disciplines
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {footerNavConfig.branches.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-surface-brand-muted hover:text-surface-brand-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research & Compliance (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-semibold text-surface-brand-foreground uppercase tracking-widest">
              Research Guidance
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {footerNavConfig.research.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-surface-brand-muted hover:text-surface-brand-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-2 p-3.5 rounded-xl bg-surface-brand-card border border-surface-brand-border text-xs text-surface-brand-muted flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Original code, verified simulations, strict NDA confidentiality.
              </span>
            </div>
          </div>
        </div>

        <Separator className="bg-surface-brand-border" />

        {/* Bottom Bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-surface-brand-muted">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {footerNavConfig.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-surface-brand-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
