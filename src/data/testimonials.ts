import { ASSETS } from "@/data/assets";

export interface TestimonialItem {
  name: string;
  degree: string;
  institution: string;
  discipline: string;
  quote: string;
  avatar: string;
}

export const testimonials: TestimonialItem[] = [
  {
    name: "Dr. Arvind Ramesh",
    degree: "Ph.D. Scholar",
    institution: "National Institute of Technology",
    discipline: "Power Electronics",
    quote:
      "Vectis reproduced my IEEE grid-forming inverter simulation on MATLAB Simscape with exact waveforms. The methodology assistance made my journal revision effortless.",
    avatar: ASSETS.testimonials.student1,
  },
  {
    name: "Sneha Mukherjee",
    degree: "M.Tech Final Year",
    institution: "College of Engineering",
    discipline: "VLSI & Embedded Systems",
    quote:
      "The FPGA Verilog implementation came with complete testbenches and Vivado configs. The live walkthrough gave me full confidence at my project viva.",
    avatar: ASSETS.testimonials.student2,
  },
  {
    name: "Rahul Verma",
    degree: "B.Tech Final Year",
    institution: "Technological University",
    discipline: "Artificial Intelligence",
    quote:
      "Working PyTorch code with Vision Transformer checkpoints and a FastAPI demo. Documentation matched our university thesis format with zero plagiarism issues.",
    avatar: ASSETS.testimonials.student3,
  },
];
