import React from "react";
import { faqsList } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section className="py-14 sm:py-18 bg-background border-b border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: compact heading only (4 cols) */}
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-3">
              FAQ
            </span>
            <h2 className="font-heading text-3xl sm:text-[38px] font-semibold text-foreground tracking-tight leading-[1.1]">
              Common Questions
            </h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
              Answers about delivery, source code, simulation accuracy, and thesis support.
            </p>
          </div>

          {/* Right: shadcn Accordion (8 cols) */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible defaultValue="faq-1" className="w-full">
              {faqsList.slice(0, 6).map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-sm sm:text-base font-medium text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
