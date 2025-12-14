import React from "react";
import "./Projects.css";

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      <div className="project-item">
        <div className="project-image">
          <img src="/public/project1.png" alt="TaxiWey" />
        </div>
        <div className="project-content">
          <h3>TaxiWey: AI-Powered Taxi Management System</h3>
          <ul>
            <li>Built a full-stack AI-driven taxi management system for efficient ride allocation.</li>
            <li>Integrated real-time tracking and analytics dashboard.</li>
          </ul>
          <span className="tech-stack">React, Node.js, Express, MongoDB</span>
          <a href="#" className="btn-secondary">View Project</a>
        </div>
      </div>
      <div className="project-item">
        <div className="project-image">
          <img src="/public/project2.png" alt="Attendance System" />
        </div>
        <div className="project-content">
          <h3>Attendance: AI-Powered Student Platform</h3>
          <ul>
            <li>Developed a web platform for automated student attendance using face recognition.</li>
            <li>Implemented secure authentication and reporting features.</li>
          </ul>
          <span className="tech-stack">React, Python, OpenCV</span>
          <a href="#" className="btn-secondary">View Project</a>
        </div>
      </div>
      <div className="project-item">
        <div className="project-image">
          <img src="/public/project3.png" alt="Portfolio & IoT" />
        </div>
        <div className="project-content">
          <h3>Personal Portfolio Website & IoT Projects</h3>
          <ul>
            <li>Designed and developed a personal portfolio website to showcase projects and skills.</li>
            <li>Created IoT-based home automation and monitoring systems.</li>
          </ul>
          <span className="tech-stack">React, Node.js, C++</span>
          <a href="#" className="btn-secondary">View Project</a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
