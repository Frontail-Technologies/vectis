import { ASSETS } from "@/data/assets";

export interface TeamMember {
  name: string;
  title: string;
  specialization: string;
  credential: string;
  photo: string;
  photoAlt: string;
}

/**
 * PLACEHOLDER TEAM DATA
 * Replace with actual team profiles when available.
 * All entries below are illustrative placeholders only.
 */
export const teamMembers: TeamMember[] = [
  {
    name: "Dr. S. Krishnan",
    title: "Lead — Electronics & Embedded",
    specialization: "VLSI Design, FPGA, IoT Systems",
    credential: "Ph.D. Electronics Engineering · 12+ years",
    photo: ASSETS.team.expert1,
    photoAlt: ASSETS.team.expert1Alt,
  },
  {
    name: "Dr. Priya Nair",
    title: "Research & Thesis Advisor",
    specialization: "Academic Writing, Methodology, Scopus Publications",
    credential: "Ph.D. Applied Sciences · 9+ years",
    photo: ASSETS.team.expert2,
    photoAlt: ASSETS.team.expert2Alt,
  },
  {
    name: "Arjun Mehta",
    title: "Lead — AI & Software Systems",
    specialization: "Deep Learning, Computer Vision, Data Science",
    credential: "M.Tech CSE · 7+ years",
    photo: ASSETS.team.expert3,
    photoAlt: ASSETS.team.expert3Alt,
  },
];
