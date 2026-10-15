const poster = document.querySelector(".poster");
const messageLines = document.querySelectorAll(".message-line");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!reducedMotion.matches) {
  messageLines.forEach((line, index) => {
    line.style.setProperty("--line-index", index);
  });

  document.body.classList.add("has-entrance-animation");
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      poster.classList.add("is-visible");
    });
  });
}
