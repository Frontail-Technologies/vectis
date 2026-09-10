/**
 * Centralized repository for all photography, illustration, and media assets.
 * All image/illustration paths are managed here — never hardcoded in TSX components.
 */

export const ASSETS = {
  hero: {
    engineeringStudio: "/illustrations/hero-engineering-studio.png",
    engineeringStudioAlt: "Engineering research studio with engineer working on hardware and diagnostics",
    mainEngineering: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    mainAlt: "Senior engineer testing micro-electronic circuitry on precision laboratory workbench",
  },
  projects: {
    aiDiseasePrediction: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    aiDiseasePredictionAlt: "Computational biology and deep neural network medical diagnostics",
    iotSmartEnergy: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    iotSmartEnergyAlt: "Smart energy monitoring gateway with real-time telemetry",
    evBatteryManagement: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
    evBatteryManagementAlt: "Electric vehicle lithium battery pack thermal management",
    ansysThermalAnalysis: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    ansysThermalAnalysisAlt: "Finite element analysis thermal dispersion on turbine casing",
    matlabPowerSystem: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
    matlabPowerSystemAlt: "Solar photovoltaic integration and dynamic grid stability simulation",
    autonomousRobotics: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    autonomousRoboticsAlt: "Autonomous mobile robot with LiDAR mapping",
  },
  testimonials: {
    student1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    student2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    student3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  /**
   * PLACEHOLDER — replace with actual team photos when available.
   */
  team: {
    expert1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    expert1Alt: "Domain expert in Electronics and Embedded Systems",
    expert2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    expert2Alt: "Research advisor specialising in academic thesis guidance",
    expert3: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    expert3Alt: "Engineering specialist in AI, ML and software systems",
  },
  /**
   * Finalised custom illustration pack — stored in public/illustrations/
   * These are the supplied PNG files; do NOT replace with regenerated assets.
   *
   * Asset mapping:
   *   engineering-planning   → Hero supporting visual
   *   software-ai            → Core Services — Software & AI card
   *   research-thesis        → Core Services — Research & Thesis card
   *   simulation-analysis    → Core Services — Simulation & Analysis card
   *   project-journey        → Project Journey section (wide)
   *   research-methodology   → Research Support section
   *   consultation-support   → CTA section
   */
  illustrations: {
    engineeringPlanning: "/illustrations/engineering-planning.png",
    engineeringPlanningAlt: "Engineering student and mentor reviewing project blueprints and circuit diagrams",
    softwareAi: "/illustrations/software-ai.png",
    softwareAiAlt: "Software engineer working on AI and machine learning models",
    researchThesis: "/illustrations/research-thesis.png",
    researchThesisAlt: "Research scholar reviewing thesis documents and methodology charts",
    simulationAnalysis: "/illustrations/simulation-analysis.png",
    simulationAnalysisAlt: "Engineer running FEA and CFD simulation analysis on dual monitors",
    projectJourney: "/illustrations/project-journey.png",
    projectJourneyAlt: "Full project delivery journey from requirement through planning, development, testing, documentation, review to delivery",
    researchMethodology: "/illustrations/research-methodology.png",
    researchMethodologyAlt: "Research methodology workflow with data analysis and academic support",
    consultationSupport: "/illustrations/consultation-support.png",
    consultationSupportAlt: "Academic consultation session between expert advisor and student",
  },
  /**
   * Dedicated Phase 2 Assets — Stored in public/illustrations/phase-2/
   */
  phase2: {
    // Services Page
    servicesHero: "/illustrations/phase-2/services-page-hero.png",
    servicesHeroAlt: "Engineering, research and technical support overview",
    servicesHeroBg: "/illustrations/phase-2/services-hero-background.png",
    
    // Service Specific Visuals
    engineeringProjects: "/illustrations/phase-2/engineering-projects.png",
    engineeringProjectsAlt: "Engineering Project Development and hardware/software implementation",
    researchThesis: "/illustrations/phase-2/research-thesis.png",
    researchThesisAlt: "Research & Thesis Consulting and dissertation guidance",
    simulationAnalysis: "/illustrations/phase-2/simulation-analysis.png",
    simulationAnalysisAlt: "Simulation & Technical Analysis FEA and CFD modeling",
    ieeeProjects: "/illustrations/phase-2/ieee-projects.png",
    ieeeProjectsAlt: "IEEE Transactions Paper Implementation and algorithmic reproduction",
    researchSupportVisual: "/illustrations/phase-2/research-support.png",
    researchSupportVisualAlt: "Research methodology and academic paper assistance",

    // Research Support Page
    researchSupportHero: "/illustrations/phase-2/research-support.png",
    researchSupportHeroAlt: "Academic research guidance from topic to submission",
    researchSupportHeroBg: "/illustrations/phase-2/research-support-hero-background.png",
    researchStages: "/illustrations/phase-2/research-stages.png",
    researchStagesAlt: "8-stage academic research lifecycle visual",

    // Contact Page
    contactConsultation: "/illustrations/phase-2/contact-consultation.png",
    contactConsultationAlt: "Technical consultation with domain specialist",
    contactHeroBg: "/illustrations/phase-2/contact-hero-background.png",
  },
  /**
   * Process Step Illustrations — Stored in public/illustrations/process/
   */
  process: {
    requirement: "/illustrations/process/01-requirement.png",
    requirementAlt: "Requirement gathering, scope review and base paper verification",
    planning: "/illustrations/process/02-planning.png",
    planningAlt: "Methodology planning, toolchain selection and timeline mapping",
    development: "/illustrations/process/03-development.png",
    developmentAlt: "Core algorithm, simulation and hardware development",
    testing: "/illustrations/process/04-testing.png",
    testingAlt: "Benchmark testing, validation and error analysis",
    documentation: "/illustrations/process/05-documentation.png",
    documentationAlt: "Chapter-wise documentation, report writing and schematics",
    review: "/illustrations/process/06-review.png",
    reviewAlt: "Code review, walkthrough and advisor revisions",
    delivery: "/illustrations/process/07-delivery.png",
    deliveryAlt: "Complete handover, setup guide and viva support",
  },
  /**
   * Semantic asset slots for backward compatibility
   */
  innerPages: {
    serviceHero: "/illustrations/phase-2/services-page-hero.png",
    serviceHeroAlt: "Engineering and research project planning session",
    engineeringService: "/illustrations/phase-2/engineering-projects.png",
    engineeringServiceAlt: "Engineering project development and software architecture",
    researchService: "/illustrations/phase-2/research-thesis.png",
    researchServiceAlt: "Academic research and thesis consultation",
    simulationService: "/illustrations/phase-2/simulation-analysis.png",
    simulationServiceAlt: "Finite element analysis and technical simulation",
    researchSupportHero: "/illustrations/phase-2/research-support.png",
    researchSupportHeroAlt: "Research scholar analyzing data and academic methodology",
    contactConsultation: "/illustrations/phase-2/contact-consultation.png",
    contactConsultationAlt: "Technical consultation with domain specialist",
  },
} as const;
