import React from "react";
import "./Experience.css";

const entries = [
  {
    title: "Web Developer",
    org: { name: "StudKits", url: "https://www.studkits.shop" },
    date: "2024 - Present",
    bullets: [
      "Develop and maintain the StudKits platform that helps students discover project kits and study resources.",
      "Enhance user experience through a clean, intuitive UI and responsive layouts for both desktop and mobile devices.",
      "Implement resource sharing features to encourage peer collaboration and support among students.",
    ],
  },
  {
    title: "Intern",
    org: { name: "Technovision India Pvt Ltd", url: "https://technovisionindia.in/" },
    date: "2023",
    bullets: [
      "Supported senior engineers with basic testing, documentation, and electronics-related tasks.",
      "Assisted in integrating hardware modules and troubleshooting real-world systems issues.",
      "Gained hands-on experience with industry-standard tools and practices.",
    ],
  },
];

const Experience = () => (
  <section className="experience" id="experience">
    <h2>Professional Experience</h2>

    <div className="experience-list">
      {entries.map((e, i) => (
        <article className="experience-item" key={i}>
          <div className="exp-badge">{e.date}</div>
          <div className="exp-head">
            <div className="exp-icon">💼</div>
            <div className="exp-title">
              <h3>{e.title}</h3>
              <div className="exp-org">
                <b>
                  <a href={e.org.url} target="_blank" rel="noreferrer">
                    {e.org.name}
                  </a>
                </b>
              </div>
            </div>
          </div>

          <ul>
            {e.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
