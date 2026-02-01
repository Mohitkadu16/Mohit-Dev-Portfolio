import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaDownload, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Hero.css";


const statements = [
  "Web Developer | React | Next.js",
  "2+ Years of Hands-On Project Experience",
  "AI-Assisted Dev | 4+ Projects",
];

const TYPING_SPEED = 70;
const ERASING_SPEED = 50;
const DELAY_BETWEEN = 1200;

const Hero = () => {
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

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Mohitkadu16",
      color: "#181717",
      delay: "0s"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/mohit-kadu-856410243/",
      color: "#0A66C2",
      delay: "0.1s"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/loyalmanuka",
      color: "#E4405F",
      delay: "0.2s"
    }
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* Left Side - Primary Content */}
        <div className="hero-left">
          <img 
            src="/Images/pfp1.webp" 
            alt="Mohit Kadu" 
            className="hero-img"
          />
          <h1 className="hero-title">
            Mohit <span className="hero-gradient">Kadu</span>
          </h1>
          <h2 className="typing">
            <span className="typing-text">{display}</span>
          </h2>
          <div className="hero-location">
            <FaMapMarkerAlt />
            <span>Mumbai, Maharashtra, India</span>
          </div>
          <a href="/Documents/Mohit Kadu ATS Resume.pdf" className="btn-primary">
            <FaDownload />
            Download Resume
          </a>
        </div>

        {/* Right Side - Social Badges */}
        <div className="hero-right">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-badge"
                style={{ animationDelay: social.delay }}
                data-color={social.color}
              >
                <IconComponent className="social-icon" />
                <span className="social-name">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
