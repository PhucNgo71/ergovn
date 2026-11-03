(() => {
  function showLanguage() {
    const language = new URLSearchParams(window.location.search).get("lang") === "vi" ? "vi" : "en";
    document.documentElement.lang = language;
    document.title = `${language === "vi" ? "Chính sách bảo mật" : "Privacy Policy"} | Ergovn`;
    document.querySelectorAll("[data-policy]").forEach((article) => {
      article.hidden = article.dataset.policy !== language;
    });
    document.querySelectorAll("[data-language]").forEach((link) => {
      if (link.dataset.language === language) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }
  showLanguage();
})();
