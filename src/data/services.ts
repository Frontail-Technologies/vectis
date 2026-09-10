import { ServiceCategory, ServiceDetail } from "@/types";
import { ASSETS } from "@/data/assets";

// Service images for legacy card references
const serviceImages = {
  softwareAi: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
  softwareAiAlt: "Deep learning neural network training on workstation",
  electronicsEmbedded: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  electronicsEmbeddedAlt: "Microcontroller circuit assembly and FPGA testing",
  electricalPower: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  electricalPowerAlt: "High voltage power substation grid",
  mechanicalEngineering: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  mechanicalEngineeringAlt: "3D CAD mechanical assembly and FEA analysis",
  researchThesis: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
  researchThesisAlt: "Academic scholar reviewing research papers",
  ieeeProjects: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
  ieeeProjectsAlt: "University research testbed with IEEE benchmark setup",
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "software-ai",
    number: "01",
    title: "Software & AI Systems",
    tagline: "Machine Learning, LLMs & Distributed Compute",
    description:
      "End-to-end development of deep learning pipelines, computer vision, NLP, and scalable cloud architectures.",
    domains: ["Computer Vision", "LLM Fine-Tuning", "Deep Reinforcement Learning", "Edge AI"],
    deliverables: ["Full Source Code & APIs", "Model Weights & Training Logs", "Performance Benchmarks", "Architecture Blueprint"],
    image: serviceImages.softwareAi,
    imageAlt: serviceImages.softwareAiAlt,
    href: "/services/engineering-projects",
    isPopular: true,
  },
  {
    id: "electronics-embedded",
    number: "02",
    title: "Electronics & Embedded Systems",
    tagline: "Hardware Design, Firmware & IoT Networks",
    description:
      "PCB design, microcontroller firmware (STM32, ESP32), FPGA syntheses, and industrial communication protocols.",
    domains: ["VLSI Design", "FPGA DSP", "IoT Telemetry", "Industrial Automation"],
    deliverables: ["Altium/KiCad Schematics", "Tested Firmware Source", "Assembly Diagrams", "Calibration Data"],
    image: serviceImages.electronicsEmbedded,
    imageAlt: serviceImages.electronicsEmbeddedAlt,
    href: "/services/engineering-projects",
  },
  {
    id: "electrical-power",
    number: "03",
    title: "Electrical & Power Systems",
    tagline: "Power Electronics, EV Architecture & Smart Grids",
    description:
      "Design and simulation of DC-DC converters, inverters, EV BMS, solar MPPT, and smart grid protection schemes.",
    domains: ["EV Powertrain & BMS", "Smart Grid", "Renewable MPPT", "MATLAB Simulink"],
    deliverables: ["Simulink Models", "Waveform Logs", "Controller Scripts", "Hardware Guide"],
    image: serviceImages.electricalPower,
    imageAlt: serviceImages.electricalPowerAlt,
    href: "/services/simulation-analysis",
  },
  {
    id: "mechanical-engineering",
    number: "04",
    title: "Mechanical & Thermal Engineering",
    tagline: "FEA Structural Analysis, CFD & CAD Modeling",
    description:
      "Finite element structural simulation, CFD, aerodynamic optimization, and thermal modeling in ANSYS and SolidWorks.",
    domains: ["ANSYS Mechanical FEA", "CFD Fluent", "Thermal Stress", "Robotic Kinematics"],
    deliverables: ["3D CAD Assembly", "ANSYS Reports", "Stress Plots", "Design Optimization Data"],
    image: serviceImages.mechanicalEngineering,
    imageAlt: serviceImages.mechanicalEngineeringAlt,
    href: "/services/simulation-analysis",
  },
  {
    id: "research-thesis",
    number: "05",
    title: "Research & Thesis Consulting",
    tagline: "Methodology, Mathematical Formulation & Documentation",
    description:
      "Structured guidance for M.Tech dissertations and doctoral theses including literature review, methodology, and IEEE formatting.",
    domains: ["Thesis Formulation", "Mathematical Modeling", "Scopus/SCI Journal Drafts", "Plagiarism Audit"],
    deliverables: ["Chapter-Wise Drafts", "Mathematical Proofs", "Similarity Reports", "Viva Slides"],
    image: serviceImages.researchThesis,
    imageAlt: serviceImages.researchThesisAlt,
    href: "/services/research-thesis",
    isPopular: true,
  },
  {
    id: "ieee-projects",
    number: "06",
    title: "IEEE Transactions Implementation",
    tagline: "Reproducible Results from Top-Tier Papers",
    description:
      "Exact algorithmic reproduction and enhancement of IEEE Transactions papers across ECE, CSE, and EEE disciplines.",
    domains: ["IEEE Access / Trans.", "Novel Enhancements", "Comparative Benchmarks", "Result Validation"],
    deliverables: ["Verified Simulation Scripts", "Comparative Graphs", "Algorithm Flowcharts", "Project Synopsis"],
    image: serviceImages.ieeeProjects,
    imageAlt: serviceImages.ieeeProjectsAlt,
    href: "/services/ieee-projects",
  },
];

