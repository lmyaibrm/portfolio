/* ==========================================================================
   PROJECT DATA
   ==========================================================================
   This is the ONLY file you need to edit to add a new project.

   HOW TO ADD A NEW PROJECT:
   1. Create a folder inside /images/ named after your project, e.g. /images/my-new-project/
   2. Drop your thumbnail, hero, and section images/gifs/videos in that folder
   3. Copy one of the objects below, paste it into the "projects" array,
      and edit every field. Give it a unique "id" (no spaces, lowercase-with-dashes).
   4. Save the file and push to GitHub — the home page and project page
      update automatically. No other file needs to change.

   FIELD NOTES:
   - category: "design" or "research"  (controls which section it appears in)
   - client: OPTIONAL. Shown in the "Client" row on the project page. If left
     out, it just falls back to using the project's own title.
   - date: OPTIONAL. Shown in the small rounded badge under the project title
     (e.g. "DEC 2025"). If left out, falls back to showing the "year" field.
   - cardDescription: OPTIONAL. The text that fades in over the thumbnail on
     the home page when you hover a project card. If left out, falls back to
     the "intro" paragraph, then the "meta" line.
   - thumbnail: the image shown on the home page grid card
   - heroMedia: the big banner image/video at the top of the project page
   - heroType: "image" or "video" (use "video" for mp4/webm files)
   - tagline: OPTIONAL. A short one- or two-sentence line shown right under the
     project title, above the "View Live Site" link. Leave it out (or delete
     the line) if you don't want one — the page will just skip it.

   - sections: this is where the actual case-study writing goes. It's an
     array, so you can add as many labeled sections as the project needs —
     "Brief", "Solution", "Outcome", "Process", whatever fits. Each one is:
       {
         title: "Brief",                     // the heading shown for this section
         paragraphs: ["First paragraph.", "Second paragraph."],
         bullets: ["Point one", "Point two"], // OPTIONAL — shown as a
                                               // scannable arrow-bullet list,
                                               // good for listing specific
                                               // responsibilities/deliverables
         images: ["images/x/1.jpg", "images/x/2.gif"] // OPTIONAL — shown full
                                               // width, stacked, right under
                                               // this section's text
       }
     Leave "bullets" or "images" out of a section entirely if you don't need
     them — the page just skips whatever isn't there. Add as many sections
     as you want; each renders in order, text first then its own images,
     which keeps long case studies easy to read instead of one big text
     dump followed by one giant image gallery.
   ========================================================================== */

