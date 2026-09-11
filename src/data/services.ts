import { ServiceCategory, ServiceDetail } from "@/types";
import { ASSETS } from "@/data/assets";

/**
 * 7 Core Service Taxonomy as defined in business offerings:
 * 1. B.Tech Projects
 * 2. M.Tech Projects
 * 3. Capstone Projects
 * 4. IEEE Projects
 * 5. Project Synopsis
 * 6. Thesis Writing & Research
 * 7. Research Paper & Publication Support
 */
export interface ServiceTaxonomyItem {
  id: string;
  title: string;
  slug: string;
  href: string;
  group: "engineering" | "research" | "academic";
  groupLabel: string;
  tagline: string;
  shortDescription: string;
  offerings: string[];
  illustration: string;
  illustrationAlt: string;
}

export const coreServiceTaxonomy: ServiceTaxonomyItem[] = [
  {
    id: "btech-projects",
    title: "B.Tech Projects",
    slug: "btech-projects",
    href: "/btech-projects",
    group: "engineering",
    groupLabel: "Engineering Projects",
    tagline: "Undergraduate Major & Minor Projects",
    shortDescription: "Working hardware circuits, software prototypes, verified code, and university-standard B.Tech project reports.",
    offerings: [
      "Project Development",
      "B.Tech Project Report",
      "Final-Year Projects",
      "Live / Real-Time Projects",
    ],
    illustration: ASSETS.phase2.engineeringProjects,
    illustrationAlt: "B.Tech Engineering Project Development and hardware prototype testing",
  },
  {
    id: "mtech-projects",
    title: "M.Tech Projects",
    slug: "mtech-projects",
    href: "/mtech-projects",
    group: "engineering",
    groupLabel: "Engineering Projects",
    tagline: "Postgraduate & Research-Oriented Implementation",
    shortDescription: "Advanced engineering projects, simulation modeling, algorithm reproduction, and comprehensive M.Tech project reports.",
    offerings: [
      "M.Tech Project Development",
      "M.Tech Project Report",
      "Research-Oriented Projects",
      "Simulation / Implementation",
    ],
    illustration: ASSETS.phase2.engineeringProjects,
    illustrationAlt: "M.Tech Project Development and research simulation workbench",
  },
  {
    id: "capstone-projects",
    title: "Capstone Projects",
    slug: "capstone-projects",
    href: "/services/capstone-projects",
    group: "engineering",
    groupLabel: "Engineering Projects",
    tagline: "End-to-End Multidisciplinary Prototypes",
    shortDescription: "Complete capstone engineering solutions with production-grade code, hardware integration, reports, and viva support.",
    offerings: [
      "End-to-End Capstone Development",
      "Implementation",
      "Documentation",
      "Presentation / Viva Support",
    ],
    illustration: ASSETS.phase2.engineeringProjects,
    illustrationAlt: "Capstone project engineering and multidisciplinary team development",
  },
  {
    id: "ieee-projects",
    title: "IEEE Projects",
    slug: "ieee-projects",
    href: "/services/ieee-projects",
    group: "research",
    groupLabel: "Research Projects",
    tagline: "Transactions Paper Replication & Enhancement",
    shortDescription: "Exact algorithmic reproduction, parameter tuning, and novel performance enhancement of published IEEE Transactions papers.",
    offerings: [
      "IEEE-Based Project Development",
      "Paper Implementation",
      "Simulation",
      "Documentation",
    ],
    illustration: ASSETS.phase2.ieeeProjects,
    illustrationAlt: "IEEE Transactions Paper Implementation and algorithmic verification",
  },
  {
    id: "project-synopsis",
    title: "Project Synopsis",
    slug: "project-synopsis",
    href: "/services/project-synopsis",
    group: "academic",
    groupLabel: "Academic Research",
    tagline: "Proposal Structuring & Guide Approval",
    shortDescription: "Rigorous academic topic selection, problem statement definition, objectives formulation, and proposed system architecture.",
    offerings: [
      "Topic Selection",
      "Problem Statement",
      "Objectives",
      "Methodology",
      "Proposed System",
    ],
    illustration: ASSETS.illustrations.engineeringPlanning,
    illustrationAlt: "Project synopsis planning, topic selection, and methodology proposal",
  },
  {
    id: "thesis-writing",
    title: "Thesis Writing & Research",
    slug: "research-thesis",
    href: "/services/research-thesis",
    group: "academic",
    groupLabel: "Academic Research",
    tagline: "M.Tech Dissertations & Ph.D. Theses",
    shortDescription: "Methodology formulation, literature matrix structuring, quantitative analysis, and chapter-wise thesis documentation.",
    offerings: [
      "Thesis Structuring",
      "Literature Review",
      "Methodology",
      "Analysis",
      "Results & Documentation",
    ],
    illustration: ASSETS.phase2.researchThesis,
    illustrationAlt: "Thesis writing and academic research dissertation review",
  },
  {
    id: "research-paper-support",
    title: "Research Paper & Publication Support",
    slug: "research-paper-support",
    href: "/services/research-paper-support",
    group: "academic",
    groupLabel: "Academic Research",
    tagline: "Scopus, SCI & Conference Guidance",
    shortDescription: "Manuscript structuring, formatting, technical review, Turnitin similarity checks, and journal/conference submission guidance.",
    offerings: [
      "Paper Structuring",
      "Formatting",
      "Review / Editing",
      "Similarity Checks",
      "Journal / Conference Submission Guidance",
    ],
    illustration: ASSETS.phase2.researchSupportVisual,
    illustrationAlt: "Research paper manuscript editing and academic publication guidance",
  },
];

