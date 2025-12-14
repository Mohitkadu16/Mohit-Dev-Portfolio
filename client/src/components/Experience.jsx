import React from "react";
import "./Experience.css";

const Experience = () => (
  <section className="experience" >
    <h2>Professional Experience</h2>
    <div className="experience-list">
      <div className="experience-item">
        <h3>Web Developer</h3>
        <span>Freelance | 2024 - Present</span>
        <ul>
          <li>Developed and maintained responsive web applications using React and Node.js.</li>
          <li>Collaborated with designers and clients to deliver high-quality products.</li>
          <li>Implemented RESTful APIs and integrated third-party services.</li>
        </ul>
      </div>
      <div className="experience-item" id="projects">
        <h3>Intern</h3>
        <span>ABC Tech Pvt Ltd | 2023</span>
        <ul>
          <li>Assisted in building internal tools using JavaScript and Python.</li>
          <li>Participated in code reviews and team meetings.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
