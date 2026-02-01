import React, { useState } from "react";
import { FaUser, FaTools, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaTrophy, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo" style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}} onClick={(e) => handleSmoothScroll(e, '#hero')}>
          <img src="/Images/github-pfp.webp" alt="Logo" style={{width: '60px', height: '60px', borderRadius: '50%', background: '#181818', boxShadow: '0 0 12px rgba(135, 57, 208, 0.4)'}} />
        </div>
        
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}><span className="nav-icon"><FaUser /></span><span className="nav-text">About</span></a></li>
          <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')}><span className="nav-icon"><FaTools /></span><span className="nav-text">Skills</span></a></li>
          <li><a href="#education" onClick={(e) => handleSmoothScroll(e, '#education')}><span className="nav-icon"><FaGraduationCap /></span><span className="nav-text">Education</span></a></li>
          <li><a href="#experience" onClick={(e) => handleSmoothScroll(e, '#experience')}><span className="nav-icon"><FaBriefcase /></span><span className="nav-text">Experience</span></a></li>
          <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}><span className="nav-icon"><FaProjectDiagram /></span><span className="nav-text">Projects</span></a></li>
          <li><a href="#achievements" onClick={(e) => handleSmoothScroll(e, '#achievements')}><span className="nav-icon"><FaTrophy /></span><span className="nav-text">Achievements</span></a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}><span className="nav-icon"><FaEnvelope /></span><span className="nav-text">Contact</span></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
