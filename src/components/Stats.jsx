import React from "react";
import "./Stats.css";

const Stats = () => (
  <section className="stats">
    <div className="stats-cards">
      <div className="stat-card">
        <h3>5+</h3>
        <span>Projects Completed</span>
      </div>
      <div className="stat-card">
        <h3>17+</h3>
        <span>Technologies</span>
      </div>
      <div className="stat-card" id="skills">
        <h3>2+</h3>
        <span>Years of Hands-On Project Experience</span>
      </div>
    </div>
  </section>
);

export default Stats;
