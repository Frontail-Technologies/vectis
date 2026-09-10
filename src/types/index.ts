export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  domains: string[];
  deliverables: string[];
  image: string;
  imageAlt: string;
  href: string;
  isPopular?: boolean;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  categoryLabel: string;
  shortDescription: string;
  illustration: string;
  illustrationAlt: string;
  whatWeHelpWith: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  tools: string[];
  relatedProjectSlugs: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface DisciplineDetail {
  slug: string;
  code: string;
  name: string;
  shortDesc: string;
  overview: string;
  keyAreas: {
    title: string;
    description: string;
  }[];
  tools: string[];
  projectTypes: string[];
  deliverables: string[];
  relatedProjectSlugs: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  featured?: boolean;
  content: {
    sections: {
      heading?: string;
      body: string[];
      keyTakeaway?: string;
    }[];
  };
  tags: string[];
  relatedSlugs?: string[];
}

export interface SeoLandingPage {
  slug: string;
  targetKeyword: string;
  heroEyebrow: string;
  heroHeading: string;
  heroDescription: string;
  targetAudience: string;
  featuredDomains: string[];
  deliverablesList: string[];
  processSteps: {
    step: string;
    title: string;
    desc: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedProjectSlugs: string[];
}

export interface EngineeringBranch {
  id: string;
  code: string;
  name: string;
  shortDesc: string;
  focusAreas: string[];
  tools: string[];
  deliverables: string[];
  image?: string;
  imageAlt?: string;
  featuredTopics?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  branchCode: string;
  technology: string[];
  summary: string;
  overview?: string;
  objectives?: string[];
  keyFeatures?: string[];
  deliverables?: string[];
  relatedProjectSlugs?: string[];
  systemArchitecture?: string;
  metrics?: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  contactEmail: string;
  contactPhone: string;
  officeHours: string;
  credibilityTags: string[];
}