const projects = [
  {
    id: "sisteragency",
    category: "design",
    title: "SisterAgency.ai",
    client: "SisterAgency",
    date: "DEC 30, 2025",
    cardDescription: "Brand and product design for SisterAgency.ai, an AI-powered SaaS platform built to streamline operations and creative workflows for social media marketing agencies — exhibited at Web Summit Doha 2025.",
    meta: "Brand Identity · UX/UI Design · Product Design",
    thumbnail: "images/sisteragency/thumb.jpg",
    liveUrl: "https://www.instagram.com/sisteragency.ai/",
    tagline: "As designer and researcher on SisterAgency.ai, I worked across brand identity and UX/UI — from early research and positioning through to the full visual identity, product interface and launch collateral, working alongside a UX designer on the platform's core dashboard.",
    role: "Brand & UI Designer, UX Researcher",
    year: "2025",
    type: "Branding · UI/UX · Social",
    deliverables: "Brand Identity · UX Research · Pitch Deck · Social Design",
    heroMedia: "images/sisteragency/hero.jpg",
    sections: [
      {
        title: "Brief",
        paragraphs: [
          "Before any visual identity came together, the work started with understanding an app-wide audience of researchers and analysts: we mapped out how conversations happen, and used that to inform every decision that followed.",
          "It was important to keep the brand feeling accessible along the way — the goal was a design system that carried personality without ever feeling heavy, and could be extended far beyond the launch scope by the team internally."
        ],
        images: [
          "images/sisteragency/approach.jpg",
          "images/sisteragency/problems-solutions.jpg",
          "images/sisteragency/personas.jpg"
        ]
      },
      {
        title: "Solution",
        paragraphs: [
          "From there, the identity came to life across every touchpoint. I developed the wordmark, full brand system, colour palette and typography, along with the app icon and brand collateral, working closely with the platform's UX designer on the AI agent marketplace dashboard."
        ],
        bullets: [
          "Developed the wordmark, colour system, and typography for the full brand identity",
          "Designed the app icon, brand collateral, and t-shirt/merch design",
          "Led design on the pitch deck and a full landing page build",
          "Created social content for Instagram and LinkedIn, plus a product reel",
          "Designed UI for the AI agent marketplace dashboard alongside the platform's UX designer"
        ],
        images: [
          "images/sisteragency/marketing-1.jpg",
          "images/sisteragency/wordmark.gif",
          "images/sisteragency/icon.gif",
          "images/sisteragency/collage.png",
          "images/sisteragency/pres2.png",
          "images/sisteragency/shirt.png",
          "images/sisteragency/pres1.png",
          "images/sisteragency/final-site.jpg",
          "images/sisteragency/social.gif",
          "images/sisteragency/link.png",
          "images/sisteragency/ui1.png",
          "images/sisteragency/t.png"
        ]
      },
      {
        title: "Outcome",
        paragraphs: [
          "The project went on to be exhibited at Web Summit Doha 2025 — a full-circle moment for a brand built from the ground up, research to launch."
        ]
      }
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
    sections: [
      {
        title: "Brief",
        paragraphs: [
          "A full campaign identity for Charity Week Ireland 2026, uniting the community to serve the world's most vulnerable through a coordinated push across universities and social channels."
        ]
      },
      {
        title: "Solution",
        paragraphs: [
          "The brief called for something bold enough to cut through a crowded social feed, while staying flexible enough to adapt across dozens of individual society accounts running their own local events under one shared campaign. I built a small system of colour, type, and iconography that any volunteer team could apply themselves without a designer on hand for every post."
        ],
        images: [
          "images/charity-week/post-1.jpg",
          "images/charity-week/post-2.jpg",
          "images/charity-week/post-3.jpg"
        ]
      }
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
    sections: [
      {
        title: "Brief",
        paragraphs: [
          "A minimal portfolio site for the Uqool Podcast — clean, confident, and built to let the episode artwork do the talking."
        ]
      },
      {
        title: "Solution",
        paragraphs: [
          "Kept the interface intentionally quiet so the show's own visual identity — bright gradients, bold character illustration — could carry the page without competing with UI chrome."
        ],
        images: ["images/uqool/detail-1.jpg"]
      }
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
    sections: [
      {
        title: "Brief",
        paragraphs: [
          "Revana Studio needed a site that felt like an extension of their own creative agency work — architectural, considered, and unapologetically editorial."
        ]
      },
      {
        title: "Solution",
        paragraphs: [
          "The layout borrows from print design conventions — generous margins, a strict grid, large type moments — to give the agency's project photography room to breathe."
        ],
        images: ["images/uqud/detail-1.jpg"]
      }
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
    sections: [
      {
        title: "Brief",
        paragraphs: [
          "UI concepts for UCC ISoc's members app, focused on making event sign-up effortless during Freshers' Week."
        ]
      }
    ]
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
    sections: [
      {
        title: "Brief",
        paragraphs: [
          "Apparel and merchandise design for the Girls India initiative."
        ]
      }
    ]
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
    sections: [
      {
        title: "Brief",
        paragraphs: [
          "Screen mockup and presentation design for eo group."
        ]
      }
    ]
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
    sections: [
      {
        title: "Brief",
        paragraphs: [
          "Replace this entry with your first research or coding project — same fields as a design project, just filed under the research category."
        ]
      },
      {
        title: "Solution",
        paragraphs: [
          "Add your write-up here: the question you investigated, your method, and what you found."
        ]
      }
    ]
  }
];
