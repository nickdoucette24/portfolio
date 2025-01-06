import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ title, description, year, browser, github }) => {
  return (
    <div className="project-card">
      <div className="project-card__info">
        <h3 className="project-card__title">{title}</h3>
        <hr className="project-card__divider" />
        <div className="mobile-tile">
          <div className="mobile-tile__content">
            <h5 className="mobile-tile__label">year:</h5>
            <p className="mobile-tile__year">{year}</p>
          </div>
          <div className="mobile-tile__content">
            <h5 className="mobile-tile__label">view in:</h5>
            <div className="mobile-tile__links">
              <a className="mobile-tile__links--icon">github</a>
              <a className="mobile-tile__links--icon">browser</a>
            </div>
          </div>
        </div>
        <div className="project-card__content">
          <h5 className="project-card__label">Description</h5>
          <p className="project-card__description">{description}</p>
          <ul className="project-card__mobile-nav">
            <li className="project-card__mobile-nav--item">Features</li>
            <hr className="project-card__mobile-nav--divider" />
            <li className="project-card__mobile-nav--item">Overview</li>
            <hr className="project-card__mobile-nav--divider" />
            <li className="project-card__mobile-nav--item">Stack</li>
          </ul>
          <div>all of the text goes renders here</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
