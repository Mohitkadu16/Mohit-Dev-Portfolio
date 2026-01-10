import React from "react";
import "./Projects.css";

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      <div className="project-item">
        <div className="project-image">
          <img src="/projects/studkits.webp" alt="Studkits" />
        </div>
        <div className="project-content">
          <h3>StudKits - IoT, Robotics & Electronics Project Kits</h3>
          <ul>
            <li>Developed & Co-founded StudKits, an educational startup providing affordable IoT, robotics, and electronics project kits & Resources for students and hobbyists.</li>
          </ul>
          <span className="tech-stack">Typescript, React, Node.js, Next.js, Firebase</span>
          <a href="https://www.studkits.shop" className="btn-secondary">View Project</a>
        </div>
      </div>
      <div className="project-item">
        <div className="project-image">
          <img src="/projects/aethersurf.webp" alt="Attendance System" />
        </div>
        <div className="project-content">
          <h3>AetherSurf - AI-Powered Browser Prototype</h3>
          <ul>
            <li>Developed AetherSurf, an AI-powered browser prototype that aggregates search results into structured steps and media, featuring multi-model AI switching, local search history storage, and a minimal distraction-free user interface.</li>
          </ul>
          <span className="tech-stack">Typescript, React, Node.js, Ollama, Electron</span>
          <a href="https://github.com/Mohitkadu16/Aethersurf-AI-Browser" className="btn-secondary">View Project</a>
        </div>
      </div>
      <div className="project-item">
        <div className="project-image">
          <img src="/projects/taskwise.webp" alt="Attendance System" />
        </div>
        <div className="project-content">
          <h3>TaskWise - AI-Powered Task Management & Evaluation</h3>
          <ul>
            <li>Developed TaskWise-AI, an AI-powered task management tool that intelligently evaluates, prioritizes, and streamlines tasks through smart AI-driven insights and a modern user-focused interface.</li>
          </ul>
          <span className="tech-stack">Typescript, React, Node.js, Supabase, Genkit</span>
          <a href="https://task-wise-ai-six.vercel.app/" className="btn-secondary">View Project</a>
        </div>
      </div>
      <div className="project-item">
        <div className="project-image">
          <img src="/projects/portfolio.webp" alt="Portfolio & IoT" />
        </div>
        <div className="project-content">
          <h3>Personal Portfolio Website & IoT Projects</h3>
          <ul>
            <li>Designed and developed a personal portfolio website to showcase projects and skills.</li>
            <li>Created IoT-based home automation and monitoring systems.</li>
          </ul>
          <span className="tech-stack">Html, Css, JavaScript</span>
          <a href="https://mohitkadu.vercel.app/" className="btn-secondary">View Project</a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
