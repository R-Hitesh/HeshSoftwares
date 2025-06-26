// js/features.js
export const features = [
  { title: "Custom Software Development", desc: "Tailored solutions built to meet your business needs." },
  { title: "Cloud Integration Services", desc: "Migrate and manage applications on AWS, Azure, or GCP seamlessly." },
  { title: "AI & Data Analytics", desc: "Unlock insights and drive decisions using smart analytics tools." },
  { title: "Cybersecurity Solutions", desc: "Protect your data and applications with enterprise-grade security." },
  { title: "Mobile App Development", desc: "Design sleek, responsive apps for Android and iOS platforms." },
  { title: "24/7 Technical Support", desc: "Reliable support and maintenance for all your IT systems." }
];

export function loadFeatures(targetId, hideBtn = false) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = "";
  features.forEach(({ title, desc }) => {
    const card = document.createElement("div");
    card.className = "feature-card";
    card.innerHTML = `
      <h3 class="feature-title">${title}</h3>
      <p class="feature-desc">${desc}</p>
    `;
    container.appendChild(card);
  });

  if (hideBtn) {
    const btn = document.getElementById(hideBtn);
    if (btn) btn.style.display = "none";
  }
}
