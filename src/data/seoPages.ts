import { SeoLandingPage } from "@/types";

export const seoPagesData: Record<string, SeoLandingPage> = {
  "mtech-projects": {
    slug: "mtech-projects",
    targetKeyword: "M.Tech Project & M.Tech Project Report",
    heroEyebrow: "Postgraduate & M.Tech Track",
    heroHeading: "M.Tech Project Development & Dissertation Guidance",
    heroDescription: "Advanced engineering projects, simulation modeling, IEEE algorithm reproduction, project synopsis, and M.Tech project reports tailored for M.Tech & M.S. scholars.",
    targetAudience: "M.Tech, M.E., and M.S. engineering scholars across CSE, ECE, EEE, Mechanical, and Civil streams.",
    featuredDomains: ["AI & Machine Learning", "VLSI & Embedded Systems", "Power Systems & EV", "FEA & CFD Modeling", "Structural Dynamics"],
    deliverablesList: [
      "100% Verified Source Code & Simulation Models",
      "Comprehensive M.Tech Project Report & Dissertation Manuscript",
      "Turnitin Originality Report (< 10% Similarity)",
      "Project Synopsis & Proposed System Architecture",
      "Viva Voce Presentation Slides & Code Walkthrough",
    ],
    processSteps: [
      { step: "01", title: "Topic & Synopsis Finalization", desc: "Selecting a high-impact base paper from recent IEEE Transactions and preparing the project synopsis." },
      { step: "02", title: "Architecture & Simulation", desc: "Building mathematical models, circuit schematics, or deep learning pipelines." },
      { step: "03", title: "Comparative Evaluation", desc: "Benchmarking against state-of-the-art results to establish novel contribution." },
      { step: "04", title: "M.Tech Report & Viva Prep", desc: "Authoring comprehensive dissertation chapters and preparing defense slide decks." },
    ],
    faqs: [
      {
        question: "Can I bring my own university-approved base paper?",
        answer: "Yes, our domain specialists work directly with your approved base paper or provide curated IEEE options if you need topic guidance.",
      },
      {
        question: "Is the simulation code fully commented and explained?",
        answer: "Yes, every file is thoroughly commented, and we provide a 1-on-1 walkthrough session to ensure complete understanding for your defense.",
      },
      {
        question: "How do you handle guide review feedback for M.Tech reports?",
        answer: "Our standard engagement includes iterative revision cycles to incorporate feedback from your project guide or academic committee.",
      },
    ],
    relatedProjectSlugs: ["ai-disease-prediction", "ev-battery-bms", "ansys-thermal-analysis"],
  },
  "btech-projects": {
    slug: "btech-projects",
    targetKeyword: "B.Tech Project & B.Tech Project Report",
    heroEyebrow: "Undergraduate Capstone Track",
    heroHeading: "B.Tech Engineering Projects & Working Prototypes",
    heroDescription: "Working hardware prototypes, IoT systems, full-stack software, Capstone projects, and live real-time models with complete B.Tech project reports and viva mentoring.",
    targetAudience: "Final year B.Tech, B.E., and undergraduate engineering students seeking working project models.",
    featuredDomains: ["Computer Science & IT", "Electronics & Communication", "Electrical & Electronics", "Mechanical Engineering", "Civil Engineering"],
    deliverablesList: [
      "Tested Working Hardware Firmware / Software Repositories",
      "Circuit Schematics, Wiring Diagrams & Component Lists",
      "Complete B.Tech Project Report & Project Synopsis",
      "Live Real-Time Project Execution Demonstration",
      "Viva Defense Q&A Sheet & Slide Deck",
    ],
    processSteps: [
      { step: "01", title: "Project Selection & Synopsis", desc: "Choosing a project scope matched to your branch syllabus and drafting the project synopsis." },
      { step: "02", title: "Hardware / Code Build", desc: "Developing modular code, assembling hardware, and testing sensors." },
      { step: "03", title: "System Integration", desc: "Connecting software frontends with hardware microcontrollers or cloud APIs in real-time." },
      { step: "04", title: "B.Tech Report & Viva Handover", desc: "Generating standard college reports, presentation slides, and demo video." },
    ],
    faqs: [
      {
        question: "Do you provide hardware components or procurement links for B.Tech projects?",
        answer: "We provide complete circuit diagrams, verified component lists with online procurement links, and step-by-step assembly guides.",
      },
      {
        question: "Will the B.Tech project report satisfy my university rubric?",
        answer: "All reports are structured according to standard university rubric requirements (problem statement, block diagrams, flowcharts, results, and viva Q&A).",
      },
    ],
    relatedProjectSlugs: ["iot-smart-energy", "autonomous-robotics-navigation", "ai-disease-prediction"],
  },
  "final-year-projects": {
    slug: "final-year-projects",
    targetKeyword: "Final Year Engineering Major & Minor Projects",
    heroEyebrow: "Major & Minor Project Guidance",
    heroHeading: "Final Year Major & Minor Engineering Projects",
    heroDescription: "End-to-end technical mentoring, live real-time prototype construction, project synopsis, and IEEE paper reproduction for engineering students in their final semesters.",
    targetAudience: "Undergraduate and postgraduate students completing their final semester major project evaluations.",
    featuredDomains: ["Embedded Systems & IoT", "Deep Learning & AI", "MATLAB Power & Grid", "Mechanical Design & CFD", "Structural Analysis"],
    deliverablesList: [
      "Modular Unencrypted Source Code (GitHub / ZIP)",
      "Comprehensive IEEE Standard Project Synopsis & Report",
      "Complete Component Datasheets & Circuit Schematics",
      "Interactive Web Dashboard or Simulation Model",
      "Viva Voce Defense Preparation Material",
    ],
    processSteps: [
      { step: "01", title: "Requirement Sync & Synopsis", desc: "Reviewing college guidelines, project duration, team constraints, and synopsis approval." },
      { step: "02", title: "Prototype Development", desc: "Executing software modules, firmware loops, or numerical simulations." },
      { step: "03", title: "Demo & Verification", desc: "Live screen demo validating functionality against expected outputs in real-time." },
      { step: "04", title: "Final Package Delivery", desc: "Providing all files, reports, slides, and defense cheat sheets." },
    ],
    faqs: [
      {
        question: "How fast can a final year project be delivered?",
        answer: "Delivery timelines depend on scope complexity; standard project packages are typically completed within 5 to 14 working days with interim check-ins.",
      },
      {
        question: "Is viva defense training included?",
        answer: "Yes, we provide structured viva Q&A notes, architectural explanations, and common examiner question walkthroughs.",
      },
    ],
    relatedProjectSlugs: ["iot-smart-energy", "ev-battery-bms", "matlab-grid-simulation"],
  },
  "ieee-projects": {
    slug: "ieee-projects",
    targetKeyword: "IEEE Project Implementation & Benchmark Reproduction",
    heroEyebrow: "IEEE Benchmark Reproduction",
    heroHeading: "IEEE Paper Implementation & Performance Enhancement",
    heroDescription: "Exact algorithmic reproduction, simulation, and novel performance enhancement of top-tier IEEE Transactions papers with comparative benchmarking.",
    targetAudience: "M.Tech and Ph.D. scholars requiring reproducible baseline replication and novel contributions.",
    featuredDomains: ["IEEE Transactions on Neural Networks", "IEEE Transactions on Power Systems", "IEEE Transactions on VLSI", "IEEE Transactions on Industrial Informatics"],
    deliverablesList: [
      "Exact Base Paper Reproduction Scripts",
      "Proposed Novel Enhancement Source Code",
      "Side-by-Side Comparative Graphs & Performance Tables",
      "IEEE Two-Column Formatted Conference/Journal Paper",
      "Presentation Deck with Algorithm Flowcharts",
    ],
    processSteps: [
      { step: "01", title: "Base Paper Scrutiny", desc: "Validating mathematical derivations and experimental claims from the paper." },
      { step: "02", title: "Baseline Recreation", desc: "Replicating original author results and error metrics in code/simulation." },
      { step: "03", title: "Novel Enhancement", desc: "Implementing proposed optimization or hybrid architecture tweaks." },
      { step: "04", title: "Comparative Benchmark", desc: "Generating quantitative comparative plots and writing the manuscript draft." },
    ],
    faqs: [
      {
        question: "Can you implement papers from IEEE Access, Transactions, or Conferences?",
        answer: "Yes, we implement papers from all IEEE publications including Transactions, Journals, Letters, and flagship IEEE conferences.",
      },
      {
        question: "Do you guarantee better results than the base paper?",
        answer: "Yes, we propose structured algorithmic enhancements (e.g. attention mechanisms, hybrid metaheuristic tuning) designed to outperform the base paper baselines.",
      },
    ],
    relatedProjectSlugs: ["ai-disease-prediction", "matlab-grid-simulation", "fpga-crypto-accelerator"],
  },
};

export function getSeoPageBySlug(slug: string): SeoLandingPage | undefined {
  return seoPagesData[slug];
}

export function getAllSeoPages(): SeoLandingPage[] {
  return Object.values(seoPagesData);
}
