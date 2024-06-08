import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState({ name: "all" });
  const [filteredProjects, setFilteredProjects] = useState(
    projectsData.sort((a, b) => b.id - a.id)
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (selectedCategory.name === "all") {
      setFilteredProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) =>
          project.category.toLowerCase() === selectedCategory.name.toLowerCase()
      );
      setFilteredProjects(newProjects);
    }
  }, [selectedCategory]);

  const handleClick = (index, categoryName) => {
    setSelectedCategory({ name: categoryName.toLowerCase() });
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span
            key={index}
            onClick={() => handleClick(index, item.name)}
            className={`work__item ${
              activeIndex === index ? "active-work" : ""
            }`}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work__container grid">
        {filteredProjects.map((item) => (
          <WorkItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Works;
