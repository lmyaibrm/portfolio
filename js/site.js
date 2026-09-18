/* ==========================================================================
   SITE-WIDE BEHAVIOR — scroll animation + About accordion.
   Runs on both index.html and project.html. You shouldn't need to edit this.
   ========================================================================== */

// ---- Scroll-appear animation --------------------------------------------
// Tags a broad set of elements with .reveal, then fades/slides them in
// the first time they scroll into view. Runs after render.js has already
// built the project cards, so dynamically-created cards get it too.
function initScrollReveal() {
  const selectors = [
    ".hero-copy", ".hero-image",
    ".manifesto-text",
    ".works-head", ".work-card",
    ".services-head", ".service-row",
    ".about-name", ".about-bio", ".timeline-row",
    ".testimonials-head", ".testi-card",
    ".footer-title", ".footer-cta", ".footer-index-list li",
    ".project-header-grid",
    ".project-hero",
    ".project-details",
    ".section-images img", ".section-images video",
    ".next-project-link"
  ];

  const els = document.querySelectorAll(selectors.join(","));
  if (els.length === 0) return;

  els.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  els.forEach(el => observer.observe(el));
}

// ---- About section accordion --------------------------------------------
function initTimelineAccordion() {
  const rows = document.querySelectorAll(".timeline-row");
  rows.forEach(row => {
    const head = row.querySelector(".timeline-row-head");
    if (!head) return;
    head.addEventListener("click", () => {
      row.classList.toggle("open");
    });
  });
}

// ---- Custom cursor ---------------------------------------------------
// Skips entirely on touch devices (no mouse to track).
function initCustomCursor() {
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (isTouch) return;

  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });

  // Ring trails slightly behind the dot for a soft "lag" feel
  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverTargets = "a, button, .work-card, .timeline-row-head";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.add("cursor-hover");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.remove("cursor-hover");
    }
  });
}

// ---- Scroll progress bar ----------------------------------------------
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + "%";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTimelineAccordion();
  initCustomCursor();
  initScrollProgress();

  // Project cards on project.html (More Projects section) are rendered
  // by render.js on the same DOMContentLoaded tick, and script tags run
  // in order, so by the time this runs the cards already exist.
  initScrollReveal();
});
