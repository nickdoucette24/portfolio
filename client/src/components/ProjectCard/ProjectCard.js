import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ title, description }) => {
  return (
    <div className="project-card">
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
