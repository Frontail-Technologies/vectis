import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Disciplines", href: "/disciplines" },
  { label: "Research Support", href: "/research-support" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
];

export const footerNavConfig = {
  services: [
    { label: "B.Tech Projects & Reports", href: "/btech-projects" },
    { label: "M.Tech Projects & Reports", href: "/mtech-projects" },
    { label: "Capstone & Live Projects", href: "/services/capstone-projects" },
    { label: "IEEE Projects & Implementation", href: "/services/ieee-projects" },
    { label: "Project Synopsis", href: "/services/project-synopsis" },
    { label: "Thesis Writing & Research", href: "/services/research-thesis" },
    { label: "Research Paper & Publication Support", href: "/services/research-paper-support" },
  ],
  branches: [
    { label: "Computer Science & AI (CSE)", href: "/disciplines/computer-science" },
    { label: "Electronics & Comm. (ECE)", href: "/disciplines/ece" },
    { label: "Electrical & Power (EEE)", href: "/disciplines/eee" },
    { label: "Mechanical & Thermal (MECH)", href: "/disciplines/mechanical" },
    { label: "Civil & Structural (CIVIL)", href: "/disciplines/civil" },
    { label: "All Engineering Disciplines", href: "/disciplines" },
  ],
  research: [
    { label: "Research Support Overview", href: "/research-support" },
    { label: "8-Stage Research Lifecycle", href: "/research-support#stages" },
    { label: "Paper Publication Support", href: "/services/research-paper-support" },
    { label: "Simulation & Technical Analysis", href: "/services/simulation-analysis" },
    { label: "Schedule Consultation", href: "/contact" },
  ],
  legal: [
    { label: "Academic Integrity Policy", href: "/about" },
    { label: "Non-Disclosure Agreement (NDA)", href: "/contact" },
    { label: "Terms of Engagement", href: "/about" },
  ],
};

