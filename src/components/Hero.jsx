import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import "./Hero.css";


const statements = [
  "Web Developer | Ai-Assisted Coder | React & TypeScript",
  "2+ Years Experience",
  "4+ Projects Completed",
];

const TYPING_SPEED = 70;
const ERASING_SPEED = 50;
const DELAY_BETWEEN = 1200;

const Hero = ({ isDarkMode }) => {
  const [current, setCurrent] = useState(0);
  const [display, setDisplay] = useState("");
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef();

  useEffect(() => {
    let timeout;
    if (typing) {
      if (display.length < statements[current].length) {
        timeout = setTimeout(() => {
          setDisplay(statements[current].slice(0, display.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), DELAY_BETWEEN);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => {
          setDisplay(display.slice(0, -1));
        }, ERASING_SPEED);
      } else {
        setTyping(true);
        setCurrent((prev) => (prev + 1) % statements.length);
      }
    }
    timeoutRef.current = timeout;
    return () => clearTimeout(timeout);
  }, [display, typing, current]);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <img src="/Images/pfp1.webp" alt="Hero" className="hero-img" style={{width: '160px', height: '160px', borderRadius: '50%', marginBottom: '1.5rem', border: '5px solid #2196f3', background: '#181818'}} />
  <h1 className="hero-title">Mohit <span className="hero-gradient">Kadu</span></h1>
        <h2 className="typing">
          <span className="typing-text">{display}</span>
        </h2>
        <div className="hero-location">
          <FaMapMarkerAlt style={{marginRight: '8px', color: '#b9b9b9', fontSize: '1.1em', verticalAlign: 'middle'}} />
          <span>Mumbai, Maharashtra, India</span>
        </div>
        <a href="/Documents/Mohit Kadu ATS Resume.pdf" className="btn-primary" id="about">
          <FaDownload style={{marginRight: '10px', fontSize: '1.2em', verticalAlign: 'middle', color: isDarkMode ? 'white' : 'black'}} />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
