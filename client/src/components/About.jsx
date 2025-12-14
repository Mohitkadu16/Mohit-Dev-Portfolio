import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./About.css";

const About = () => (
  <section className="about" id="about">
    <div className="about-content">
      <div className="about-left">
        <h2>About Me</h2>
        <div className="about-img">
          <img src="/public/github-pfp.png" alt="Profile" />
        </div>
        <div className="about-social">
          <a href="#" title="LinkedIn"><FaLinkedin /></a>
          <a href="#" title="GitHub"><FaGithub /></a>
          <a href="#" title="Email"><FaEnvelope /></a>
        </div>
      </div>
      <div className="about-right">
        <h3>Hey! I'm MOHIT</h3>
        <ul className="about-points">
          <li>Results-driven and motivated Junior Developer currently pursuing a Diploma in Electronics & Telecommunication Engineering.</li>
          <li>Passionate about building scalable web applications and always eager to learn new technologies.</li>
          <li>Experienced in React, Node.js, and modern web development tools.</li>
          <li>Strong problem-solving skills and a collaborative team player.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
