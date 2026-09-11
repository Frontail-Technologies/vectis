import React from "react";
import Link from "next/link";
import { GraduationCap, FlaskConical, BookOpen, Microscope, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const supporters = [
  {
    icon: GraduationCap,
    title: "B.Tech Students",
    sub: "Capstone & Working Hardware Models",
    href: "/btech-projects",
    tag: "Undergraduate",
  },
  {
    icon: FlaskConical,
    title: "M.Tech Students",
    sub: "IEEE Replication & Thesis Reports",
    href: "/mtech-projects",
    tag: "Postgraduate",
  },
  {
    icon: BookOpen,
    title: "Ph.D. Scholars",
    sub: "Methodology & Dissertation Chapters",
    href: "/research-support",
    tag: "Doctoral",
  },
  {
    icon: Microscope,
    title: "Research Professionals",
    sub: "Journal Manuscripts & Simulations",
    href: "/services/research-paper-support",
    tag: "Publications",
  },
];

export function WhoWeSupport() {
  return (
    <section className="py-14 sm:py-18 bg-background border-b border-border">
      <Container>
        {/* Compact heading */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-2">
            Who We Support
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
            Supporting Engineers &amp; Researchers Across Academic Levels
          </h2>
        </div>

        {/* 4 Compact Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {supporters.map(({ icon: Icon, title, sub, href, tag }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col justify-between p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xs transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors border border-border">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded-md bg-surface-soft border border-border/60">
                    {tag}
                  </span>
                </div>

                <h3 className="font-heading text-base font-semibold text-card-foreground group-hover:text-primary transition-colors mb-1">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {sub}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-medium text-primary">
                <span>Explore Track</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

