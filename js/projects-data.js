/* ==========================================================================
   PROJECT DATA
   ==========================================================================
   This is the ONLY file you need to edit to add a new project.

   HOW TO ADD A NEW PROJECT:
   1. Create a folder inside /images/ named after your project, e.g. /images/my-new-project/
   2. Drop your thumbnail, hero, and gallery images/gifs/videos in that folder
   3. Copy one of the objects below, paste it into the "projects" array,
      and edit every field. Give it a unique "id" (no spaces, lowercase-with-dashes).
   4. Save the file and push to GitHub — the home page and project page
      update automatically. No other file needs to change.

   FIELD NOTES:
   - category: "design" or "research"  (controls which section it appears in)
   - thumbnail: the image shown on the home page grid card
   - heroMedia: the big banner image/video at the top of the project page
   - heroType: "image" or "video" (use "video" for mp4/webm files)
   - tagline: OPTIONAL. A short one- or two-sentence line shown right under the
     project title, above the "Visit Site" link. Leave it out (or delete the
     line) if you don't want one — the page will just skip it.
   - intro / body: the two paragraphs shown under the "Work Details" title,
     under the hero image.
   - gallery: an array of extra images/gifs shown after the "Work Details" text.
     Each item can be { type: "image", src: "..." } or { type: "video", src: "..." }
   - section2Title / section2Body / section2Gallery: OPTIONAL second section,
     shown after the first gallery — same layout as "Work Details" (a title,
     a paragraph, then more images). Give section2Title a name (e.g. "Outcome",
     "Process", "Results") to make this section appear at all; leave it out
     entirely to skip it, just like the old projects below do.
   ========================================================================== */

