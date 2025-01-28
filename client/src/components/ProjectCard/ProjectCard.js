import { useState } from "react";
import CardOverview from "../CardOverview/CardOverview";
import CardFeatures from "../CardFeatures/CardFeatures";
import CardStack from "../CardStack/CardStack";
import "./ProjectCard.scss";

const ProjectCard = ({ title, description, year, browser, github }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState("Overview");

  // Mapping selected options to their respective components
  const renderComponents = {
    Overview: <CardOverview option={isSelected} />,
    Features: <CardFeatures option={isSelected} />,
    Stack: <CardStack option={isSelected} />,
  };

  // Hover functionality
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOptionSelect = (option) => {
    setIsSelected(option);
  };

  const options = ["Overview", "Features", "Stack"];

  return (
    <div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card__info">
        <h3 className={`project-card__title ${isHovered ? "card-hover" : ""}`}>
          {title}
        </h3>
        <hr className="project-card__divider" />
        <div className="mobile-tile">
          <div className="mobile-tile__content">
            <h5 className="mobile-tile__label">year:</h5>
            <p className="mobile-tile__year">{year}</p>
          </div>
          <div className="mobile-tile__content">
            <h5 className="mobile-tile__label">view:</h5>
            <div className="mobile-tile__links">
              <a className="mobile-tile__links--icon">github</a>
              <a className="mobile-tile__links--icon">browser</a>
            </div>
          </div>
        </div>
        <div className="project-card__content">
          <h5 className="project-card__label">Description:</h5>
          <p className="project-card__description">{description}</p>
          <ul className="project-card__mobile-nav">
            {options.map((option, index) => (
              <li className="project-card__mobile-nav--container" key={option}>
                <span
                  className={`project-card__mobile-nav--item ${
                    isSelected === option ? "option-selected" : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </span>
                {/* Only add a divider if it's not the last option */}
                {index < options.length - 1 && (
                  <hr className="project-card__mobile-nav--divider" />
                )}
              </li>
            ))}
          </ul>
          {renderComponents[isSelected]}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
