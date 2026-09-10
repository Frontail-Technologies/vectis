import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OurExperts() {
  return (
    <section className="py-16 sm:py-24 bg-surface-warm border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Our Experts"
          title="Our Technical & Research Experts"
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* 3 experts — larger portrait, name, role, credential */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center gap-4">
              {/* Larger portrait */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-border shadow-md bg-muted shrink-0">
                <Image
                  src={member.photo}
                  alt={member.photoAlt}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium mt-0.5">{member.title}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{member.credential}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
