/* ==========================================================================
   RENDER LOGIC — you shouldn't need to edit this file.
   Reads projects-data.js and builds the home page cards + project page.
   ========================================================================== */

function mediaTag(type, src, className) {
  if (type === "video") {
    return `<video class="${className}" src="${src}" autoplay loop muted playsinline></video>`;
  }
  return `<img class="${className}" src="${src}" alt="" loading="lazy">`;
}

function renderWorkGrid(containerId, category) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = projects.filter(p => p.category === category);

  if (items.length === 0) {
    el.innerHTML = `<p class="placeholder-note">No projects added to this section yet — add one in js/projects-data.js</p>`;
    return;
  }

  el.innerHTML = items.map(p => `
    <a class="work-card" href="project.html?id=${encodeURIComponent(p.id)}">
      <div class="work-thumb">
        ${mediaTag(p.heroType === "video" && p.thumbnail.endsWith(".mp4") ? "video" : "image", p.thumbnail, "")}
      </div>
      <p class="work-title">${p.title}</p>
      <p class="work-meta">${p.meta}</p>
    </a>
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
    ? `<a class="project-live" href="${project.liveUrl}" target="_blank" rel="noopener">Visit Site ↗</a>`
    : "";

  const tagline = project.tagline
    ? `<p class="project-intro">${project.tagline}</p>`
    : "";

  const secondSection = project.section2Title ? `
      <div class="project-details">
        <div class="details-title">${project.section2Title}</div>
        <div>
          <p>${project.section2Body || ""}</p>
        </div>
      </div>

      <div class="project-gallery">
        ${(project.section2Gallery || []).map(g => mediaTag(g.type, g.src, "")).join("")}
      </div>
  ` : "";

  el.innerHTML = `
    <section class="project-header">
      <div class="wrap">
        <div class="project-header-grid">
          <div>
            <h1 class="project-title">${project.title}</h1>
            ${tagline}
            ${liveLink}
          </div>
          <div class="project-meta">
            <dl>
              <div><dt>Role</dt><dd>${project.role || "—"}</dd></div>
              <div><dt>Year</dt><dd>${project.year || "—"}</dd></div>
              <div><dt>Type</dt><dd>${project.type || "—"}</dd></div>
              <div><dt>Deliverables</dt><dd>${project.deliverables || "—"}</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <div class="wrap">
      <div class="project-hero">
        ${mediaTag(project.heroType, project.heroMedia, "")}
      </div>

      <div class="project-details">
        <div class="details-title">Work Details</div>
        <div>
          <p>${project.intro}</p>
          ${project.body ? `<p>${project.body}</p>` : ""}
        </div>
      </div>

      <div class="project-gallery">
        ${project.gallery.map(g => mediaTag(g.type, g.src, "")).join("")}
      </div>
      ${secondSection}
      <div class="project-nav">
        <a href="index.html">← Back to all projects</a>
      </div>
    </div>
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
});
