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
      <div class="completion-photo${src ? " has-image" : ""}">
        ${src ? `<img src="${src}" alt="${projectName} — ${name}" loading="lazy">` : ""}
      </div>`;
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

    completion.addEventListener("click", (event) => {
      const tab = event.target.closest(".completion-tab");
      if (!tab) return;

      completion.querySelectorAll(".completion-tab").forEach((item) => {
        item.setAttribute("aria-selected", String(item === tab));
      });
      completion.querySelectorAll(".completion-pane").forEach((pane) => {
        pane.hidden = pane.id !== tab.getAttribute("aria-controls");
      });
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
  }

  initialiseEnhancements();

  const observer = new MutationObserver(initialiseEnhancements);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();

