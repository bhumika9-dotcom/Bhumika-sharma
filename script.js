// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the current section in the nav
const sections = document.querySelectorAll("main section[id]");
const links = navLinks.querySelectorAll("a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  links.forEach((l) =>
    l.classList.toggle("active", l.getAttribute("href") === "#" + current)
  );
});
