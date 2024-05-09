import React from "react";
import "./skills.css";

import SkillContent from "./SkillContent";

const Skills = () => {
  const Group1 = [
    [
      { name: "PHP", level: "Intermediate" },
      { name: "Node Js", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
    ],
    [
      { name: "MySQL", level: "Intermediate" },
      { name: "Microsoft SQL Server", level: "" },
      { name: "Firebase", level: "" },
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
      { name: "Git", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
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
