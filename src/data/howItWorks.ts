export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Share Your Requirement",
    description: "Submit your base IEEE paper, project synopsis, hardware spec, or thesis abstract for review.",
    deliverable: "Immediate Review",
  },
  {
    step: "02",
    title: "Scope & Technical Plan",
    description: "We verify feasibility, simulation toolchain requirements, milestones, and deliver a detailed technical roadmap.",
    deliverable: "Milestone Proposal",
  },
  {
    step: "03",
    title: "Development & Research",
    description: "Our lab team implements the architecture, reproduces baseline papers, and trains models or builds hardware circuits.",
    deliverable: "Modular Codebase",
  },
  {
    step: "04",
    title: "Testing & Documentation",
    description: "We execute benchmark runs, verify waveform/accuracy plots, and generate chapter-wise academic documentation.",
    deliverable: "Complete Report",
  },
  {
    step: "05",
    title: "Review & Live Delivery",
    description: "Receive full source code, simulation models, reports, and a 1-on-1 walkthrough session for defense preparation.",
    deliverable: "Live Mentoring & Viva Prep",
  },
];
