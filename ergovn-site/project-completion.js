(() => {
  const projects = [
    {
      id: "netcompany",
      name: "Netcompany Vietnam",
      scope: "System Furniture / Meeting Room / Glass Partition Solution",
      partner: "HolmrisB8, Spiralis",
      thirdLabel: "General contractor",
      thirdValue: "Dandelion",
      photos: [
        ["Open office", "Hero / full workspace", "/project-photos/Netcompany/web/01-hero.jpg"],
        ["Arrival", "Reception view", "/project-photos/Netcompany/web/02-arrival.jpg"],
        ["Phonebooths", "Collaboration corridor", "/project-photos/Netcompany/web/03-phonebooths.jpg"],
        ["Meeting room", "Conference setting", "/project-photos/Netcompany/web/04-meeting-room.jpg"],
        ["Focus room", "City-side setting", "/project-photos/Netcompany/web/05-city-side-room.jpg"],
        ["Open office", "Workspace view", "/project-photos/Netcompany/web/06-workspace.jpg"],
      ],
    },
    {
      id: "one-tech-stop-hcm",
      name: "One Tech Stop (HCM)",
      scope: "Workplace Furniture / Meeting Room / Collaboration",
      partner: "Ergovn project delivery",
      thirdLabel: "Location",
      thirdValue: "Ho Chi Minh City",
      photos: [
        ["Workplace", "Hero / full arrival view", "/project-photos/one-tech-stop-hcm/web/01-hero.jpg"],
        ["Collaboration", "Open team setting", "/project-photos/one-tech-stop-hcm/web/02-collaboration.jpg"],
        ["Meeting room", "Formal setting", "/project-photos/one-tech-stop-hcm/web/03-meeting-room.jpg"],
        ["Focus work", "Window-side setting", "/project-photos/one-tech-stop-hcm/web/04-focus-work.jpg"],
        ["Boardroom", "Meeting setting", "/project-photos/one-tech-stop-hcm/web/05-boardroom.jpg"],
        ["Floor finish", "Project detail", "/project-photos/one-tech-stop-hcm/web/06-carpet-detail.jpg"],
      ],
    },
    {
      id: "one-tech-stop-da-nang",
      name: "One Tech Stop (DN)",
      scope: "Loose Furniture / Framery Phonebooth",
      partner: "Ergovn project delivery",
      thirdLabel: "Location",
      thirdValue: "Da Nang",
      photos: [
        ["Framery phonebooths", "Hero / full phonebooth setting", "/project-photos/ots-da-nang/web/01-hero.jpg"],
        ["Training room", "Loose furniture setting", "/project-photos/ots-da-nang/web/02-training-room.jpg"],
        ["Lounge", "Modular seating", "/project-photos/ots-da-nang/web/03-lounge.jpg"],
        ["Framery phonebooth", "Focus setting", "/project-photos/ots-da-nang/web/04-framery-phonebooth.jpg"],
        ["Lounge", "Sofa detail", "/project-photos/ots-da-nang/web/05-sofa-detail.jpg"],
        ["Cafe seating", "Collaborative setting", "/project-photos/ots-da-nang/web/06-cafe-seating.jpg"],
      ],
    },
    {
      id: "sky-mavis",
      name: "Sky Mavis",
      scope: "System Furniture / Meeting Room / Glass Partition",
      partner: "Ergovn project delivery",
      thirdLabel: "Location",
      thirdValue: "Ho Chi Minh City",
      photos: [
        ["Open office", "Hero / full workspace", "/project-photos/sky-mavis/web/01-hero.jpg"],
        ["Workstations", "Window-side view", "/project-photos/sky-mavis/web/02-workstations.jpg"],
        ["Collaboration", "High-table setting", "/project-photos/sky-mavis/web/03-collaboration.jpg"],
        ["Glass partition", "Meeting-room entry", "/project-photos/sky-mavis/web/04-glass-partition.jpg"],
        ["Meeting room", "Enclosed setting", "/project-photos/sky-mavis/web/05-meeting-room.jpg"],
        ["Lounge", "Informal setting", "/project-photos/sky-mavis/web/06-lounge.jpg"],
      ],
    },
    {
      id: "famous-fashion-brand",
      name: "Famous Fashion Brand",
      scope: "System Furniture / Phonebooth / Open Office",
      partner: "Ergovn project delivery",
      thirdLabel: "Location",
      thirdValue: "Vietnam",
      photos: [
        ["Open office", "Hero / full workspace", "/project-photos/famous-fashion-brand/web/01-hero.jpg"],
        ["Workstations", "Team setting", "/project-photos/famous-fashion-brand/web/02-workstations.jpg"],
        ["Open office", "Workspace view", "/project-photos/famous-fashion-brand/web/03-workspace.jpg"],
        ["Phonebooth", "Focus setting", "/project-photos/famous-fashion-brand/web/04-phonebooth.jpg"],
        ["Planters", "Workspace detail", "/project-photos/famous-fashion-brand/web/05-planters.jpg"],
        ["Open office", "Front view", "/project-photos/famous-fashion-brand/web/06-open-office.jpg"],
      ],
    },
  ];

  function photoMarkup(photo, index, projectName) {
    const [name, , src] = photo;
    return `
      <div class="completion-photo${src ? " has-image" : ""}"${src ? ` role="button" tabindex="0" data-lightbox-src="${src}" data-lightbox-alt="${projectName} — ${name}" aria-label="View ${projectName} — ${name} large"` : ""}>
        ${src ? `<img src="${src}" alt="${projectName} — ${name}" loading="lazy">` : ""}
      </div>`;
  }

  function createLightbox() {
    const lightbox = document.createElement("div");
    lightbox.className = "completion-lightbox";
    lightbox.hidden = true;
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.innerHTML = `
      <button class="completion-lightbox-backdrop" type="button" aria-label="Close large photo"></button>
      <figure class="completion-lightbox-frame">
        <img src="" alt="">
        <figcaption></figcaption>
      </figure>
      <button class="completion-lightbox-close" type="button">Close</button>`;
    document.body.appendChild(lightbox);

    const image = lightbox.querySelector("img");
    const caption = lightbox.querySelector("figcaption");
    const closeButton = lightbox.querySelector(".completion-lightbox-close");

    function close() {
      lightbox.hidden = true;
      image.removeAttribute("src");
      document.body.classList.remove("completion-lightbox-open");
    }

    lightbox.querySelector(".completion-lightbox-backdrop").addEventListener("click", close);
    closeButton.addEventListener("click", close);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !lightbox.hidden) close();
    });

    return (src, alt) => {
      image.src = src;
      image.alt = alt;
      caption.textContent = alt;
      lightbox.hidden = false;
      document.body.classList.add("completion-lightbox-open");
      closeButton.focus();
    };
  }

  function paneMarkup(project, index) {
    return `
      <article class="completion-pane" id="completion-${project.id}" role="tabpanel" aria-labelledby="completion-tab-${project.id}"${index ? " hidden" : ""}>
        <div class="completion-gallery" aria-label="${project.name} project photo gallery">
          ${project.photos.map((photo, photoIndex) => photoMarkup(photo, photoIndex, project.name)).join("")}
          <dl class="completion-meta">
            <div><dt>Scope</dt><dd>${project.scope}</dd></div>
            <div><dt>Partner</dt><dd>${project.partner}</dd></div>
            <div><dt>${project.thirdLabel}</dt><dd>${project.thirdValue}</dd></div>
          </dl>
        </div>
      </article>`;
  }

  function updateFooterNote() {
    const footerNote = document.querySelector(".footer-shop span:last-child");
    if (!footerNote) return false;

    const replacement = "- a brand of Ergovn";
    if (footerNote.textContent !== replacement) footerNote.textContent = replacement;
    return true;
  }

  function mountSocialLinks() {
    const contactBlock = document.querySelector(".footer > div:nth-child(2)");
    if (!contactBlock) return false;
    if (contactBlock.querySelector(".footer-social")) return true;

    const socialLinks = document.createElement("nav");
    socialLinks.className = "footer-social";
    socialLinks.setAttribute("aria-label", "Ergovn social media");
    socialLinks.innerHTML = `
      <a href="https://www.linkedin.com/company/the-first-workshop-tfw/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="Ergovn on LinkedIn" title="LinkedIn">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0"></path>
        </svg>
      </a>
      <a href="https://www.facebook.com/Ergovn?mibextid=wwXIfr&amp;rdid=xIo32yy8VsKstern&amp;share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1C7AXNXr7g%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Ergovn on Facebook" title="Facebook">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </a>`;
    contactBlock.appendChild(socialLinks);
    return true;
  }

  function updateWilkhahnReference() {
    const link = document.querySelector('.project-reference[href*="wilkhahn.com"]');
    const image = link?.querySelector("img");
    if (!image) return false;

    const replacement = "/images/wilkhahn-graph-dark-brown.jpg";
    if (image.getAttribute("src") !== replacement) image.setAttribute("src", replacement);
    const title = link.querySelector("strong");
    if (title && title.textContent !== "High End Conference") {
      title.textContent = "High End Conference";
    }
    return true;
  }

  function updateHayReference() {
    const link = document.querySelector('.project-reference[href*="hay.com"]');
    const image = link?.querySelector("img");
    if (!image) return false;

    const replacement = "/images/hay-chair-family.jpg";
    if (image.getAttribute("src") !== replacement) image.setAttribute("src", replacement);
    return true;
  }

  function mount() {
    const projectsSection = document.querySelector("#projects.projects");
    if (!projectsSection || projectsSection.querySelector(".project-completion")) return false;

    const referenceGrid = projectsSection.querySelector(".project-reference-grid");
    if (!referenceGrid) return false;

    const completion = document.createElement("aside");
    completion.className = "project-completion";
    completion.setAttribute("aria-label", "Completed projects");
    completion.innerHTML = `
      <header class="completion-heading">
        <p class="eyebrow">Project completion</p>
        <h2>Built, delivered,<br>and in use.</h2>
      </header>
      <div class="completion-tabs" role="tablist" aria-label="Completed project selector">
        ${projects.map((project, index) => `<button class="completion-tab" id="completion-tab-${project.id}" role="tab" aria-controls="completion-${project.id}" aria-selected="${index === 0}" type="button">${project.name.replace(" Vietnam", "")}</button>`).join("")}
      </div>
      ${projects.map(paneMarkup).join("")}`;

    const openLightbox = createLightbox();

    completion.addEventListener("click", (event) => {
      const photo = event.target.closest(".completion-photo.has-image");
      if (photo) {
        openLightbox(photo.dataset.lightboxSrc, photo.dataset.lightboxAlt);
        return;
      }

      const tab = event.target.closest(".completion-tab");
      if (!tab) return;

      completion.querySelectorAll(".completion-tab").forEach((item) => {
        item.setAttribute("aria-selected", String(item === tab));
      });
      completion.querySelectorAll(".completion-pane").forEach((pane) => {
        pane.hidden = pane.id !== tab.getAttribute("aria-controls");
      });
    });

    completion.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const photo = event.target.closest(".completion-photo.has-image");
      if (!photo) return;
      event.preventDefault();
      openLightbox(photo.dataset.lightboxSrc, photo.dataset.lightboxAlt);
    });

    projectsSection.classList.add("project-completion-layout");
    projectsSection.insertBefore(completion, referenceGrid);

    if (!projectsSection.querySelector(".maker-reference-heading")) {
      const makerHeading = document.createElement("header");
      makerHeading.className = "maker-reference-heading";
      makerHeading.innerHTML = `
        <p class="eyebrow">Maker references</p>
        <h3>Product references.</h3>`;
      projectsSection.insertBefore(makerHeading, referenceGrid);
    }
    return true;
  }

  function initialiseEnhancements() {
    mount();
    updateFooterNote();
    updateWilkhahnReference();
    updateHayReference();
  }

  initialiseEnhancements();

  const observer = new MutationObserver(initialiseEnhancements);
  observer.observe(document.documentElement, { childList: true, subtree: true });

  const socialObserver = new MutationObserver(() => {
    if (mountSocialLinks()) socialObserver.disconnect();
  });
  if (!mountSocialLinks()) {
    socialObserver.observe(document.documentElement, { childList: true, subtree: true });
  }
})();