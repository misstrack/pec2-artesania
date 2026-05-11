import "bootstrap";

const nav = document.querySelector(".nav-main");
const toggle = document.querySelector(".nav-main__toggle");

if (nav && toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-main--open");

    toggle.setAttribute("aria-expanded", isOpen);
    toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });
}

const currentPath = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav-main__link");

navLinks.forEach((link) => {
  const linkPath = link.getAttribute("href").split("/").pop();

  link.classList.remove("interactive-link--active");

  if (linkPath === currentPath) {
    link.classList.add("interactive-link--active");
  }
});