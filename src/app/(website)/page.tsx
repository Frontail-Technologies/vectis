import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhoWeSupport } from "@/components/sections/WhoWeSupport";
import { CoreServices } from "@/components/sections/CoreServices";
import { MidPageCallout } from "@/components/sections/MidPageCallout";
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
      {/* 01. Hero (Deep Teal) */}
      <Hero />

      {/* 02. Compact Trust Strip (Warm Neutral) */}
      <TrustStrip />

      {/* 03. Who We Support — 4 Visual Cards (White) */}
      <WhoWeSupport />

      {/* 04. Core Services — 3 Primary Groups (Soft Mint) */}
      <CoreServices />

      {/* 05. Mid-Page Callout Banner (White / Soft Mint) */}
      <MidPageCallout />

      {/* 06. Project Journey — 4 + 3 Grid (Warm Neutral) */}
      <ProjectJourney />

      {/* 07. Research Support — 50/50 Large Visual Split (White) */}
      <ResearchSupport />

      {/* 08. Why Choose Us — 3 x 2 Visual Cards (Soft Mint) */}
      <WhyChooseUs />

      {/* 09. How Our Support Works — Mentorship Model (Deep Teal) */}
      <HowOurSupportWorks />

      {/* 10. Trust & Confidentiality — 3 Integrity Shields (White) */}
      <TrustConfidentiality />

      {/* 11. Featured Projects — 3 Photography Cards (Warm Neutral) */}
      <FeaturedProjects />

      {/* 12. Our Experts — 3 Advisor Profiles (White) */}
      <OurExperts />

      {/* 13. Testimonials — 3 Scholar Feedback Cards (Soft Mint) */}
      <Testimonials />

      {/* 14. FAQ — Common Questions (White) */}
      <FaqSection />

      {/* 15. Final CTA Banner */}
      <CtaBanner />
    </>
  );
}

