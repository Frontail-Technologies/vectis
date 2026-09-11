import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OurExperts() {
  return (
    <section className="py-14 sm:py-18 bg-background border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Advisory Team"
          title="Meet Our Research & Engineering Experts"
          description="Experienced domain specialists guiding you through technical implementation and defense."
          centered
          className="mb-10 sm:mb-12"
        />

        {/* 3 clean expert profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border"
            >
              {/* Clean portrait */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-border shadow-xs bg-muted mb-4 shrink-0">
                <Image
                  src={member.photo}
                  alt={member.photoAlt}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading text-base font-semibold text-card-foreground">
                {member.name}
              </h3>
              <p className="text-xs font-mono font-medium text-primary mt-1">
                {member.title}
              </p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {member.credential}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

