export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable?: string;
}

export const projectJourneySteps: ProcessStep[] = [
  {
    step: "01",
    title: "Requirement",
    description: "Scope review, problem definition & base paper verification.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Methodology formulation, tool selection & timeline mapping.",
  },
  {
    step: "03",
    title: "Development",
    description: "Core algorithm, simulation model & hardware implementation.",
  },
  {
    step: "04",
    title: "Testing",
    description: "Benchmark validation, error analysis & accuracy checks.",
  },
  {
    step: "05",
    title: "Documentation",
    description: "Chapter drafting, architecture diagrams & result plots.",
  },
  {
    step: "06",
    title: "Review",
    description: "Code walkthrough, mentor feedback & revisions.",
  },
  {
    step: "07",
    title: "Delivery",
    description: "Complete source handover, setup guide & viva support.",
  },
];

export const processSteps: ProcessStep[] = projectJourneySteps;

