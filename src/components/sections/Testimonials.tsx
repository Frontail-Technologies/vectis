import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-surface border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Student Feedback"
          title="What Researchers Say"
          align="center"
          className="mb-10 sm:mb-12"
        />

        {/* 3 testimonials — compact, scannable */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl border border-border bg-background hover:border-primary/30 transition-colors duration-200"
            >
              {/* Quote */}
              <p className="text-sm sm:text-base text-foreground/85 leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted shrink-0 border border-border">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {t.degree} · {t.discipline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
