import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>&copy; {new Date().getFullYear()} Mohit Kadu. All rights reserved.</span>
      <div className="footer-social">
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        <a href="#">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
