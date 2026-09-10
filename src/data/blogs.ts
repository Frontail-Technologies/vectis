import { BlogPost } from "@/types";

export const blogsData: BlogPost[] = [
  {
    slug: "how-to-select-ieee-base-paper",
    title: "How to Select an IEEE Base Paper for M.Tech & Ph.D. Projects",
    excerpt: "A practical framework for evaluating citation quality, mathematical rigor, reproducibility, and scope for novel contribution in top-tier IEEE Transactions.",
    category: "Research Strategy",
    readTime: "6 min read",
    publishedAt: "September 2026",
    author: {
      name: "Dr. K. Ramanathan",
      role: "Lead Research Advisor",
    },
    featured: true,
    tags: ["IEEE Transactions", "Literature Review", "M.Tech", "Ph.D."],
    content: {
      sections: [
        {
          heading: "1. The 3-Year Recency Filter",
          body: [
            "When selecting a base paper for an advanced thesis or capstone project, prioritize papers published within the last 24 to 36 months in IEEE Transactions or top ACM conferences.",
            "Older papers often have had their primary algorithmic contributions fully saturated in subsequent literature, leaving minimal room for novel enhancements.",
          ],
          keyTakeaway: "Target IEEE Transactions published within the last 3 years to ensure your proposed enhancement addresses an active academic frontier.",
        },
        {
          heading: "2. Verifying Mathematical & Algorithmic Completeness",
          body: [
            "Before committing to a paper, perform an initial mathematical audit. Ensure that the paper explicitly defines its loss functions, governing equations, parameter constraints, and state variables.",
            "If key hyperparameter tables or sensor calibration specs are omitted as proprietary, reproducing the baseline results will consume disproportionate project timeline.",
          ],
        },
        {
          heading: "3. Identifying Feasible Scope for Novel Contribution",
          body: [
            "A successful thesis does not require re-inventing an entire field. Standard avenues for novel enhancement include: hybridizing two complementary algorithms, replacing a standard optimizer with an adaptive metaheuristic, or applying a proven model to a novel benchmark dataset.",
            "Formulate your contribution as a specific hypothesis that can be quantitatively benchmarked against the base paper's published tables.",
          ],
          keyTakeaway: "Clear delta (Proposed vs. Base) is what evaluators examine during thesis defense and journal review.",
        },
      ],
    },
    relatedSlugs: ["structuring-phd-dissertation-guide", "ansys-fea-mesh-convergence-guide"],
  },
  {
    slug: "structuring-phd-dissertation-guide",
    title: "Structuring a Ph.D. Dissertation: Chapter-by-Chapter Architecture",
    excerpt: "A systematic blueprint for organizing research questions, mathematical formulations, experimental validations, and viva defense narratives.",
    category: "Thesis Writing",
    readTime: "8 min read",
    publishedAt: "August 2026",
    author: {
      name: "Dr. S. Mukherjee",
      role: "Academic Consulting Specialist",
    },
    tags: ["Dissertation", "LaTeX", "Viva Defense", "Methodology"],
    content: {
      sections: [
        {
          heading: "1. The Standard 6-to-7 Chapter Architecture",
          body: [
            "A standard doctoral dissertation in engineering is structured into distinct chapters: Introduction & Motivation, Comprehensive Literature Review, Mathematical Formulation & Proposed Framework, Simulation & Experimental Setup, Comparative Results & Discussion, and Conclusions with Future Directions.",
            "Ensure that every research question stated in Chapter 1 has a corresponding quantitative answer in Chapter 5.",
          ],
        },
        {
          heading: "2. Literature Review: Taxonomy over Chronology",
          body: [
            "Avoid summarizing papers chronologically ('Author A did X in 2022, Author B did Y in 2023'). Instead, construct a taxonomic matrix grouping previous literature by methodology, dataset size, and computational bottlenecks.",
            "The final section of Chapter 2 must explicitly articulate the Research Gap that motivates your proposed framework.",
          ],
          keyTakeaway: "A literature review is not a summary; it is a critical comparative justification for your research gap.",
        },
        {
          heading: "3. Formatting with LaTeX and Version Control",
          body: [
            "Authoring dissertations in Overleaf or local LaTeX prevents the catastrophic formatting corruptions common in large Word documents containing hundreds of equations and vector plots.",
            "Maintain modular chapter files included into a master main.tex document with centralized BibTeX citation management.",
          ],
        },
      ],
    },
    relatedSlugs: ["how-to-select-ieee-base-paper", "deep-learning-biomedical-imaging-best-practices"],
  },
  {
    slug: "ansys-fea-mesh-convergence-guide",
    title: "Best Practices for ANSYS FEA & CFD Mesh Convergence Verification",
    excerpt: "How to conduct a rigorous Grid Convergence Index (GCI) study to guarantee spatial discretization independence in engineering simulations.",
    category: "Simulation & Modeling",
    readTime: "7 min read",
    publishedAt: "July 2026",
    author: {
      name: "Er. Vignesh R.",
      role: "Senior FEA/CFD Specialist",
    },
    tags: ["ANSYS Fluent", "FEA", "CFD", "Mesh Independence"],
    content: {
      sections: [
        {
          heading: "1. Why Mesh Independence Is Non-Negotiable",
          body: [
            "In finite element analysis and computational fluid dynamics, numerical results can vary drastically with element density. Academic journals and thesis committees routinely reject simulation studies that lack formal mesh independence verification.",
          ],
          keyTakeaway: "Simulation results without mesh convergence verification represent numerical artifacts rather than true physical behavior.",
        },
        {
          heading: "2. The Roache Grid Convergence Index (GCI) Method",
          body: [
            "The standard ASME-recommended method requires generating at least three systematically refined meshes (Coarse, Medium, Fine) with a constant grid refinement ratio r ≥ 1.3.",
            "Calculate the apparent order of convergence and the GCI error percentage on critical target variables (peak Von Mises stress, maximum velocity, or pressure drop).",
          ],
        },
        {
          heading: "3. Near-Wall Resolution (y+) in Turbulent Flows",
          body: [
            "For CFD simulations using k-omega SST turbulence models, ensure that the first cell height adjacent to solid walls satisfies y+ < 1. This guarantees that viscous sublayer velocity gradients are accurately resolved without unphysical damping.",
          ],
        },
      ],
    },
    relatedSlugs: ["how-to-select-ieee-base-paper", "deep-learning-biomedical-imaging-best-practices"],
  },
  {
    slug: "deep-learning-biomedical-imaging-best-practices",
    title: "Developing Multimodal Deep Learning for Biomedical Scans: Key Lessons",
    excerpt: "Architectural considerations for training Vision Transformers on volumetric MRI and CT scans under severe clinical label scarcity.",
    category: "AI & Software",
    readTime: "9 min read",
    publishedAt: "June 2026",
    author: {
      name: "Dr. K. Ramanathan",
      role: "Lead Research Advisor",
    },
    tags: ["Deep Learning", "PyTorch", "Vision Transformers", "Medical AI"],
    content: {
      sections: [
        {
          heading: "1. Handling Volumetric 3D Tensors Efficiently",
          body: [
            "Volumetric medical imaging (MRI, CT) incurs severe GPU VRAM overhead when partitioned into dense 3D patches. Using 2.5D multi-planar slicing or shifted-window 3D attention significantly reduces memory footprint without sacrificing spatial continuity.",
          ],
        },
        {
          heading: "2. Self-Supervised Contrastive Pre-Training",
          body: [
            "Given that expert-annotated clinical datasets rarely exceed a few thousand samples, self-supervised pre-training using masked autoencoding or contrastive pairs (SimCLR / MoCo) on unannotated DICOM archives stabilizes subsequent fine-tuning convergence.",
          ],
          keyTakeaway: "Pre-training on domain-specific unlabeled volumetric data outperforms general ImageNet weights on medical diagnostic tasks.",
        },
        {
          heading: "3. Interpretability & Saliency Maps for Defense",
          body: [
            "Evaluators and medical experts demand algorithmic transparency. Integrating Grad-CAM or integrated gradients visual heatmaps directly into your demo dashboard provides necessary explainability for clinical validity.",
          ],
        },
      ],
    },
    relatedSlugs: ["how-to-select-ieee-base-paper", "structuring-phd-dissertation-guide"],
  },
];

export function getAllBlogs(): BlogPost[] {
  return blogsData;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogsData.find((b) => b.slug === slug);
}

export function getFeaturedBlog(): BlogPost {
  return blogsData.find((b) => b.featured) || blogsData[0];
}

export function getRelatedBlogs(slug: string, limit = 2): BlogPost[] {
  const current = getBlogBySlug(slug);
  if (!current) return blogsData.slice(0, limit);

  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    const related = current.relatedSlugs
      .map((s) => blogsData.find((b) => b.slug === s))
      .filter((b): b is BlogPost => !!b);
    if (related.length > 0) return related.slice(0, limit);
  }

  return blogsData.filter((b) => b.slug !== slug).slice(0, limit);
}
