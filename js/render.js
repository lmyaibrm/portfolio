/* ==========================================================================
   RENDER LOGIC — you shouldn't need to edit this file.
   Reads projects-data.js and builds the home page cards, project page,
   and the footer's auto-generated project index.
   ========================================================================== */

function mediaTag(type, src, className) {
  if (type === "video") {
    return `<video class="${className}" src="${src}" autoplay loop muted playsinline></video>`;
  }
  return `<img class="${className}" src="${src}" alt="" loading="lazy">`;
}

// Builds one work-card's inner HTML (thumb + hover overlay + title/meta).
// Shared by the home page grid and the "more projects" strip on project.html.
function workCardHTML(p) {
  const firstParagraph = (p.sections && p.sections[0] && p.sections[0].paragraphs && p.sections[0].paragraphs[0]) || "";
  const desc = p.cardDescription || firstParagraph || p.meta || "";
  return `
    <a class="work-card" href="project.html?id=${encodeURIComponent(p.id)}">
      <div class="work-thumb">
        ${mediaTag(p.heroType === "video" && p.thumbnail.endsWith(".mp4") ? "video" : "image", p.thumbnail, "")}
        <div class="work-view-btn">View</div>
        <div class="work-overlay">
          <p class="work-overlay-desc">${desc}</p>
        </div>
      </div>
      <p class="work-title">${p.title}</p>
      <p class="work-meta">${p.meta}</p>
    </a>
  `;
}

function renderWorkGrid(containerId, category) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = projects.filter(p => p.category === category);

  if (items.length === 0) {
    el.innerHTML = `<p class="placeholder-note">No projects added to this section yet — add one in js/projects-data.js</p>`;
    return;
  }

  el.innerHTML = items.map(workCardHTML).join("");
}

// Builds the footer "Project Index" list — every project, newest first,
// each linking straight to its project page. Reads the same array as
// everything else, so a new project in projects-data.js shows up here
// automatically with no extra work.
function renderProjectIndex(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (projects.length === 0) {
    el.innerHTML = "";
    return;
  }

  const ordered = [...projects].reverse();
  el.innerHTML = ordered.map(p => `
    <li>
      <span class="footer-index-year">${p.year || ""}</span>
      <a href="project.html?id=${encodeURIComponent(p.id)}">${p.title}</a>
    </li>
  `).join("");
}

function renderProjectPage() {
  const el = document.getElementById("project-root");
  if (!el) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = projects.find(p => p.id === id);

  if (!project) {
    el.innerHTML = `<div class="wrap" style="padding:80px 0;"><p>Project not found. <a href="index.html" class="link-arrow">Back to home</a></p></div>`;
    document.title = "Project not found";
    return;
  }

  document.title = project.title + " — Portfolio";

  const liveLink = project.liveUrl
    ? `<a class="project-live" href="${project.liveUrl}" target="_blank" rel="noopener">View Live Site ↗</a>`
    : "";

  const tagline = project.tagline
    ? `<p class="project-intro">${project.tagline}</p>`
    : "";

  const dateLabel = project.date || project.year;
  const dateBadge = dateLabel
    ? `<div class="project-date-badge">${dateLabel}</div>`
    : "";

  // Builds one "Brief" / "Solution" / "Outcome" / etc. block:
  // heading, paragraph(s), optional arrow-bullet list, optional stacked images.
  function sectionHTML(section, index) {
    const paragraphs = (section.paragraphs || []).map(p => `<p>${p}</p>`).join("");
    const bullets = (section.bullets && section.bullets.length)
      ? `<ul class="section-bullets">${section.bullets.map(b => `<li>${b}</li>`).join("")}</ul>`
      : "";
    const images = (section.images && section.images.length)
      ? `<div class="section-images">${section.images.map(src => mediaTag(src.endsWith(".mp4") || src.endsWith(".webm") ? "video" : "image", src, "")).join("")}</div>`
      : "";
    const num = String(index + 1).padStart(2, "0");

    return `
      <div class="project-details">
        <div class="details-title">(${num}) ${section.title}</div>
        <div>
          ${paragraphs}
          ${bullets}
        </div>
      </div>
      ${images}
    `;
  }

  const sectionsHTML = (project.sections || []).map(sectionHTML).join("");

  // Single "next project" link, wrapping around to the first project
  // once you reach the end of the list — a quick, low-key way to keep
  // someone moving through the site without repeating the full grid.
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const nextProjectLink = (nextProject && nextProject.id !== project.id)
    ? `<span class="next-project-eyebrow">Next Project</span><a class="next-project-link" href="project.html?id=${encodeURIComponent(nextProject.id)}">${nextProject.title} ›</a>`
    : "";

  el.innerHTML = `
    <section class="project-header">
      <div class="wrap">
        <div class="project-header-grid">
          <div>
            <h1 class="project-title">${project.title}</h1>
            ${dateBadge}
            ${tagline}
            ${liveLink}
          </div>
          <div class="project-meta">
            <dl>
              <div><dt>Client</dt><dd>${project.client || project.title}</dd></div>
              <div><dt>Role</dt><dd>${project.role || "—"}</dd></div>
              <div><dt>Service</dt><dd>${project.deliverables || project.type || "—"}</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <div class="wrap">
      <div class="project-hero">
        ${mediaTag(project.heroType, project.heroMedia, "")}
      </div>

      ${sectionsHTML}

      ${nextProjectLink ? `<div class="next-project-row">${nextProjectLink}</div>` : ""}
    </div>

    ${renderMoreProjects(project.id)}

    <div class="wrap">
      <div class="project-nav">
        <a href="index.html">← Back to all projects</a>
      </div>
    </div>
  `;
}

// Shows the other projects as clickable cards at the bottom of a project page
function renderMoreProjects(currentId) {
  const others = projects.filter(p => p.id !== currentId);
  if (others.length === 0) return "";

  return `
    <section class="more-projects">
      <div class="wrap">
        <div class="eyebrow">More Projects</div>
        <div class="works-grid">
          ${others.map(workCardHTML).join("")}
        </div>
      </div>
    </section>
  `;
}

// Mobile nav toggle (shared)
function initNavToggle() {
  const btn = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;
  btn.addEventListener("click", () => links.classList.toggle("open"));
}

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  renderWorkGrid("design-works-grid", "design");
  renderWorkGrid("research-works-grid", "research");
  renderProjectPage();
  renderProjectIndex("footer-project-index");
});