/**
 * 3 Primary Service Groups for Homepage Presentation:
 * Group 1: ENGINEERING PROJECTS (B.Tech • M.Tech • Capstone • Live Projects)
 * Group 2: RESEARCH PROJECTS (IEEE • Real-Time Implementation • Simulation)
 * Group 3: ACADEMIC RESEARCH (Synopsis • Thesis • Research Papers • Publication Support)
 */
export interface PrimaryServiceGroup {
  id: string;
  slug: string;
  href: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  subItems: string;
  highlights: string[];
  illustration: string;
  illustrationAlt: string;
  compactLinks: {
    label: string;
    href: string;
  }[];
}

export const primaryServiceGroups: PrimaryServiceGroup[] = [
  {
    id: "engineering-projects",
    slug: "engineering-projects",
    href: "/services/engineering-projects",
    badge: "Engineering Projects",
    title: "Engineering Projects",
    tagline: "B.Tech • M.Tech • Capstone • Live Projects",
    subItems: "B.Tech • M.Tech • Capstone • Live Projects",
    description: "Custom hardware circuits, embedded firmware, full-stack software, and working prototypes with full source code and reports.",
    highlights: ["Working Hardware & Code", "B.Tech & M.Tech Reports"],
    illustration: ASSETS.phase2.engineeringProjects,
    illustrationAlt: ASSETS.phase2.engineeringProjectsAlt,
    compactLinks: [
      { label: "B.Tech Projects", href: "/btech-projects" },
      { label: "M.Tech Projects", href: "/mtech-projects" },
      { label: "Capstone Projects", href: "/services/capstone-projects" },
      { label: "Live / Real-Time Projects", href: "/services/engineering-projects" },
      { label: "Project Reports", href: "/btech-projects" },
    ],
  },
  {
    id: "research-projects",
    slug: "ieee-projects",
    href: "/services/ieee-projects",
    badge: "Research Projects",
    title: "Research Projects",
    tagline: "IEEE • Real-Time Implementation • Simulation",
    subItems: "IEEE • Real-Time Implementation • Simulation",
    description: "Algorithmic reproduction of IEEE Transactions papers, high-fidelity MATLAB & ANSYS simulations, and benchmark validations.",
    highlights: ["IEEE Paper Implementation", "Simulation & Testing"],
    illustration: ASSETS.phase2.ieeeProjects,
    illustrationAlt: ASSETS.phase2.ieeeProjectsAlt,
    compactLinks: [
      { label: "IEEE Projects", href: "/services/ieee-projects" },
      { label: "Paper Implementation", href: "/ieee-projects" },
      { label: "Simulation & Testing", href: "/services/simulation-analysis" },
      { label: "Real-Time Implementation", href: "/services/engineering-projects" },
    ],
  },
  {
    id: "academic-research",
    slug: "research-thesis",
    href: "/services/research-thesis",
    badge: "Academic Research",
    title: "Academic Research",
    tagline: "Synopsis • Thesis • Research Papers • Publication Support",
    subItems: "Synopsis • Thesis • Research Papers • Publication Support",
    description: "Topic selection, formal project synopsis, chapter-wise thesis structuring, Turnitin similarity checks, and publication guidance.",
    highlights: ["Project Synopsis & Thesis", "Publication Guidance"],
    illustration: ASSETS.phase2.researchThesis,
    illustrationAlt: ASSETS.phase2.researchThesisAlt,
    compactLinks: [
      { label: "Project Synopsis", href: "/services/project-synopsis" },
      { label: "Thesis Writing", href: "/services/research-thesis" },
      { label: "Research Papers", href: "/services/research-paper-support" },
      { label: "Publication Support", href: "/services/research-paper-support" },
    ],
  },
];

