import { Hero } from "@/components/sections/Hero";
import { WhoWeSupport } from "@/components/sections/WhoWeSupport";
import { CoreServices } from "@/components/sections/CoreServices";
import { ProjectJourney } from "@/components/sections/ProjectJourney";
import { ResearchSupport } from "@/components/sections/ResearchSupport";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowOurSupportWorks } from "@/components/sections/HowOurSupportWorks";
import { TrustConfidentiality } from "@/components/sections/TrustConfidentiality";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { OurExperts } from "@/components/sections/OurExperts";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 01. Hero */}
      <Hero />

      {/* 02. Who We Support — 4 cohorts */}
      <WhoWeSupport />

      {/* 03. Core Services — 3 clean cards */}
      <CoreServices />

      {/* 04. Project Journey — 7-step process */}
      <ProjectJourney />

      {/* 05. Research Support — Split checklist + visual */}
      <ResearchSupport />

      {/* 06. Why Choose Us — 6 structured points */}
      <WhyChooseUs />

      {/* 07. How Our Support Works — Dark consultation model */}
      <HowOurSupportWorks />

      {/* 08. Trust & Confidentiality — 3 clean shields */}
      <TrustConfidentiality />

      {/* 09. Featured Projects — 3 verified project cards */}
      <FeaturedProjects />

      {/* 10. Our Experts — 3 advisor profiles */}
      <OurExperts />

      {/* 11. Testimonials — 3 scholar reviews */}
      <Testimonials />

      {/* 12. FAQ — Frequently Asked Questions */}
      <FaqSection />

      {/* 13. Final CTA — Direct callout banner */}
      <CtaBanner />
    </>
  );
}
