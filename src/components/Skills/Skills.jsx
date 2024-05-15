import React from "react";
import "./skills.css";

import SkillContent from "./SkillContent";

const Skills = () => {
  const Group1 = [
    [
      { name: "Asp.Net", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Node Js", level: "Basic" },
    ],
    [
      { name: "C#", level: "Advanced" },
      { name: "Microsoft SQL", level: "Intermediate" },
      { name: "Git", level: "Intermediate" },
    ],
  ];
  const Group2 = [
    [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
    ],
    [
      { name: "Bootstrap", level: "Intermediate" },
      { name: "React", level: "Advanced" },
      { name: "Tailwind", level: "Intermediate" },
    ],
  ];
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <SkillContent skillsTitle="Web" skillsGroup={Group2} />
        <SkillContent skillsTitle="Other" skillsGroup={Group1} />
      </div>
    </section>
  );
};

export default Skills;
