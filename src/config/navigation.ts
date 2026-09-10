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
    { label: "Engineering Project Development", href: "/services/engineering-projects" },
    { label: "Research & Thesis Support", href: "/services/research-thesis" },
    { label: "Simulation & Technical Analysis", href: "/services/simulation-analysis" },
    { label: "IEEE Paper Implementation", href: "/services/ieee-projects" },
    { label: "M.Tech Dissertation Track", href: "/mtech-projects" },
    { label: "B.Tech Capstone Projects", href: "/btech-projects" },
    { label: "Final Year Major Projects", href: "/final-year-projects" },
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
    { label: "Journal Paper Writing", href: "/services/research-paper-support" },
    { label: "Technical Guides & Blogs", href: "/blogs" },
    { label: "Schedule Consultation", href: "/contact" },
  ],
  legal: [
    { label: "Academic Integrity Policy", href: "/about" },
    { label: "Non-Disclosure Agreement (NDA)", href: "/contact" },
    { label: "Terms of Engagement", href: "/about" },
  ],
};
