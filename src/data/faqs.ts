export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqsList: FaqItem[] = [
  {
    id: "faq-1",
    question: "What types of engineering projects and domains do you support?",
    answer:
      "We support academic and research projects across Computer Science (CSE/IT), Electronics & Communication (ECE), Electrical & Electronics (EEE), Mechanical (MECH), and Civil Engineering. Deliverables span AI/Deep Learning, Embedded Systems & IoT, FPGA/VLSI, MATLAB Simulink Power Systems, ANSYS FEA/CFD, and Robotics.",
  },
  {
    id: "faq-2",
    question: "Do you provide complete source code, simulation models, and documentation?",
    answer:
      "Yes. Every project includes 100% modular, documented source code or verified simulation files (.slx, .m, .v, .py, .wbpj), accompanied by a comprehensive chapter-wise project report, circuit diagrams, and presentation slides matching your university guidelines.",
  },
  {
    id: "faq-3",
    question: "Can you work from my existing project synopsis or IEEE base paper?",
    answer:
      "Absolutely. You can share your approved topic synopsis, IEEE Transactions paper, or custom problem statement. Our engineering team will review technical feasibility, toolchain requirements, and deliver a structured implementation roadmap.",
  },
  {
    id: "faq-4",
    question: "Do you support complex simulation toolchains like MATLAB, ANSYS, and Vivado?",
    answer:
      "Yes. Our domain specialists work directly with MATLAB & Simulink (Simscape Electrical, Control Systems), ANSYS (Fluent CFD, Mechanical FEA), Xilinx Vivado (Verilog/VHDL RTL), SolidWorks, COMSOL Multiphysics, and PyTorch/TensorFlow.",
  },
  {
    id: "faq-5",
    question: "How do you assist with M.Tech dissertations and Ph.D. research papers?",
    answer:
      "We assist with state-of-the-art literature review, mathematical model formulation, comparative performance graphs against baseline literature, plagiarism audit, and manuscript formatting for IEEE, Scopus, and SCI-indexed journals.",
  },
  {
    id: "faq-6",
    question: "How do I discuss my project requirement and get started?",
    answer:
      "You can submit your project synopsis, base paper, or problem statement through our consultation form, email us directly, or call our engineering desk. We review specifications and provide a milestone proposal within 24 hours.",
  },
];
