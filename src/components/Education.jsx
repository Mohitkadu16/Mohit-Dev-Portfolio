import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

const Education = () => (
  <section className="education" id="education">
    <h2>Education</h2>

    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-content">
          <div className="timeline-badge">2022 — 2026 (Completed) </div>
          <div className="timeline-head">
            <FaGraduationCap className="grad-icon" />
            <h3>Diploma in Electronics & Telecommunication Engineering</h3>
          </div>
          <div className="timeline-sub">Vidyalankar Polytechnic · Mumbai, India</div>
          <p>Relevant coursework: Microprocessors, Communication Systems, Embedded Systems</p>
          <div className="timeline-tags">
            <span className="chip">Electronics</span>
            <span className="chip">Telecommunication</span>
            <span className="chip">Embedded Systems</span>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-content">
          <div className="timeline-badge">2008 — 2022</div>
          <div className="timeline-head">
            <FaGraduationCap className="grad-icon" />
            <h3>Secondary School (1st - 10th Std)</h3>
          </div>
          <div className="timeline-sub">IES Raja Shivaji Vidyalay School · Mumbai, India</div>
          <p>Science and Mathematics</p>
          <div className="timeline-tags" id="#experience">
            <span className="chip">Secondary Education</span>
            <span className="chip">Foundational Studies</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
