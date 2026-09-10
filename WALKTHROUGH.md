# Complete 15-Section Homepage Redesign Walkthrough

The **Vectis Research & Engineering Studio** production website has been completely redesigned with a **15-section storytelling flow**, modern **Teal visual identity**, **Plus Jakarta Sans** typography, soft technical grid styling, and official **shadcn/ui** primitives.

---

## 1. Visual Progression Across the 15-Section Flow

````carousel
![01. Hero & Header Section](file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/f6fb4890-d29f-48f1-929b-e601f134d48e/hero_section_1440_1789050277141.png)
<!-- slide -->
![02. Trust Strip & 03. Engineering Categories (2 Flagships)](file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/f6fb4890-d29f-48f1-929b-e601f134d48e/trust_and_categories_1440_1789050280869.png)
<!-- slide -->
![03. Supporting Categories & 04. Why Choose Us](file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/f6fb4890-d29f-48f1-929b-e601f134d48e/categories_and_why_us_1440_1789050285680.png)
<!-- slide -->
![04. 6 Capability Pillars & 05. How We Work (5-Step Process)](file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/f6fb4890-d29f-48f1-929b-e601f134d48e/pillars_and_how_we_work_1440_1789050295047.png)
<!-- slide -->
![06. Engineering Disciplines (Editorial Dark Presentation)](file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/f6fb4890-d29f-48f1-929b-e601f134d48e/how_we_work_and_disciplines_1440_1789050300822.png)
<!-- slide -->
![07. Featured Implementations (4 Editorial Projects)](file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/f6fb4890-d29f-48f1-929b-e601f134d48e/featured_projects_1440_1789050309887.png)
<!-- slide -->
![08. Tools We Work With & 09. Research Support](file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/f6fb4890-d29f-48f1-929b-e601f134d48e/technologies_and_tools_1440_1789050319173.png)
<!-- slide -->
![09. Research Support & 10. Metrics & 11. Testimonials](file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/f6fb4890-d29f-48f1-929b-e601f134d48e/metrics_and_testimonials_1440_1789050331222.png)
<!-- slide -->
![12. Frequently Asked Questions (shadcn Accordion)](file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/f6fb4890-d29f-48f1-929b-e601f134d48e/faq_and_testimonials_1440_1789050336441.png)
<!-- slide -->
![12. FAQ Accordion Open Interaction](file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/f6fb4890-d29f-48f1-929b-e601f134d48e/faq_accordion_expanded_1789050381119.png)
<!-- slide -->
![13. Compact Full-Width CTA Banner & 14. Footer](file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/f6fb4890-d29f-48f1-929b-e601f134d48e/footer_section_1440_1789050357774.png)
<!-- slide -->
![Mobile Viewport (375px) with Slide-Over Navigation](file:///C:/Users/ASUS/.gemini/antigravity-ide/brain/f6fb4890-d29f-48f1-929b-e601f134d48e/mobile_menu_open_375_1789050452697.png)
````

---

## 2. Complete 15-Section Homepage Breakdown

| # | Section Name | Component File | Role & Visual Presentation |
| :--- | :--- | :--- | :--- |
| **01** | **Header** | [Header.tsx](file:///d:/thesis/src/components/layout/Header.tsx) | Sticky navigation with Teal `V.` monogram, navigation links, and desktop CTA. |
| **02** | **Hero** | [Hero.tsx](file:///d:/thesis/src/components/sections/Hero.tsx) | Clean 2-column editorial hero with Plus Jakarta Sans typography, teal headline emphasis, `100% Source Code` overlay badge, lab-verified prototype card, and trust checklist row. |
| **03** | **Trust / Capability Strip** | [TrustCapabilityStrip.tsx](file:///d:/thesis/src/components/sections/TrustCapabilityStrip.tsx) | Compact horizontal band highlighting 6 key domains (*CSE & IT*, *ECE & Embedded*, *EEE & Power*, *Mechanical FEA/CFD*, *AI & ML*, *Research & Thesis*). |
| **04** | **Engineering & Research Categories** | [Expertise.tsx](file:///d:/thesis/src/components/sections/Expertise.tsx) | Asymmetric 2-tier editorial layout: 2 prominent flagship cards (*01 Software & AI*, *05 Research & Thesis*) + 4 supporting cards (*02*, *03*, *04*, *06*). |
| **05** | **Why Choose Us** | [WhyChooseUs.tsx](file:///d:/thesis/src/components/sections/WhyChooseUs.tsx) | 6 capability pillars formatted in a spacious 3-column grid with large numbers and clean dividers (*Working Implementation*, *Technical Documentation*, *Research Guidance*, *1-on-1 Mentoring*, *Simulation & Analysis*, *Defense Prep*). |
| **06** | **How We Work** | [HowWeWork.tsx](file:///d:/thesis/src/components/sections/HowWeWork.tsx) | 5-step horizontal roadmap (*01 Share Requirement* → *02 Scope & Plan* → *03 Development* → *04 Testing & Docs* → *05 Review & Delivery*). |
| **07** | **Engineering Disciplines** | [Branches.tsx](file:///d:/thesis/src/components/sections/Branches.tsx) & [BranchShowcase.tsx](file:///d:/thesis/src/components/sections/BranchShowcase.tsx) | Editorial capabilities presentation on deep teal-navy (`#091E2A`) with vertical discipline selector and typography-first focus areas/toolchains. |
| **08** | **Featured Implementations** | [FeaturedProjects.tsx](file:///d:/thesis/src/components/sections/FeaturedProjects.tsx) | 4 real-world projects in 2-column cards with tags, performance metrics, and a `"View All Project Domains →"` button link. |
| **09** | **Technologies & Tools** | [TechnologiesTools.tsx](file:///d:/thesis/src/components/sections/TechnologiesTools.tsx) | Clean static grid of 16 industry-standard engineering tools (*Python*, *MATLAB*, *Simulink*, *PyTorch*, *ANSYS*, *Vivado*, *Altium*, *ROS2*, etc.). |
| **10** | **Research / Academic Support** | [ResearchSupport.tsx](file:///d:/thesis/src/components/sections/ResearchSupport.tsx) | Asymmetric 2-column layout with dominant laboratory research photo and comprehensive thesis/paper support checklist. |
| **11** | **Results / Credibility Metrics** | [TrustStats.tsx](file:///d:/thesis/src/components/sections/TrustStats.tsx) | High-contrast numerical strip (`500+`, `25+`, `10+`, `95%`) connected directly to isolated data. |
| **12** | **Testimonials / Success Stories** | [Testimonials.tsx](file:///d:/thesis/src/components/sections/Testimonials.tsx) | 3 authentic student & researcher feedback cards with degrees, institutions, and avatars. |
| **13** | **Frequently Asked Questions** | [FaqSection.tsx](file:///d:/thesis/src/components/sections/FaqSection.tsx) | 6 comprehensive questions implemented with the official shadcn `Accordion` primitive. |
| **14** | **Compact Full-Width CTA** | [CtaBanner.tsx](file:///d:/thesis/src/components/sections/CtaBanner.tsx) | Full-container width (1320px) horizontal banner with compact desktop height (~280px), action buttons, and 3-point reassurance checklist. |
| **15** | **Footer** | [Footer.tsx](file:///d:/thesis/src/components/layout/Footer.tsx) | Spacious 5-column layout containing branding, services, disciplines, research guidance, contact information, and legal links. |

---

## 3. Theme System & Official shadcn Primitives Audit

### Theme Tokens Used (`src/app/globals.css`):
- `--background: #FAFAF8` (Warm light neutral canvas)
- `--foreground: #0F172A` (Dark slate/charcoal)
- `--primary: #0D7A75` / `#0D9488` (Vibrant deep teal)
- `--primary-hover: #0A635F`
- `--accent: #F97316` (Warm energetic orange signal, used sparingly)
- `--accent-soft: #FFF7ED`
- `--border: #E2E8F0`
- `--section-dark: #091E2A` (Deep slate / teal-navy)
- `--section-dark-card: rgba(255,255,255,0.05)`
- `--section-dark-border: rgba(255,255,255,0.12)`
- `--highlight: #2DD4BF`

### Official shadcn Primitives Integrated:
- `Accordion` ([src/components/ui/accordion.tsx](file:///d:/thesis/src/components/ui/accordion.tsx))
- `Button` ([src/components/ui/button.tsx](file:///d:/thesis/src/components/ui/button.tsx))
- `Badge` ([src/components/ui/badge.tsx](file:///d:/thesis/src/components/ui/badge.tsx))
- `Card` ([src/components/ui/card.tsx](file:///d:/thesis/src/components/ui/card.tsx))
- `Sheet` ([src/components/ui/sheet.tsx](file:///d:/thesis/src/components/ui/sheet.tsx))
- `Separator` ([src/components/ui/separator.tsx](file:///d:/thesis/src/components/ui/separator.tsx))
- `Tabs` ([src/components/ui/tabs.tsx](file:///d:/thesis/src/components/ui/tabs.tsx))

---

## 4. Verification Suite Results

| Test Suite | Command | Result |
| :--- | :--- | :--- |
| **ESLint** | `npm run lint` | **0 errors, 0 warnings** |
| **TypeScript** | `npx tsc --noEmit` | **Passed cleanly** |
| **Production Build** | `npm run build` | **Prerendered in 2.9s** |
| **Hardcoded Colors Audit** | Grep regex across all `.tsx` | **0 matches (100% theme-driven)** |
| **Browser Inspection** | Playwright / Headless Chrome | **Verified across 1440px, 1280px, 768px, 375px** |
