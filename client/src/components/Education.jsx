import React from "react";
import "./Education.css";

const Education = () => (
  <section className="education" id="education">
    <h2>Education</h2>
    <div className="education-list">
      <div className="education-item">
        <h3>Diploma in Electronics & Telecommunication Engineering</h3>
        <span>XYZ Polytechnic, 2022 - Present</span>
        <p>Relevant coursework: Microprocessors, Communication Systems, Embedded Systems</p>
      </div>
      <div className="education-item" id="experience">
        <h3>Secondary School (10th Std)</h3>
        <span>ABC School, 2020</span>
        <p>Science and Mathematics</p>
      </div>
    </div>
  </section>
);

export default Education;
