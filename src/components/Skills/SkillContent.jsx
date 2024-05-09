import React from "react";
const SkillContent = ({ skillsTitle, skillsGroup }) => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{skillsTitle}</h3>
      <div className="skills__box">
        {skillsGroup.map((group, groupIndex) => (
          <div className="skills__group" key={groupIndex}>
            {group.map((skill, index) => (
              <div className="skills__data" key={index}>
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillContent;
