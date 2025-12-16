import React from "react";
import { FaCode, FaServer, FaTools, FaPalette, FaBrain, FaGithub, FaMobileAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss3, SiCplusplus, SiReact, SiNextdotjs, SiNodedotjs, SiNpm, SiGit, SiGithub, SiFirebase, SiSupabase, SiFigma, SiWordpress, SiGoogle, SiOllama, SiGithubcopilot } from "react-icons/si";
import "./Skills.css";

const SkillTag = ({ icon: Icon, label, svgSrc }) => (
  <div className="skill-tag">
    {svgSrc ? (
      <img src={svgSrc} className="skill-logo-svg" alt={label} />
    ) : Icon ? (
      <Icon className="skill-logo" />
    ) : null}
    <span>{label}</span>
  </div>
);

const Skills = () => (
  <section className="skills" id="skills">
    <div className="skills-header">
      <FaCode className="skills-icon" />
      <h2>Programming Languages</h2>
    </div>
    <div className="skills-grid">
      <SkillTag icon={SiTypescript} label="TypeScript" />
      <SkillTag icon={SiPython} label="Python" />
      <SkillTag icon={SiHtml5} label="HTML" />
      <SkillTag icon={SiCss3} label="CSS" />
      <SkillTag icon={SiCplusplus} label="C/C++" />
    </div>

    <div className="skills-header">
      <FaServer className="skills-icon" />
      <h2>Frameworks & Libraries</h2>
    </div>
    <div className="skills-grid">
      <SkillTag icon={SiReact} label="React" />
      <SkillTag icon={SiNextdotjs} label="Next.js" />
      <SkillTag icon={SiNodedotjs} label="Node.js" />
      <SkillTag icon={SiNpm} label="Npm" />
    </div>

    <div className="skills-header">
      <FaTools className="skills-icon" />
      <h2>AI & Tools</h2>
    </div>
    <div className="skills-grid">
      <SkillTag icon={FaBrain} label="AI-assisted development" />
      <SkillTag icon={SiGoogle} label="AI integration" />
      <SkillTag icon={SiGoogle} label="Genkit" />
      <SkillTag icon={SiOllama} label="Ollama" />
      <SkillTag icon={SiGithubcopilot} label="Github Copilot" />
    </div>

    <div className="skills-header">
      <FaTools className="skills-icon" />
      <h2>Platforms & Services</h2>
    </div>
    <div className="skills-grid">
      <SkillTag icon={SiGit} label="Git" />
      <SkillTag icon={SiGithub} label="GitHub" />
      <SkillTag icon={SiFirebase} label="Firebase" />
      <SkillTag icon={SiSupabase} label="Supabase" />
    </div>

    <div className="skills-header">
      <FaPalette className="skills-icon" />
      <h2>Design & UI</h2>
    </div>
    <div className="skills-grid">
      <SkillTag icon={FaMobileAlt} label="Responsive Design" />
      <SkillTag icon={SiWordpress} label="Wordpress" />
      <SkillTag icon={SiFigma} label="Figma" />
    </div>
  </section>
);

export default Skills;
