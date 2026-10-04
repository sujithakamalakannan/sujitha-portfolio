// Mobile menu
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => menu.classList.remove("open"))
);

// Certificate lightbox
const box = document.getElementById("lightbox");
const boxImg = document.getElementById("lightboxImg");
const closeBox = () => { box.classList.remove("open"); boxImg.src = ""; };

document.querySelectorAll(".cert-img").forEach(btn => {
  btn.addEventListener("click", () => {
    boxImg.src = btn.dataset.full;
    box.classList.add("open");
  });
});
document.getElementById("closeBox").addEventListener("click", closeBox);
box.addEventListener("click", e => { if (e.target === box) closeBox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeBox(); });

// Active nav link on scroll
const links = menu.querySelectorAll("a");
const sections = [...links].map(a => document.querySelector(a.getAttribute("href")));
window.addEventListener("scroll", () => {
  const y = window.scrollY + 100;
  sections.forEach((s, i) => {
    if (s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
      links.forEach(l => l.classList.remove("active"));
      links[i].classList.add("active");
    }
  });
});

// Subtle reveal animation
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("show"); io.unobserve(en.target); } });
}, { threshold: 0.1 });
document.querySelectorAll(".card").forEach(c => { c.classList.add("reveal"); io.observe(c); });