import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-md border-b border-border transition-colors">
      <Container className="flex items-center justify-between h-16 sm:h-17">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg shrink-0"
        >
          {/* Architectural monogram mark */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-mono font-bold text-sm sm:text-base tracking-wider shadow-xs group-hover:bg-primary-hover transition-colors">
            V<span className="text-accent text-xs">.</span>
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-semibold text-sm sm:text-base lg:text-lg text-foreground tracking-tight leading-none group-hover:text-primary transition-colors">
              {siteConfig.shortName}
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground tracking-tight mt-0.5 hidden md:inline-block">
              Research &amp; Engineering Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Main Navigation"
        >
          {mainNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 xl:px-3.5 xl:py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Header Right Actions: Mobile CTA + Menu, Desktop CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Primary CTA (Visible on both Mobile and Desktop) */}
          <Button asChild size="sm" className="h-9 sm:h-10 px-3 sm:px-5 text-xs sm:text-sm font-semibold shadow-xs">
            <Link href="/contact">
              <span className="hidden min-[420px]:inline">Discuss Project</span>
              <span className="min-[420px]:hidden">Discuss</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 sm:ml-1.5" />
            </Link>
          </Button>

          {/* Mobile Navigation Drawer Trigger (Far Right) */}
          <div className="lg:hidden">
            <MobileNavigation navItems={mainNavItems} />
          </div>
        </div>
      </Container>
    </header>
  );
}
