import { useState } from "react";
import PropTypes from "prop-types";
import CardOverview from "../CardOverview/CardOverview";
import CardFeatures from "../CardFeatures/CardFeatures";
import CardStack from "../CardStack/CardStack";
import githubIcon from "../../assets/icons/gh-logo-white.svg";
import infoIcon from "../../assets/icons/info-icon.svg";
import "./ProjectCard.scss";

const PROJECT_CARD_OPTIONS = ["Overview", "Features", "Stack"];

const COMPONENT_MAP = {
  Overview: CardOverview,
  Features: CardFeatures,
  Stack: CardStack,
};

/**
 * Project Card Component
 * @component
 */
const ProjectCard = ({
  title,
  description,
  year,
  github,
  stack,
  features,
  overview,
}) => {
  // Hovered and Selected state mangement for nav list options
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  const renderComponents = {
    Overview: (
      <CardOverview key="overview" option={isSelected} overview={overview} />
    ),
    Features: (
      <CardFeatures key="features" option={isSelected} features={features} />
    ),
    Stack: <CardStack key="stack" option={isSelected} stack={stack} />,
  };

  // Hover functionality
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOptionSelect = (option) => {
    // If clicking the same option, deselect it
    if (option === isSelected) {
      setIsSelected("");
      return;
    }
    // Reset animation by briefly removing the component
    setIsSelected("");
    setTimeout(() => {
      setIsSelected(option);
    }, 10);
  };

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
              <a className="mobile-tile__links--anchor" href={github}>
                <img className="mobile-tile__links--icon" src={githubIcon} />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card__content">
          <h5 className="project-card__label">Description:</h5>
          <p className="project-card__description">{description}</p>
          <ul className="project-card__mobile-nav">
            {PROJECT_CARD_OPTIONS.map((option, index) => (
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
                {index < PROJECT_CARD_OPTIONS.length - 1 && (
                  <hr className="project-card__mobile-nav--divider" />
                )}
              </li>
            ))}
          </ul>
          <hr className="project-card__mobile-nav--spacer" />
          <div className="project-card__content-container">
            {isSelected ? (
              <div className="project-card__component fade-enter-active">
                {renderComponents[isSelected]}
              </div>
            ) : (
              <img
                className="project-card__info-icon fade-enter-active"
                src={infoIcon}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
