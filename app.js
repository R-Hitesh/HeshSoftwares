// js/app.js
import { loadFeatures } from "./features.js";
import { enableSmoothScroll, initScrollTopButton, toggleMobileMenu } from "./utils.js";

// Call only on pages that need features
document.addEventListener("DOMContentLoaded", () => {
  const loadBtn = document.getElementById("loadFeaturesBtn");
  if (loadBtn) {
    loadBtn.addEventListener("click", () => {
      loadFeatures("featureList", "loadFeaturesBtn");
    });
  }

  enableSmoothScroll();
  initScrollTopButton("scrollTopBtn");
  toggleMobileMenu("menuToggle", "navMenu");
});
