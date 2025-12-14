import React from "react";
import { FaUser, FaTools, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaTrophy, FaEnvelope } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo" style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}} onClick={(e) => handleSmoothScroll(e, '#hero')}>
          <img src="./public/github-pfp.png" alt="Logo" style={{width: '60px', height: '60px', background: '#181818', boxShadow: '0 0 0 4px #181818'}} />
        </div>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}><FaUser style={{verticalAlign: 'middle', marginRight: '6px'}} />About</a></li>
          <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')}><FaTools style={{verticalAlign: 'middle', marginRight: '6px'}} />Skills</a></li>
          <li><a href="#education" onClick={(e) => handleSmoothScroll(e, '#education')}><FaGraduationCap style={{verticalAlign: 'middle', marginRight: '6px'}} />Education</a></li>
          <li><a href="#experience" onClick={(e) => handleSmoothScroll(e, '#experience')}><FaBriefcase style={{verticalAlign: 'middle', marginRight: '6px'}} />Experience</a></li>
          <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}><FaProjectDiagram style={{verticalAlign: 'middle', marginRight: '6px'}} />Projects</a></li>
          <li><a href="#achievements" onClick={(e) => handleSmoothScroll(e, '#achievements')}><FaTrophy style={{verticalAlign: 'middle', marginRight: '6px'}} />Achievements</a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}><FaEnvelope style={{verticalAlign: 'middle', marginRight: '6px'}} />Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
