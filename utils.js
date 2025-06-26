// js/utils.js

// Smooth scroll for nav links
export function enableSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.onclick = function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    };
  });
}

// Scroll to top button
export function initScrollTopButton(btnId) {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  window.onscroll = () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  };

  btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

// Mobile menu toggle
export function toggleMobileMenu(toggleBtnId, menuId) {
  const toggleBtn = document.getElementById(toggleBtnId);
  const menu = document.getElementById(menuId);

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }
}
