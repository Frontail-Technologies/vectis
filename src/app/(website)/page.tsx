import { Hero } from "@/components/sections/Hero";
import { WhoWeSupport } from "@/components/sections/WhoWeSupport";
import { CoreServices } from "@/components/sections/CoreServices";
import { ProjectJourney } from "@/components/sections/ProjectJourney";
import { EngineeringDomains } from "@/components/sections/EngineeringDomains";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ResearchSupport } from "@/components/sections/ResearchSupport";
import { HowOurSupportWorks } from "@/components/sections/HowOurSupportWorks";
import { TechnologiesTools } from "@/components/sections/TechnologiesTools";
import { OurExperts } from "@/components/sections/OurExperts";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 01. Hero — warm white + subtle grid */}
      <Hero />

      {/* 02. Who We Support — white, icon-based */}
      <WhoWeSupport />

      {/* 03. Core Services — light mint, 3 illustrated primary + 6 link pills */}
      <CoreServices />

      {/* 04. Project Journey — white, wide illustration + step labels */}
      <ProjectJourney />

      {/* 05. Engineering Domains — deep teal, typography-first grid */}
      <EngineeringDomains />

      {/* 06. Why Choose Us — warm white, icons + 1 metric */}
      <WhyChooseUs />

      {/* 07. Featured Work — white, image-dominant 3-project grid */}
      <FeaturedProjects />

      {/* 08. Research Support — light subtle, illustration + checklist */}
      <ResearchSupport />

      {/* 09. How Our Support Works — deep teal, 4-step process */}
      <HowOurSupportWorks />

      {/* 10. Technologies — white, compact pill grid */}
      <TechnologiesTools />

      {/* 11. Our Experts — warm neutral, 3 portrait profiles */}
      <OurExperts />

      {/* 12. Testimonials — white, 3 short quotes */}
      <Testimonials />

      {/* 13. FAQ — light muted, 2-column accordion */}
      <FaqSection />

      {/* 14. CTA — strong teal band */}
      <CtaBanner />
    </>
  );
}