// Legacy Category Mapping for Directory Views
export const serviceCategories: ServiceCategory[] = coreServiceTaxonomy.map((item, idx) => ({
  id: item.id,
  number: `0${idx + 1}`,
  title: item.title,
  tagline: item.tagline,
  description: item.shortDescription,
  domains: item.offerings,
  deliverables: [
    "Complete Verified Deliverables",
    "Technical Documentation & Reports",
    "Step-by-Step Walkthrough Session",
    "Viva Defense Guidance",
  ],
  image: item.illustration,
  imageAlt: item.illustrationAlt,
  href: item.href,
  isPopular: idx === 0 || idx === 3 || idx === 5,
}));

/**
 * Reusable Service Detail Records for Dynamic Routing (/services/[slug])
 */
export const serviceDetails: ServiceDetail[] = [
  {
    slug: "engineering-projects",
    title: "Engineering Project Development",
    categoryLabel: "Full-Lifecycle Implementation",
    shortDescription: "End-to-end B.Tech, M.Tech, capstone, and live engineering projects with working hardware, source code, and reports.",
    illustration: ASSETS.phase2.engineeringProjects,
    illustrationAlt: ASSETS.phase2.engineeringProjectsAlt,
    whatWeHelpWith: [
      { title: "B.Tech & M.Tech Project Build", description: "Complete hardware circuits, firmware, and software implementations with 100% clean code." },
      { title: "B.Tech & M.Tech Project Reports", description: "Standard chapter-wise reports adhering to university formatting guidelines." },
      { title: "Capstone & Real-Time Projects", description: "Multidisciplinary system integration, cloud telemetry, and live working models." },
      { title: "Hardware-Software Integration", description: "Microcontroller interfacing (ESP32/STM32), sensor calibration, and PCB layouts." },
      { title: "Verification & Benchmarking", description: "Rigorous testing protocols, edge-case validation, and performance metrics logging." },
      { title: "Presentation & Viva Mentoring", description: "Structured viva question banks, architecture slide decks, and code walkthroughs." },
    ],
    process: [
      { step: "01", title: "Requirement & Topic Review", description: "Scope finalization, syllabus alignment, and feasibility audit." },
      { step: "02", title: "Architecture & Planning", description: "Schematic drafts, module breakdown, and milestone scheduling." },
      { step: "03", title: "Development & Build", description: "Clean code authoring, hardware assembly, and live progress check-ins." },
      { step: "04", title: "Testing & Validation", description: "Full system runs, performance tuning, and test report generation." },
      { step: "05", title: "Handover & Viva Prep", description: "Code walkthrough, video demo, and defense presentation deck." },
    ],
    deliverables: [
      "Complete Source Code & Repositories",
      "Circuit Schematics & PCB Gerbers",
      "Hardware Wiring & Component Bill of Materials",
      "Comprehensive B.Tech / M.Tech Project Report",
      "Viva Voce Presentation Slides (PPT)",
      "1-on-1 Code Walkthrough Session",
    ],
    tools: ["Python", "PyTorch", "C++", "ESP32 / STM32", "ROS2", "Docker", "Altium Designer", "TensorFlow"],
    relatedProjectSlugs: ["ai-disease-prediction", "iot-smart-energy", "autonomous-robotics-navigation"],
    faqs: [
      {
        question: "Do I get full ownership of the source code and files?",
        answer: "Yes, you receive unencrypted, well-commented source code with full intellectual property ownership.",
      },
      {
        question: "Can you assist with B.Tech and M.Tech project reports?",
        answer: "Yes, we provide complete, university-formatted project reports with problem statements, block diagrams, flowcharts, results, and references.",
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
    slug: "capstone-projects",
    title: "Capstone & Live Project Development",
    categoryLabel: "Capstone Track",
    shortDescription: "End-to-end capstone engineering solutions with production-grade code, real-time hardware integration, documentation, and viva support.",
    illustration: ASSETS.phase2.engineeringProjects,
    illustrationAlt: ASSETS.phase2.engineeringProjectsAlt,
    whatWeHelpWith: [
      { title: "End-to-End Capstone Development", description: "Complete multi-module system engineering across IoT, AI, embedded, and web platforms." },
      { title: "Real-Time Implementation", description: "Sensor data acquisition, edge computing, actuator control, and cloud dashboards." },
      { title: "Industry-Standard Documentation", description: "Comprehensive capstone reports, UML architectural diagrams, and bill of materials." },
      { title: "Live System Demonstration", description: "Video demonstrations, screen captures, and working test benches." },
      { title: "Presentation & Viva Coaching", description: "Slide decks, examiner question banks, and technical talking points." },
      { title: "Revisions & Iteration Support", description: "Continuous adjustments based on faculty review panel feedback." },
    ],
    process: [
      { step: "01", title: "Problem Definition", description: "Identifying real-world engineering challenge and project scope." },
      { step: "02", title: "System Architecture", description: "Designing block diagrams, circuit schematics, and data flow pipelines." },
      { step: "03", title: "Prototype Build", description: "Developing firmware, software modules, and physical hardware assembly." },
      { step: "04", title: "Live Testing", description: "Benchmarking against real-time inputs and validating accuracy." },
      { step: "05", title: "Handover & Presentation", description: "Delivering complete package, report, and slide presentation." },
    ],
    deliverables: [
      "Complete Clean Source Code (GitHub / ZIP)",
      "Hardware Schematics, Pinouts & PCB Files",
      "Full Capstone Project Report & Synopsis",
      "Live Demonstration Video & Execution SOP",
      "Viva Voce Presentation Slides (PPT)",
      "Faculty Review Revision Support",
    ],
    tools: ["Python", "C++", "ESP32", "Raspberry Pi", "React / Next.js", "Docker", "MQTT / HTTP", "OpenCV"],
    relatedProjectSlugs: ["iot-smart-energy", "autonomous-robotics-navigation", "ev-battery-bms"],
    faqs: [
      {
        question: "What is included in a Capstone Project package?",
        answer: "Each capstone package includes working code, circuit schematics, a detailed project report, viva presentation slides, and an execution walkthrough.",
      },
      {
        question: "Can capstone projects be customized for group members?",
        answer: "Yes, we structure module boundaries so each team member has clear individual contributions clearly defined in the report and presentation.",
      },
    ],
  },
  {
    slug: "ieee-projects",
    title: "IEEE Project Implementation",
    categoryLabel: "Benchmark Reproduction",
    shortDescription: "Exact algorithmic reproduction, simulation, and novel enhancement of published IEEE Transactions papers.",
    illustration: ASSETS.phase2.ieeeProjects,
    illustrationAlt: ASSETS.phase2.ieeeProjectsAlt,
    whatWeHelpWith: [
      { title: "IEEE-Based Project Development", description: "Mathematical review and faithful implementation of IEEE base papers." },
      { title: "Paper Implementation", description: "Reproducing baseline author algorithms and experimental setups in code." },
      { title: "Simulation & Numerical Validation", description: "Accurate simulation in MATLAB, ANSYS, NS-3, or Vivado." },
      { title: "Proposed Novel Enhancements", description: "Introducing architectural tweaks to exceed base paper benchmarks." },
      { title: "Comparative Evaluation", description: "Side-by-side performance graphs vs. state-of-the-art baselines." },
      { title: "IEEE Two-Column Documentation", description: "Conference/journal draft detailing methodology and results." },
    ],
    process: [
      { step: "01", title: "Base Paper Scrutiny", description: "Validating mathematical derivations and experimental claims." },
      { step: "02", title: "Baseline Replication", description: "Recreating baseline figures and error rates in code." },
      { step: "03", title: "Novel Enhancement", description: "Implementing proposed optimization or hybrid architecture tweaks." },
      { step: "04", title: "Benchmark Comparison", description: "Generating quantitative comparative tables and convergence curves." },
      { step: "05", title: "Paper & Code Packaging", description: "Publishable documentation, test harness, and execution guide." },
    ],
    deliverables: [
      "Exact Base Paper Reproduction Code",
      "Proposed Enhancement Source Scripts",
      "Comparative Performance Plots & Matrices",
      "IEEE Two-Column Formatted Paper Draft",
      "Project Synopsis & Viva Presentation Deck",
      "Step-by-Step Simulation Execution SOP",
    ],
    tools: ["Python / PyTorch", "MATLAB", "Xilinx Vivado", "NS-3", "OpenCV", "LaTeX"],
    relatedProjectSlugs: ["ai-disease-prediction", "matlab-grid-simulation", "fpga-crypto-accelerator"],
    faqs: [
      {
        question: "Can I provide my own IEEE base paper?",
        answer: "Yes, you can provide any IEEE Transactions, IEEE Access, or flagship conference paper for implementation.",
      },
      {
        question: "What if the base paper lacks implementation details?",
        answer: "Our domain experts reconstruct missing parameters and mathematical nuances based on industry-standard baselines.",
      },
      {
        question: "Do you provide comparative graphs?",
        answer: "Yes, we generate side-by-side comparative plots and metric tables comparing base paper baselines with proposed enhancements.",
      },
    ],
  },
  {
    slug: "project-synopsis",
    title: "Project Synopsis & Proposal",
    categoryLabel: "Academic Planning",
    shortDescription: "Structured academic project synopsis preparation covering topic selection, problem statement, objectives, and proposed methodology.",
    illustration: ASSETS.illustrations.engineeringPlanning,
    illustrationAlt: ASSETS.illustrations.engineeringPlanningAlt,
    whatWeHelpWith: [
      { title: "Topic Selection & Feasibility", description: "Curating high-impact, curriculum-aligned project topics with novel scope." },
      { title: "Problem Statement Formulation", description: "Defining exact academic gaps and technological challenges to solve." },
      { title: "Objectives & Deliverables", description: "Listing clear, measurable project goals and expected outcomes." },
      { title: "Methodology & Proposed System", description: "Drafting block diagrams, algorithmic workflows, and architecture plans." },
      { title: "Literature Survey Matrix", description: "Summarizing 10-15 key reference papers highlighting baseline limitations." },
      { title: "College Guideline Formatting", description: "Formatting synopsis strictly according to university proposal rubrics." },
    ],
    process: [
      { step: "01", title: "Domain Discovery", description: "Understanding student interests, branch specialization, and college deadlines." },
      { step: "02", title: "Topic & Paper Shortlisting", description: "Presenting 2-3 validated topics with base paper references." },
      { step: "03", title: "Synopsis Drafting", description: "Authoring problem statement, objectives, system architecture, and methodology." },
      { step: "04", title: "Guide Feedback Revisions", description: "Refining synopsis content based on faculty coordinator input." },
      { step: "05", title: "Approval & Roadmap", description: "Delivering finalized synopsis document ready for departmental submission." },
    ],
    deliverables: [
      "Department-Ready Project Synopsis Document (Docx / PDF)",
      "System Architecture & Methodology Flowcharts",
      "Curated Literature Survey Reference Matrix",
      "Base Paper Summaries & IEEE Citations",
      "Synopsis Presentation Slides (PPT)",
    ],
    tools: ["LaTeX", "MS Word", "Draw.io", "Mendeley", "Zotero"],
    relatedProjectSlugs: ["ai-disease-prediction", "iot-smart-energy", "ev-battery-bms"],
    faqs: [
      {
        question: "What is included in the project synopsis?",
        answer: "The synopsis includes title, introduction, problem statement, literature survey, project objectives, proposed methodology, hardware/software requirements, expected results, and references.",
      },
      {
        question: "Will you help if my college guide rejects the initial topic?",
        answer: "Yes, our synopsis support includes topic alternatives and revisions until you secure official guide approval.",
      },
    ],
  },
  {
    slug: "research-thesis",
    title: "Thesis Writing & Research Support",
    categoryLabel: "Academic & Scholar Consulting",
    shortDescription: "Structured guidance for M.Tech dissertations and Ph.D. theses from literature review and methodology to chapter drafting.",
    illustration: ASSETS.phase2.researchThesis,
    illustrationAlt: ASSETS.phase2.researchThesisAlt,
    whatWeHelpWith: [
      { title: "Thesis Structuring & Formatting", description: "Chapter-by-chapter drafting adhering to university typography guidelines." },
      { title: "Literature Review Synthesis", description: "Systematic mapping of peer-reviewed papers with comparative taxonomy tables." },
      { title: "Methodology & Mathematical Formulation", description: "Governing equations, hypothesis formulation, and algorithmic models." },
      { title: "Analysis & Empirical Validation", description: "Experimental dataset calibration, statistical analysis, and comparative graphs." },
      { title: "Results & Documentation", description: "In-depth technical discussions, error analyses, and conclusion synthesis." },
      { title: "Similarity & Plagiarism Checks", description: "Turnitin originality audit with guided academic phrasing revisions." },
    ],
    process: [
      { step: "01", title: "Research Gap Identification", description: "Deep literature dive to locate novel academic contributions." },
      { step: "02", title: "Methodology & Modeling", description: "Formulating theoretical proofs, equations, and algorithmic frameworks." },
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
        question: "How do you ensure originality in thesis drafting?",
        answer: "All mathematical derivations, analysis text, and discussions are crafted from scratch and audited with Turnitin to maintain low similarity.",
      },
      {
        question: "Is my research data kept confidential?",
        answer: "All research engagements are protected under a strict Non-Disclosure Agreement (NDA).",
      },
    ],
  },
  {
    slug: "research-paper-support",
    title: "Research Paper & Publication Support",
    categoryLabel: "Academic Publication",
    shortDescription: "End-to-end guidance for drafting, formatting, technical review, and submission to Scopus, SCI, and IEEE indexed venues.",
    illustration: ASSETS.phase2.researchSupportVisual,
    illustrationAlt: ASSETS.phase2.researchSupportVisualAlt,
    whatWeHelpWith: [
      { title: "Paper Structuring & Drafting", description: "Authoring abstract, introduction, methodology, results, and discussion." },
      { title: "Journal & Conference Formatting", description: "IEEE two-column, Springer LNCS, Elsevier, and ACM template styling." },
      { title: "Technical Review & Scientific Polish", description: "Pre-submission technical audit, academic tone enhancement, and precision editing." },
      { title: "Similarity & Originality Checks", description: "Turnitin-verified similarity reports with structured phrasing corrections." },
      { title: "Publication & Venue Guidance", description: "Matching manuscript scope with reputable Scopus, SCI, and IEEE indexed venues." },
      { title: "Response to Reviewers", description: "Structuring persuasive point-by-point rebuttal letters for revision rounds." },
    ],
    process: [
      { step: "01", title: "Scope & Venue Mapping", description: "Identifying high-fit Scopus/SCI journals or conferences with realistic timelines." },
      { step: "02", title: "Data & Results Structuring", description: "Converting raw experimental outputs into clear tables and figures." },
      { step: "03", title: "Full Paper Drafting", description: "Writing rigorous academic prose following target venue guidelines." },
      { step: "04", title: "Technical Review & Audit", description: "Pre-submission quality check and Turnitin similarity audit." },
      { step: "05", title: "Submission Package & Guidance", description: "Cover letter, graphical abstract, and submission guidance package." },
    ],
    deliverables: [
      "Complete Camera-Ready Manuscript (LaTeX & Docx)",
      "High-Resolution 300+ DPI Vector Illustrations",
      "Turnitin Similarity Audit Report",
      "Editor Cover Letter & Highlight Summary",
      "Reviewer Rebuttal Template (for revision rounds)",
    ],
    tools: ["LaTeX", "Overleaf", "Grammarly Premium", "Turnitin", "OriginLab", "Adobe Illustrator"],
    relatedProjectSlugs: ["llm-rag-scholarly-search", "ai-disease-prediction", "structural-seismic-response"],
    faqs: [
      {
        question: "Do you guarantee journal publication or acceptance?",
        answer: "We provide comprehensive publication support and guidance. Because acceptance decisions rest solely with independent journal peer reviewers, we do not claim guaranteed publication; however, we ensure your manuscript satisfies high technical, originality, and formatting standards.",
      },
      {
        question: "Which citation and manuscript styles are supported?",
        answer: "We support IEEE, Springer LNCS, Elsevier, ACM, APA, Harvard, and all custom journal templates.",
      },
      {
        question: "Can you assist with review round revisions?",
        answer: "Yes, our publication guidance includes crafting point-by-point reviewer rebuttal letters and revising manuscript sections according to reviewer feedback.",
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
];

export function getAllServices(): ServiceDetail[] {
  return serviceDetails;
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}

