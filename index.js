// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Close nav when clicking a link (mobile)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Dynamic year in footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Simple contact form handling (front-end only)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formStatus.textContent = "Thank you! Your message has been recorded.";
  contactForm.reset();
  setTimeout(() => {
    formStatus.textContent = "";
  }, 4000);
});
