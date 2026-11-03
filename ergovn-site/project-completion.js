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

  function containDialogFocus(dialog, onClose, returnTo = document.activeElement) {
    const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = () => [...dialog.querySelectorAll(focusableSelector)]
      .filter((element) => element.getClientRects().length > 0);
    const focusFirst = () => focusableElements()[0]?.focus({ preventScroll: true });

    function handleKeydown(event) {
      if (!dialog.isConnected || dialog.hidden) return;
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const elements = focusableElements();
      const first = elements[0];
      const last = elements[elements.length - 1];
      const active = document.activeElement;
      if (!first) {
        event.preventDefault();
        return;
      }
      if (!dialog.contains(active) || (event.shiftKey ? active === first : active === last)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus({ preventScroll: true });
      }
    }

    function handleFocus(event) {
      if (dialog.isConnected && !dialog.hidden && !dialog.contains(event.target)) focusFirst();
    }

    document.addEventListener("keydown", handleKeydown, true);
    document.addEventListener("focusin", handleFocus);
    (dialog.querySelector('.completion-lightbox-close, .maker-popup-close') || focusableElements()[0])
      ?.focus({ preventScroll: true });

    return () => {
      document.removeEventListener("keydown", handleKeydown, true);
      document.removeEventListener("focusin", handleFocus);
      if (returnTo?.isConnected && returnTo.getClientRects().length > 0) {
        returnTo.focus({ preventScroll: true });
      }
    };
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
        <img alt="">
        <figcaption></figcaption>
      </figure>
      <button class="completion-lightbox-close" type="button">Close</button>`;
    document.body.appendChild(lightbox);

    const image = lightbox.querySelector("img");
    const caption = lightbox.querySelector("figcaption");
    const closeButton = lightbox.querySelector(".completion-lightbox-close");
    let releaseFocus;

    function close() {
      lightbox.hidden = true;
      image.removeAttribute("src");
      document.body.classList.remove("completion-lightbox-open");
      releaseFocus?.();
      releaseFocus = undefined;
    }

    lightbox.querySelector(".completion-lightbox-backdrop").addEventListener("click", close);
    closeButton.addEventListener("click", close);
    return (src, alt, trigger) => {
      image.src = src;
      image.alt = alt;
      caption.textContent = alt;
      lightbox.setAttribute("aria-label", alt);
      lightbox.hidden = false;
      document.body.classList.add("completion-lightbox-open");
      releaseFocus = containDialogFocus(lightbox, close, trigger);
    };
  }

  let makerDialog;
  let releaseMakerFocus;

  function updateMakerDialog() {
    const dialog = document.querySelector(".maker-popup");
    if (dialog === makerDialog) return;
    releaseMakerFocus?.();
    releaseMakerFocus = undefined;
    makerDialog = dialog;
    document.body.classList.toggle("maker-popup-open", Boolean(dialog));
    if (dialog) {
      releaseMakerFocus = containDialogFocus(dialog, () => {
        dialog.querySelector(".maker-popup-close")?.click();
      });
    }
  }

  function updateDocumentLanguage() {
    const selected = document.querySelector(".locale button.active");
    if (!selected) return;
    const language = selected.textContent.trim().toLowerCase();
    if ((language === "en" || language === "vi") && document.documentElement.lang !== language) {
      document.documentElement.lang = language;
    }
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

  function updatePrivacyLinks() {
    const vietnamese = document.documentElement.lang === "vi";
    const label = vietnamese ? "Chính sách bảo mật" : "Privacy Policy";
    const href = `/privacy-policy/${vietnamese ? "?lang=vi" : ""}`;
    const footer = document.querySelector(".footer > div:first-child");
    if (footer) {
      let link = footer.querySelector(".footer-privacy");
      if (!link) {
        link = document.createElement("a");
        link.className = "footer-privacy";
        footer.appendChild(link);
      }
      if (link.getAttribute("href") !== href) link.setAttribute("href", href);
      if (link.textContent !== label) link.textContent = label;
    }

    const form = document.querySelector(".inquiry-form");
    const submit = form?.querySelector('button[type="submit"]');
    if (!submit) return;
    let notice = form.querySelector(".inquiry-privacy");
    if (!notice) {
      notice = document.createElement("p");
      notice.className = "inquiry-privacy";
      notice.id = "inquiry-privacy-notice";
      const copy = document.createElement("span");
      const link = document.createElement("a");
      // Keep the inquiry in place while the visitor reads the policy.
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      notice.append(copy, link);
      form.insertBefore(notice, submit);
    }
    const copy = vietnamese
      ? "Ergovn sử dụng thông tin bạn cung cấp để phản hồi yêu cầu. Xem "
      : "Ergovn uses the information you provide to respond to your inquiry. Read our ";
    if (notice.firstChild.textContent !== copy) notice.firstChild.textContent = copy;
    const link = notice.querySelector("a");
    if (link.getAttribute("href") !== href) link.setAttribute("href", href);
    if (link.textContent !== label) link.textContent = label;
    const accessibleLabel = `${label} (${vietnamese ? "mở trong thẻ mới" : "opens in a new tab"})`;
    if (link.getAttribute("aria-label") !== accessibleLabel) link.setAttribute("aria-label", accessibleLabel);
    const describedBy = (submit.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
    if (!describedBy.includes(notice.id)) {
      submit.setAttribute("aria-describedby", [...describedBy, notice.id].join(" "));
    }

    let consent = form.querySelector(".inquiry-consent");
    if (!consent) {
      consent = document.createElement("fieldset");
      consent.className = "inquiry-consent";
      const question = document.createElement("legend");
      const choice = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "privacy_consent";
      checkbox.required = true;
      checkbox.autocomplete = "off";
      checkbox.setAttribute("aria-describedby", notice.id);
      const answer = document.createElement("span");
      choice.append(checkbox, answer);
      const version = document.createElement("input");
      version.type = "hidden";
      version.name = "privacy_policy_version";
      version.value = "2026-11-03";
      consent.append(question, choice, version);
      form.insertBefore(consent, submit);
    }
    const question = vietnamese
      ? "Bạn có đồng ý chia sẻ thông tin để Ergovn phản hồi yêu cầu không? (bắt buộc)"
      : "Do you agree to share your details so Ergovn can respond? (required)";
    const answer = vietnamese
      ? "Tôi đồng ý chia sẻ họ tên, công ty, loại dự án và email để Ergovn xử lý và phản hồi yêu cầu theo Chính sách bảo mật."
      : "I agree to share my name, company, project type and email for Ergovn to process and respond to my inquiry as described in the Privacy Policy.";
    const legend = consent.querySelector("legend");
    const answerText = consent.querySelector("span");
    if (legend.textContent !== question) legend.textContent = question;
    if (answerText.textContent !== answer) answerText.textContent = answer;
    const checkbox = consent.querySelector('input[type="checkbox"]');
    if (checkbox.value !== answer) checkbox.value = answer;
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
        openLightbox(photo.dataset.lightboxSrc, photo.dataset.lightboxAlt, photo);
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
      openLightbox(photo.dataset.lightboxSrc, photo.dataset.lightboxAlt, photo);
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
    updateMakerDialog();
    updateDocumentLanguage();
    updatePrivacyLinks();
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
