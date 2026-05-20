export function fixRelativeLinks() {
  document.addEventListener("click", function (e) {
    const anchor = e.target.closest("a");

    if (!anchor) return;

    const href = anchor.getAttribute("href");

    // Ignore valid links
    if (
      !href ||
      href.startsWith("/") ||
      href.startsWith("http") ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      return;
    }

    // 🔥 FIX: force absolute navigation
    e.preventDefault();
    window.location.href = "/" + href;
  });
}