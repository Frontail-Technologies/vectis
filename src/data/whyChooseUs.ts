import { ASSETS } from "@/data/assets";

export interface ValuePillar {
  title: string;
  description: string;
  illustration: string;
  illustrationAlt: string;
}

export const whyChooseUsPillars: ValuePillar[] = [
  {
    title: "Working Implementation",
    description: "Fully verified code, circuits, and simulation toolchains.",
    illustration: ASSETS.whyVectis.workingImplementation,
    illustrationAlt: ASSETS.whyVectis.workingImplementationAlt,
  },
  {
    title: "Complete Documentation",
    description: "Chapter-wise reports, block schematics, and formatted manuscripts.",
    illustration: ASSETS.whyVectis.completeDocumentation,
    illustrationAlt: ASSETS.whyVectis.completeDocumentationAlt,
  },
  {
    title: "Research Advisory",
    description: "Methodology formulation, benchmarking, and journal draft support.",
    illustration: ASSETS.whyVectis.researchAdvisory,
    illustrationAlt: ASSETS.whyVectis.researchAdvisoryAlt,
  },
  {
    title: "Simulation & Testing",
    description: "MATLAB, ANSYS, Proteus, Vivado — accurate numerical results.",
    illustration: ASSETS.whyVectis.simulationTesting,
    illustrationAlt: ASSETS.whyVectis.simulationTestingAlt,
  },
  {
    title: "Viva Preparation",
    description: "Slide decks, expected viva questions, and technical walkthroughs.",
    illustration: ASSETS.whyVectis.vivaPreparation,
    illustrationAlt: ASSETS.whyVectis.vivaPreparationAlt,
  },
  {
    title: "Structured Handover",
    description: "Milestone-based progress with full source files and setup guides.",
    illustration: ASSETS.whyVectis.structuredHandover,
    illustrationAlt: ASSETS.whyVectis.structuredHandoverAlt,
  },
];

