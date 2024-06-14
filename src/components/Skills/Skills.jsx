import React from "react";
import "./skills.css";

import SkillContent from "./SkillContent";

const Skills = () => {
  const Frontend = [
    [
      { name: "HTML", level: "Advanced", icon: "bx bxl-html5" },
      { name: "CSS", level: "Advanced", icon: "bx bxl-css3" },
      { name: "JavaScript", level: "Advanced", icon: "bx bxl-javascript" },
    ],
    [
      { name: "Bootstrap", level: "Intermediate", icon: "bx bxl-bootstrap" },
      { name: "React", level: "Advanced", icon: "bx bxl-react" },
      { name: "Tailwind", level: "Intermediate", icon: "bx bxl-tailwind-css" },
    ],
  ];
  const Backend = [
    [
      { name: "Asp.Net", level: "Intermediate", icon: "bx bxl-microsoft" },
      { name: "Node Js", level: "Basic", icon: "bx bxl-nodejs" },
      { name: "C#", level: "Advanced", icon: "bx bx-hash" },
    ],
    [
      { name: "MySQL", level: "Intermediate", icon: "bx bx-data" },
      { name: "Microsoft SQL", level: "Intermediate", icon: "bx bxs-data" },
      { name: "Firebase", level: "Intermediate", icon: "bx bxl-firebase" },
    ],
  ];
  // const Tools = [
  //   [{ name: "Git", level: "Intermediate", icon: "bx bxl-git" }],
  //   [{ name: "GitHub", level: "Intermediate", icon: "bx bxl-github" }],
  // ];
  // const IDEs = [
  //   [{ name: "VS Code", level: "Intermediate", icon: "bx bxl-visual-studio" }],
  //   [
  //     {
  //       name: "Visual Studio",
  //       level: "Intermediate",
  //       icon: "bx bxl-visual-studio",
  //     },
  //   ],
  // ];
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <SkillContent skillsTitle="Frontend" skillsGroup={Frontend} />
        <SkillContent skillsTitle="Backend" skillsGroup={Backend} />
        {/* <SkillContent skillsTitle="Tools" skillsGroup={Tools} />
        <SkillContent skillsTitle="IDEs" skillsGroup={IDEs} /> */}
      </div>
    </section>
  );
};

export default Skills;