/**
 * Reusable Service Detail Records for Dynamic Routing (/services/[slug])
 */
export const serviceDetails: ServiceDetail[] = [
  {
    slug: "engineering-projects",
    title: "Engineering Project Development",
    categoryLabel: "Full-Lifecycle Implementation",
    shortDescription: "End-to-end hardware, software, and embedded engineering projects with complete source code and viva support.",
    illustration: ASSETS.phase2.engineeringProjects,
    illustrationAlt: ASSETS.phase2.engineeringProjectsAlt,
    whatWeHelpWith: [
      { title: "Topic & Idea Selection", description: "Feasibility review and novel scope definition aligned with your curriculum." },
      { title: "System Architecture", description: "Hardware schematics, software design patterns, and block diagrams." },
      { title: "Core Implementation", description: "Production-grade code, firmware development, and hardware prototyping." },
      { title: "Hardware-Software Integration", description: "Sensor calibration, communication protocols, and cloud sync." },
      { title: "Verification & Benchmarking", description: "Rigorous testing protocols, edge-case validation, and metrics logging." },
      { title: "Technical Documentation", description: "IEEE-standard project reports, circuit guides, and setup manuals." },
    ],
    process: [
      { step: "01", title: "Requirement Assessment", description: "Scope finalization, technology stack lock, and feasibility audit." },
      { step: "02", title: "Architecture & Planning", description: "Schematic drafts, module breakdown, and milestone scheduling." },
      { step: "03", title: "Development & Build", description: "Clean code authoring, hardware assembly, and live progress check-ins." },
      { step: "04", title: "Testing & Validation", description: "Full system runs, performance tuning, and test report generation." },
      { step: "05", title: "Handover & Viva Prep", description: "Code walkthrough, video demo, and defense presentation deck." },
    ],
    deliverables: [
      "Complete Source Code & Repositories",
      "Circuit Schematics & PCB Gerbers",
      "Hardware Wiring & Component Bill of Materials",
      "IEEE-Format Project Report & Synopsis",
      "Viva Voce Presentation Slides (PPT)",
      "1-on-1 Code Walkthrough Session",
    ],
    tools: ["Python", "PyTorch", "C++", "ESP32 / STM32", "ROS2", "Docker", "Altium Designer", "TensorFlow"],
    relatedProjectSlugs: ["ai-disease-prediction", "iot-smart-energy", "autonomous-robotics-navigation"],
    faqs: [
      {
        question: "Do I get full ownership of the source code?",
        answer: "Yes, you receive 100% unencrypted, well-commented source code with full intellectual property ownership.",
      },
      {
        question: "Can you assist with hardware component selection?",
        answer: "We provide complete component datasheets, vendor procurement links, and alternative part suggestions.",
      },
      {
        question: "What if my academic guide requests modifications?",
        answer: "All standard project tiers include iterative revision support to address feedback from your guide or committee.",
      },
      {
        question: "Is viva defense preparation included?",
        answer: "Yes, we provide structured viva Q&A sheets, architectural explanation notes, and a live demonstration session.",
      },
    ],
  },
  {
    slug: "research-thesis",
    title: "Research & Thesis Support",
    categoryLabel: "Academic & Scholar Consulting",
    shortDescription: "Structured guidance for M.Tech dissertations and Ph.D. theses from literature review to publication.",
    illustration: ASSETS.phase2.researchThesis,
    illustrationAlt: ASSETS.phase2.researchThesisAlt,
    whatWeHelpWith: [
      { title: "Topic & Scope Formulation", description: "Identifying high-impact research gaps from indexed literature." },
      { title: "Literature Review Synthesis", description: "Systematic mapping of 50+ peer-reviewed papers and taxonomy tables." },
      { title: "Methodology Design", description: "Mathematical modeling, hypothesis formulation, and algorithm design." },
      { title: "Experimental Simulation", description: "Reproducible code implementation and benchmark comparison." },
      { title: "Thesis Structuring", description: "Chapter-by-chapter drafting adhering to university guidelines." },
      { title: "Plagiarism & Similarity Audit", description: "Turnitin-verified originality reports with guided phrasing revisions." },
    ],
    process: [
      { step: "01", title: "Problem Gap Identification", description: "Deep literature dive to locate novel academic contributions." },
      { step: "02", title: "Mathematical Modeling", description: "Formulating theoretical proofs, equations, and algorithmic frameworks." },
      { step: "03", title: "Empirical Validation", description: "Executing experiments, logging datasets, and plotting comparative graphs." },
      { step: "04", title: "Manuscript Drafting", description: "Latex/Word chapter authoring with proper citation management." },
      { step: "05", title: "Pre-Submission Defense", description: "Simulated viva defense and slide deck finalization." },
    ],
    deliverables: [
      "Complete Thesis / Dissertation Chapters (LaTeX & Docx)",
      "Algorithm Source Code & Datasets",
      "Publication-Quality High-Res Vector Plots",
      "Turnitin Similarity Clearance Report",
      "Comprehensive Reference Library (.bib / EndNote)",
      "Viva Defense Slide Deck & Question Bank",
    ],
    tools: ["LaTeX / Overleaf", "MATLAB", "Python", "Mendeley / Zotero", "OriginLab", "SPSS / R", "Turnitin"],
    relatedProjectSlugs: ["ai-disease-prediction", "llm-rag-scholarly-search", "matlab-grid-simulation"],
    faqs: [
      {
        question: "Do you follow university-specific formatting guidelines?",
        answer: "Yes, we format manuscripts according to your university's exact LaTeX template or Word typography specifications.",
      },
      {
        question: "How do you ensure zero plagiarism?",
        answer: "All mathematical derivations, analysis text, and discussions are crafted from scratch and audited with Turnitin.",
      },
      {
        question: "Can you help with Scopus or SCI journal submissions?",
        answer: "We provide comprehensive manuscript formatting, response-to-reviewer letters, and graphical abstracts for journal submissions.",
      },
      {
        question: "Is my research data kept confidential?",
        answer: "All research engagements are protected under a strict Non-Disclosure Agreement (NDA).",
      },
    ],
  },
  {
    slug: "simulation-analysis",
    title: "Simulation & Technical Analysis",
    categoryLabel: "High-Fidelity Computation",
    shortDescription: "Rigorous computational modeling across MATLAB/Simulink, ANSYS FEA/CFD, and circuit simulators.",
    illustration: ASSETS.phase2.simulationAnalysis,
    illustrationAlt: ASSETS.phase2.simulationAnalysisAlt,
    whatWeHelpWith: [
      { title: "MATLAB & Simulink Models", description: "Control systems, power grid stability, and DSP pipeline simulations." },
      { title: "ANSYS Mechanical FEA", description: "Structural stress, modal vibration, and fatigue life assessment." },
      { title: "ANSYS Fluent CFD", description: "Conjugate heat transfer, aerodynamic drag, and fluid dynamics." },
      { title: "Power Electronics Circuitry", description: "SPICE, PLECS, and PSCAD transient switching and thermal modeling." },
      { title: "Electromagnetic Simulation", description: "HFSS antenna radiation patterns and Maxwell motor torque calculations." },
      { title: "Data Post-Processing", description: "Parametric sweep plots, sensitivity charts, and mesh convergence curves." },
    ],
    process: [
      { step: "01", title: "Physics Formulation", description: "Governing equations, boundary conditions, and material properties." },
      { step: "02", title: "CAD / Model Construction", description: "Geometry cleanup, meshing refinement, and schematic capture." },
      { step: "03", title: "Solver Execution", description: "Nonlinear convergence tuning and transient time-step optimization." },
      { step: "04", title: "Convergence & Validation", description: "Mesh independence study and analytical benchmark matching." },
      { step: "05", title: "Technical Report Generation", description: "High-resolution contour plots, vector maps, and parameter logs." },
    ],
    deliverables: [
      "Native Simulation Model Files (.slx, .m, .cas/.dat, .wbpj)",
      "Mesh Convergence & Grid Independence Reports",
      "High-Resolution Vector Contour Plots & Vector Fields",
      "Tabulated Numerical Results (CSV / Excel)",
      "Step-by-Step Simulation Execution SOP",
    ],
    tools: ["MATLAB / Simulink", "ANSYS Fluent", "ANSYS Mechanical", "PLECS", "COMSOL Multiphysics", "SolidWorks Simulation", "LTspice"],
    relatedProjectSlugs: ["ansys-thermal-analysis", "matlab-grid-simulation", "ev-battery-bms"],
    faqs: [
      {
        question: "What solver versions do you support?",
        answer: "We support current and legacy releases of MATLAB (2020a–2024b), ANSYS (2021R1–2024R2), and standard CAD suites.",
      },
      {
        question: "Can you guarantee mesh convergence?",
        answer: "Every FEA/CFD project includes a formal grid convergence index (GCI) audit demonstrating mesh independence.",
      },
      {
        question: "Do you supply all raw simulation files?",
        answer: "Yes, you receive all parameterized models, initialization scripts, boundary definition files, and output logs.",
      },
    ],
  },
  {
    slug: "ieee-projects",
    title: "IEEE Paper Implementation",
    categoryLabel: "Benchmark Reproduction",
    shortDescription: "Exact algorithmic reproduction and novel enhancement of published IEEE Transactions papers.",
    illustration: ASSETS.phase2.ieeeProjects,
    illustrationAlt: ASSETS.phase2.ieeeProjectsAlt,
    whatWeHelpWith: [
      { title: "Base Paper Verification", description: "Mathematical review of the base IEEE transaction paper equations." },
      { title: "Algorithm Recreation", description: "Faithful code implementation replicating base paper experimental conditions." },
      { title: "Proposed Enhancement", description: "Introducing novel architectural modifications to exceed benchmark metrics." },
      { title: "Comparative Evaluation", description: "Side-by-side performance graphs vs. state-of-the-art baselines." },
      { title: "Dataset Calibration", description: "Standard benchmark datasets (ImageNet, IEEE Bus Systems, Kaggle)." },
      { title: "Result Documentation", description: "IEEE two-column manuscript draft detailing novel enhancements." },
    ],
    process: [
      { step: "01", title: "Base Paper Scrutiny", description: "Validating mathematical derivations and experimental claims." },
      { step: "02", title: "Baseline Replication", description: "Recreating baseline figures and error rates in code." },
      { step: "03", title: "Novel Enhancement", description: "Implementing proposed optimization or hybrid architectural tweaks." },
      { step: "04", title: "Benchmark Comparison", description: "Generating quantitative comparative tables and convergence curves." },
      { step: "05", title: "Paper & Code Packaging", description: "Publishable documentation, test harness, and execution guide." },
    ],
    deliverables: [
      "Exact Base Paper Reproduction Code",
      "Proposed Enhancement Source Scripts",
      "Comparative Performance Plots & Matrices",
      "IEEE Two-Column Formatted Conference/Journal Paper",
      "PowerPoint Presentation for Guide Review",
    ],
    tools: ["Python / PyTorch", "MATLAB", "Xilinx Vivado", "NS-3", "OpenCV", "LaTeX"],
    relatedProjectSlugs: ["ai-disease-prediction", "matlab-grid-simulation", "fpga-crypto-accelerator"],
    faqs: [
      {
        question: "Can I choose my own base paper?",
        answer: "Yes, you can provide any IEEE Transactions, IEEE Access, or top-tier conference paper for implementation.",
      },
      {
        question: "What if the base paper lacks implementation details?",
        answer: "Our domain experts reconstruct missing parameters and mathematical nuances based on industry-standard baselines.",
      },
      {
        question: "Can you improve upon the base paper results?",
        answer: "Yes, we specialize in proposing novel modifications (e.g. attention mechanisms, hybrid optimization) that outperform base metrics.",
      },
    ],
  },
  {
    slug: "research-paper-support",
    title: "Research Paper Writing & Journal Support",
    categoryLabel: "Academic Publication",
    shortDescription: "End-to-end guidance for drafting, formatting, and publishing in Scopus, SCI, and IEEE indexed venues.",
    illustration: ASSETS.phase2.researchSupportVisual,
    illustrationAlt: ASSETS.phase2.researchSupportVisualAlt,
    whatWeHelpWith: [
      { title: "Target Journal Selection", description: "Matching manuscript scope with reputable Scopus/SCI journal indexing." },
      { title: "Manuscript Drafting", description: "Authoring abstract, introduction, methodology, results, and conclusions." },
      { title: "Publication-Grade Figures", description: "High-DPI vector diagrams, schematics, and statistical charts." },
      { title: "Language & Scientific Polish", description: "Academic tone enhancement, grammar refinement, and precision editing." },
      { title: "Plagiarism Elimination", description: "Ensuring similarity index below 10% on institutional Turnitin." },
      { title: "Response to Reviewers", description: "Structuring persuasive point-by-point rebuttals during revision rounds." },
    ],
    process: [
      { step: "01", title: "Scope & Venue Mapping", description: "Selecting high-fit journals with fair review turnaround times." },
      { step: "02", title: "Data & Results Structuring", description: "Converting raw experimental outputs into clear tables and figures." },
      { step: "03", title: "Full Paper Drafting", description: "Writing rigorous academic prose following target journal guidelines." },
      { step: "04", title: "Peer-Grade Review", description: "Pre-submission technical audit by internal Ph.D. reviewers." },
      { step: "05", title: "Submission Package", description: "Cover letter, graphical abstract, and compliant manuscript files." },
    ],
    deliverables: [
      "Complete Camera-Ready Manuscript (LaTeX & Docx)",
      "High-Resolution 300+ DPI Vector Illustrations",
      "Similarity Audit Report (Turnitin)",
      "Editor Cover Letter & Highlight Summary",
      "Reviewer Rebuttal Template (for revision rounds)",
    ],
    tools: ["LaTeX", "Overleaf", "Grammarly Premium", "Turnitin", "OriginLab", "Adobe Illustrator"],
    relatedProjectSlugs: ["llm-rag-scholarly-search", "ai-disease-prediction", "structural-seismic-response"],
    faqs: [
      {
        question: "Which citation styles are supported?",
        answer: "We support IEEE, Springer LNCS, Elsevier, ACM, APA, Harvard, and all custom journal citation formats.",
      },
      {
        question: "Do you guarantee journal acceptance?",
        answer: "While final acceptance rests with peer reviewers, we guarantee that the manuscript meets all technical, originality, and formatting benchmarks.",
      },
      {
        question: "Can you assist with review round revisions?",
        answer: "Yes, our support includes crafting point-by-point reviewer rebuttal letters and revising sections according to reviewer demands.",
      },
    ],
  },
];

export function getAllServices(): ServiceDetail[] {
  return serviceDetails;
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}
