import React from "react";
import "./Achievements.css";

const data = [
  {
    emoji: "🏆",
    label: "ACHIEVEMENT",
    title: "Developed StudKits Platform Enhancing Student Learning",
    desc:
      "Created and maintained the StudKits platform with responsive UI, improving access to study resources and enabling peer collaboration for multiple subjects and levels, increasing student engagement in Mumbai from June 2025 to Present.",
    tags: ["Web Development", "Responsive Design", "Education Tech"],
  },
  {
    emoji: "🚀",
    label: "ACHIEVEMENT",
    title: "Delivered 15+ Projects in 6 Months via StudKits",
    desc:
      "Spearheaded the end-to-end delivery of 15+ student-focused hardware & software projects within just 6 months at StudKits — consistently shipping quality work at pace while scaling the startup's product portfolio.",
    tags: ["Startup", "Product Delivery", "StudKits"],
  },
  {
    emoji: "🏆",
    label: "ACHIEVEMENT",
    title: "Innovated AI-Assisted Browser Prototype AetherSurf",
    desc:
      "Developed an AI-assisted browser prototype with model-switching capabilities and a minimal UI, improving aggregated search results and user experience in 2025.",
    tags: ["AI Prototype", "Browser Tech", "UX Design"],
  },
  {
    emoji: "📸",
    label: "ACHIEVEMENT",
    title: "Built Loyalmanuka — Photography Portfolio",
    desc:
      "Designed and launched a personal photography portfolio platform showcasing street photography projects like “SOBO to NOBO”, combining visual storytelling with a custom-built web experience.",
    tags: ["Photography", "SOBO to NOBO", "Loyalmanuka"],
  },
];

const Achievements = () => (
  <section className="achievements" id="achievements">
    <h2>Achievements</h2>
    <div className="achievements-list">
      {data.map((a, idx) => (
        <article className="achievement-item" key={idx}>
          <div className="achievement-meta">
            <span className="emoji">{a.emoji}</span>
            <span className="meta-label">{a.label}</span>
          </div>

          <h3 className="achievement-title">{a.title}</h3>

          <p className="achievement-desc">{a.desc}</p>

          <div className="tags">
            {a.tags.map((t, i) => (
              <span className="tag" key={i} aria-hidden>
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Achievements;
