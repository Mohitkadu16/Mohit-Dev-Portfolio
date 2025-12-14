import React from "react";
import "./Achievements.css";

const Achievements = () => (
  <section className="achievements" id="achievements">
    <h2>Achievements</h2>
    <div className="achievements-list">
      <div className="achievement-item">
        <h3>Completed Student Platform Scholarship</h3>
        <p>Received a merit-based scholarship for outstanding performance in building a student platform.</p>
      </div>
      <div className="achievement-item">
        <h3>AI Powered TaxiWey at Hackathon</h3>
        <p>Secured 1st place at a national hackathon for developing an AI-powered taxi management system.</p>
      </div>
      <div className="achievement-item">
        <h3>Browser Prototype Awarded</h3>
        <p>Won the best prototype award for an animated browser project at a tech fest.</p>
      </div>
      <div className="achievement-item" id="contact">
        <h3>IoT Prototype Integrating Cloud Services</h3>
        <p>Recognized for developing an IoT prototype integrating cloud services for real-time monitoring.</p>
      </div>
    </div>
  </section>
);

export default Achievements;