const projects = [
  {
    id: "sisteragency",
    category: "design",
    title: "SisterAgency.ai",
    meta: "Brand Identity · UX/UI Design · Product Design",
    thumbnail: "images/sisteragency/thumb.jpg",
    liveUrl: "https://www.instagram.com/sisteragency.ai/",
    tagline: "As designer and researcher on SisterAgency.ai, I worked across brand identity and UX/UI — from early research and positioning through to the full visual identity, product interface and launch collateral, working alongside a UX designer on the platform's core dashboard.",
    role: "Brand & UI Designer, UX Researcher",
    year: "2025",
    type: "Branding · UI/UX · Social",
    deliverables: "Brand Identity · UX Research · Pitch Deck · Social Design",
    heroMedia: "images/sisteragency/hero.jpg",
    intro: "Before any visual identity came together, the work started with understanding an app-wide audience of researchers and analysts: we mapped out how conversations happen, and used that to inform every decision that followed.",
    body: "It was important to keep the brand feeling accessible along the way — the goal was a design system that carried personality without ever feeling heavy, and could be extended far beyond the launch scope by the team internally.",
    gallery: [
      { type: "image", src: "images/sisteragency/approach.jpg" },
      { type: "image", src: "images/sisteragency/problems-solutions.jpg" },
      { type: "image", src: "images/sisteragency/personas.jpg" }
    ],
    section2Title: "Building the Brand",
    section2Body: "From there, the identity came to life across every touchpoint. I developed the wordmark, full brand system, colour palette and typography, along with the app icon and brand collateral — from t-shirt design to a full landing page. I also led design on the pitch deck, social content for Instagram and LinkedIn, and a product reel, alongside UI for the AI agent marketplace dashboard, working closely with the platform's UX designer. The project went on to be exhibited at Web Summit Doha 2025 — a full-circle moment for a brand built from the ground up, research to launch.",
    section2Gallery: [
      { type: "image", src: "images/sisteragency/marketing-1.jpg" },
      { type: "image", src: "images/sisteragency/wordmark.gif" },
      { type: "image", src: "images/sisteragency/icon.gif" },
      { type: "image", src: "images/sisteragency/collage.png" },
      { type: "image", src: "images/sisteragency/pres2.png" },
      { type: "image", src: "images/sisteragency/shirt.png" },
      { type: "image", src: "images/sisteragency/pres1.png" },
      { type: "image", src: "images/sisteragency/final-site.jpg" },
      { type: "image", src: "images/sisteragency/social.gif" },
      { type: "image", src: "images/sisteragency/link.png" },
      { type: "image", src: "images/sisteragency/ui1.png" },
      { type: "image", src: "images/sisteragency/t.png" }
    ]
  },
  {
    id: "charity-week-ireland",
    category: "design",
    title: "Charity Week Ireland 2026",
    meta: "Marketing, Brand Strategy, Social Media Design",
    thumbnail: "images/charity-week/thumb.jpg",
    liveUrl: "",
    role: "Graphic & Social Designer",
    year: "2026",
    type: "Marketing · Brand Strategy",
    deliverables: "Social Media Design",
    heroType: "image",
    heroMedia: "images/charity-week/hero.jpg",
    intro: "A full campaign identity for Charity Week Ireland 2026, uniting the community to serve the world's most vulnerable through a coordinated push across universities and social channels.",
    body: "The brief called for something bold enough to cut through a crowded social feed, while staying flexible enough to adapt across dozens of individual society accounts running their own local events under one shared campaign. I built a small system of colour, type, and iconography that any volunteer team could apply themselves without a designer on hand for every post.",
    gallery: [
      { type: "image", src: "images/charity-week/post-1.jpg" },
      { type: "image", src: "images/charity-week/post-2.jpg" },
      { type: "image", src: "images/charity-week/post-3.jpg" }
    ]
  },
  {
    id: "uqool",
    category: "design",
    title: "Uqool",
    meta: "Minimal Portfolio Site",
    thumbnail: "images/uqool/thumb.jpg",
    liveUrl: "",
    role: "Designer",
    year: "2025",
    type: "Web Design",
    deliverables: "Portfolio Site",
    heroType: "image",
    heroMedia: "images/uqool/hero.jpg",
    intro: "A minimal portfolio site for the Uqool Podcast — clean, confident, and built to let the episode artwork do the talking.",
    body: "Kept the interface intentionally quiet so the show's own visual identity — bright gradients, bold character illustration — could carry the page without competing with UI chrome.",
    gallery: [
      { type: "image", src: "images/uqool/detail-1.jpg" }
    ]
  },
  {
    id: "uqud-revana",
    category: "design",
    title: "UQUD",
    meta: "Creative Agency Site",
    thumbnail: "images/uqud/thumb.jpg",
    liveUrl: "",
    role: "Web Designer",
    year: "2025",
    type: "Web Design · Creative Direction",
    deliverables: "Full Site Build",
    heroType: "image",
    heroMedia: "images/uqud/hero.jpg",
    intro: "Revana Studio needed a site that felt like an extension of their own creative agency work — architectural, considered, and unapologetically editorial.",
    body: "The layout borrows from print design conventions — generous margins, a strict grid, large type moments — to give the agency's project photography room to breathe.",
    gallery: [
      { type: "image", src: "images/uqud/detail-1.jpg" }
    ]
  },
  {
    id: "ucc-isoc",
    category: "design",
    title: "UCC ISoc",
    meta: "vgblqn",
    thumbnail: "images/ucc-isoc/thumb.jpg",
    liveUrl: "",
    role: "Designer",
    year: "2024",
    type: "App Design",
    deliverables: "UI Concepts",
    heroType: "image",
    heroMedia: "images/ucc-isoc/hero.jpg",
    intro: "UI concepts for UCC ISoc's members app, focused on making event sign-up effortless during Freshers' Week.",
    body: "",
    gallery: []
  },
  {
    id: "girls-india",
    category: "design",
    title: "Girls India",
    meta: "b",
    thumbnail: "images/girls-india/thumb.jpg",
    liveUrl: "",
    role: "Designer",
    year: "2024",
    type: "Merchandise Design",
    deliverables: "Apparel Design",
    heroType: "image",
    heroMedia: "images/girls-india/hero.jpg",
    intro: "Apparel and merchandise design for the Girls India initiative.",
    body: "",
    gallery: []
  },
  {
    id: "eo-group",
    category: "design",
    title: "eo group",
    meta: "b",
    thumbnail: "images/eo-group/thumb.jpg",
    liveUrl: "",
    role: "Designer",
    year: "2024",
    type: "Mockup Design",
    deliverables: "Laptop Screen Mockup",
    heroType: "image",
    heroMedia: "images/eo-group/hero.jpg",
    intro: "Screen mockup and presentation design for eo group.",
    body: "",
    gallery: []
  },

  /* ------------------------------------------------------------------
     RESEARCH / CODING PROJECTS — same structure, category: "research"
     ------------------------------------------------------------------ */
  {
    id: "example-research-project",
    category: "research",
    title: "Example Research Project",
    meta: "Data Analysis · Python",
    thumbnail: "images/placeholders/research-thumb.svg",
    liveUrl: "",
    role: "Researcher, Developer",
    year: "2026",
    type: "Research · Coding",
    deliverables: "Paper & Codebase",
    heroType: "image",
    heroMedia: "images/placeholders/research-thumb.svg",
    intro: "Replace this entry with your first research or coding project — same fields as a design project, just filed under the research category.",
    body: "Add your write-up here: the question you investigated, your method, and what you found.",
    gallery: []
  }
];
