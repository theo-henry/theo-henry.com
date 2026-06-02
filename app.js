const data = window.portfolioData;

const sectionRenderers = {
  text: renderTextSection,
  cards: renderCardsSection,
  timeline: renderTimelineSection,
  list: renderListSection,
  testimonials: renderTestimonialsSection,
  contact: renderContactSection,
};

const app = document.querySelector("#app");

if (!data) {
  app.textContent = "Missing portfolioData. Check portfolio-data.js.";
} else {
  validateSectionIds(data.sections);
  renderPage(data);
}

function renderPage({ profile, sections }) {
  document.title = `${profile.name} | Portfolio`;

  app.append(
    renderAside(profile),
    el("main", { className: "site-main" }, [
      renderHero(profile),
      ...sections.map(renderSection),
    ]),
    renderBottomNav(sections),
  );
}

function renderAside(profile) {
  return el("aside", { className: "profile-panel", "aria-label": "Profile" }, [
    el("div", { className: "profile-card" }, [
      el("img", {
        className: "avatar",
        src: profile.avatar,
        alt: `${profile.name} portrait`,
      }),
      el("div", { className: "profile-title" }, [
        el("h1", {}, profile.name),
        el("p", { className: "muted" }, profile.pronouns),
      ]),
      el("p", { className: "profile-headline" }, profile.headline),
      renderLinkList("Contact", profile.links),
      renderChipGroup("Skills", profile.skills),
      renderChipGroup("Languages", profile.languages),
    ]),
  ]);
}

function renderHero(profile) {
  return el("section", { className: "hero section-block", id: "top" }, [
    el("p", { className: "eyebrow" }, profile.location),
    el("h2", {}, profile.name),
    el("p", { className: "hero-copy" }, profile.headline),
    el("div", { className: "actions" }, [
      el("a", { className: "button primary", href: `mailto:${profile.email}` }, "Email me"),
      profile.cv
        ? el("a", { className: "button", href: profile.cv, target: "_blank", rel: "noopener" }, "View CV")
        : null,
    ]),
  ]);
}

function renderSection(section) {
  const renderer = sectionRenderers[section.type] || renderTextSection;

  return el("section", { className: "section-block", id: section.id }, [
    el("div", { className: "section-heading" }, [
      el("p", { className: "eyebrow" }, section.title),
      section.description ? el("p", { className: "muted" }, section.description) : null,
    ]),
    renderer(section),
  ]);
}

function renderTextSection(section) {
  return el(
    "div",
    { className: "text-stack" },
    (section.paragraphs || []).map((paragraph) => el("p", {}, paragraph)),
  );
}

function renderCardsSection(section) {
  return el(
    "div",
    { className: "card-grid" },
    (section.items || []).map((item) =>
      el("article", { className: "content-card" }, [
        el("div", { className: "card-meta" }, [
          item.date ? el("span", {}, item.date) : null,
          item.category ? el("span", {}, item.category) : null,
        ]),
        el("h3", {}, item.title),
        item.role ? el("p", { className: "muted" }, item.role) : null,
        item.description ? el("p", {}, item.description) : null,
        renderItemLinks(item.links),
      ]),
    ),
  );
}

function renderTimelineSection(section) {
  return el(
    "div",
    { className: "timeline" },
    (section.items || []).map((item) =>
      el("article", { className: "timeline-item" }, [
        el("div", { className: "timeline-date" }, item.period || ""),
        el("div", { className: "timeline-body" }, [
          el("h3", {}, item.title),
          el("p", { className: "muted" }, [item.organization, item.location].filter(Boolean).join(" | ")),
          item.description ? el("p", {}, item.description) : null,
          renderItemLinks(item.links),
        ]),
      ]),
    ),
  );
}

function renderListSection(section) {
  return el(
    "div",
    { className: "simple-list" },
    (section.items || []).map((item) =>
      el("article", { className: "list-item" }, [
        el("h3", {}, item.title),
        item.meta ? el("p", { className: "muted" }, item.meta) : null,
        item.description ? el("p", {}, item.description) : null,
      ]),
    ),
  );
}

function renderTestimonialsSection(section) {
  return el(
    "div",
    { className: "testimonial-grid" },
    (section.items || []).map((item) =>
      el("figure", { className: "testimonial" }, [
        el("blockquote", {}, item.quote),
        el("figcaption", {}, [
          el("strong", {}, item.name),
          item.role ? el("span", {}, item.role) : null,
        ]),
      ]),
    ),
  );
}

function renderContactSection(section) {
  return renderLinkList(null, section.items || [], "contact-grid");
}

function renderBottomNav(sections) {
  return el("nav", { className: "bottom-nav", "aria-label": "Section navigation" }, [
    el("a", { href: "#top", "aria-label": "Top" }, "Top"),
    ...sections.map((section) => el("a", { href: `#${section.id}` }, section.title)),
  ]);
}

function renderChipGroup(title, items = []) {
  if (!items.length) return null;

  return el("section", { className: "sidebar-section" }, [
    el("h2", {}, title),
    el(
      "div",
      { className: "chips" },
      items.map((item) => el("span", { className: "chip" }, item)),
    ),
  ]);
}

function renderLinkList(title, links = [], className = "link-list") {
  if (!links.length) return null;

  return el("section", { className: title ? "sidebar-section" : "" }, [
    title ? el("h2", {}, title) : null,
    el(
      "div",
      { className },
      links.map((link) =>
        el("a", { href: link.href, target: link.href?.startsWith("http") ? "_blank" : null, rel: "noopener" }, [
          el("span", {}, link.label),
          el("strong", {}, link.value),
        ]),
      ),
    ),
  ]);
}

function renderItemLinks(links = []) {
  if (!links.length) return null;

  return el(
    "div",
    { className: "item-links" },
    links.map((link) =>
      el("a", { href: link.href, target: "_blank", rel: "noopener" }, link.label),
    ),
  );
}

function validateSectionIds(sections = []) {
  const seen = new Set();

  sections.forEach((section) => {
    if (!section.id) throw new Error("Each section needs an id.");
    if (seen.has(section.id)) throw new Error(`Duplicate section id: ${section.id}`);
    seen.add(section.id);
  });
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);

  Object.entries(attrs || {}).forEach(([key, value]) => {
    if (value === null || value === undefined || value === false) return;
    if (key === "className") {
      node.className = value;
    } else if (key in node) {
      node[key] = value;
    } else {
      node.setAttribute(key, value);
    }
  });

  appendChildren(node, children);
  return node;
}

function appendChildren(parent, children) {
  const childList = Array.isArray(children) ? children : [children];

  childList.flat().forEach((child) => {
    if (child === null || child === undefined || child === false) return;
    parent.append(child instanceof Node ? child : document.createTextNode(child));
  });
}
