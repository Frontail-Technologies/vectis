import { ASSETS } from "@/data/assets";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  illustration: string;
  illustrationAlt: string;
  deliverable?: string;
}

export const projectJourneySteps: ProcessStep[] = [
  {
    step: "01",
    title: "Requirement",
    description: "Scope review, problem definition & base paper verification.",
    illustration: ASSETS.process.requirement,
    illustrationAlt: ASSETS.process.requirementAlt,
  },
  {
    step: "02",
    title: "Planning",
    description: "Methodology formulation, tool selection & timeline mapping.",
    illustration: ASSETS.process.planning,
    illustrationAlt: ASSETS.process.planningAlt,
  },
  {
    step: "03",
    title: "Development",
    description: "Core algorithm, simulation model & hardware implementation.",
    illustration: ASSETS.process.development,
    illustrationAlt: ASSETS.process.developmentAlt,
  },
  {
    step: "04",
    title: "Testing",
    description: "Benchmark validation, error analysis & accuracy checks.",
    illustration: ASSETS.process.testing,
    illustrationAlt: ASSETS.process.testingAlt,
  },
  {
    step: "05",
    title: "Documentation",
    description: "Chapter drafting, architecture diagrams & result plots.",
    illustration: ASSETS.process.documentation,
    illustrationAlt: ASSETS.process.documentationAlt,
  },
  {
    step: "06",
    title: "Review",
    description: "Code walkthrough, mentor feedback & revisions.",
    illustration: ASSETS.process.review,
    illustrationAlt: ASSETS.process.reviewAlt,
  },
  {
    step: "07",
    title: "Delivery",
    description: "Complete source handover, setup guide & viva support.",
    illustration: ASSETS.process.delivery,
    illustrationAlt: ASSETS.process.deliveryAlt,
  },
];

export const processSteps: ProcessStep[] = projectJourneySteps;


