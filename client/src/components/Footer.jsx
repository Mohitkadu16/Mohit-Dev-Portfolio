import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>&copy; {new Date().getFullYear()} Mohit Kadu. All rights reserved.</span>
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/mohit-kadu-856410243/">LinkedIn</a>
        <a href="https://github.com/mohitkadu16">GitHub</a>
        <a href="mailto:mohitkadu13@gmail.com">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
