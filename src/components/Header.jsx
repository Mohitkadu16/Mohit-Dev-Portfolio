import React, { useState } from "react";
import { FaUser, FaTools, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaTrophy, FaEnvelope, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = ({ isDarkMode, toggleTheme }) => {
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
          <img src="/Images/github-pfp.webp" alt="Logo" style={{width: '60px', height: '60px', borderRadius: '50%', background: isDarkMode ? '#181818' : '#f5f5f5', boxShadow: '0 0 12px rgba(135, 57, 208, 0.4)'}} />
        </div>
        
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}><FaUser style={{verticalAlign: 'middle', marginRight: '6px'}} />About</a></li>
          <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')}><FaTools style={{verticalAlign: 'middle', marginRight: '6px'}} />Skills</a></li>
          <li><a href="#education" onClick={(e) => handleSmoothScroll(e, '#education')}><FaGraduationCap style={{verticalAlign: 'middle', marginRight: '6px', }} />Education</a></li>
          <li><a href="#experience" onClick={(e) => handleSmoothScroll(e, '#experience')}><FaBriefcase style={{verticalAlign: 'middle', marginRight: '6px'}} />Experience</a></li>
          <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}><FaProjectDiagram style={{verticalAlign: 'middle', marginRight: '6px'}} />Projects</a></li>
          <li><a href="#achievements" onClick={(e) => handleSmoothScroll(e, '#achievements')}><FaTrophy style={{verticalAlign: 'middle', marginRight: '6px'}} />Achievements</a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}><FaEnvelope style={{verticalAlign: 'middle', marginRight: '6px'}} />Contact</a></li>
        </ul>
        
        <button className="theme-toggle" onClick={toggleTheme} title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} aria-label="Toggle theme">
          {isDarkMode ? <FaSun size={20} style={{color: 'white'}} /> : <FaMoon size={20} style={{color: 'black'}} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
