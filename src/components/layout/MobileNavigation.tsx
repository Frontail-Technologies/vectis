"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, ArrowRight, Mail, Phone } from "lucide-react";
import { NavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

interface MobileNavigationProps {
  navItems: NavItem[];
}

export function MobileNavigation({ navItems }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-80 sm:w-95 p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <SheetHeader className="text-left pb-2">
              <SheetTitle className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-brand flex items-center justify-center text-brand-foreground font-mono font-bold text-sm tracking-wider border border-brand-muted">
                  V<span className="text-accent">.</span>
                </div>
                <span className="font-semibold text-base text-foreground tracking-tight">
                  {siteConfig.shortName} Studio
                </span>
              </SheetTitle>
            </SheetHeader>

            <Separator />

            {/* Nav Links */}
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-3 rounded-lg text-base font-medium text-foreground/90 hover:text-primary hover:bg-secondary flex items-center justify-between transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Drawer Bottom Actions */}
          <div className="flex flex-col gap-4 pt-4">
            <Separator />

            <Button
              asChild
              variant="default"
              size="lg"
              className="w-full justify-center h-12 text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              <Link href="/contact">
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <div className="flex flex-col gap-2 text-xs text-muted-foreground font-mono pt-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="truncate">{siteConfig.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{siteConfig.contactPhone}</span>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
