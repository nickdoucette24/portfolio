import React, { useState, useRef, useCallback } from "react";
import BehindCodeSection from "../BehindCodeSection/BehindCodeSection.js";
import PrecisionSection from "../PrecisionSection/PrecisionSection.js";
import ToolboxSection from "../ToolboxSection/ToolboxSection.js";
import LifecycleSection from "../LifecycleSection/LifecycleSection.js";

// Asset imports organized by type for better maintainability
import accessibilityImg from "../../assets/icons/accessibility_shield.svg";

// Client Side Logos
import cssLogo from "../../assets/images/cssLogo.svg";
import reactLogo from "../../assets/images/react.svg";
import javascriptLogo from "../../assets/images/javascript.svg";
import htmlLogo from "../../assets/images/html.svg";
import sassLogo from "../../assets/images/sass.svg";

// Server Side Logos
import expressLogo from "../../assets/images/express.svg";
import nodeLogo from "../../assets/images/nodejs.svg";
import mysqlLogo from "../../assets/images/mysql.svg";
import sequelizeLogo from "../../assets/images/sequelize.svg";
import socketLogo from "../../assets/images/socket.svg";

// Design Tool Logos
import figmaLogo from "../../assets/images/figma.svg";
import adobeLogo from "../../assets/images/adobe.svg";

// Development Tool Logos
import jiraLogo from "../../assets/images/jira.svg";
import gitLogo from "../../assets/images/git.svg";
import vscodeLogo from "../../assets/images/vscode.svg";
import postmanLogo from "../../assets/images/postman.svg";
import npmLogo from "../../assets/images/npm.svg";

// Deployment Tool Logos
import herokuLogo from "../../assets/images/heroku.svg";
import digitaloceanLogo from "../../assets/images/digitalocean.svg";
import dockerLogo from "../../assets/images/docker.svg";

// Methodology Logos
import bemLogo from "../../assets/images/bem.svg";
import agileLogo from "../../assets/images/agile.png";
import restfulLogo from "../../assets/images/restful.svg";
import cicdLogo from "../../assets/images/cicd.svg";
import mobileLogo from "../../assets/images/mobile.svg";

import "./ProcessSection.scss";

const categories = {
  "Client-Side": [
    { name: "React.js", logo: reactLogo },
    { name: "Javascript", logo: javascriptLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "Sass", logo: sassLogo },
  ],
  "Server-Side": [
    { name: "Express.js", logo: expressLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "Sequelize", logo: sequelizeLogo },
    { name: "Socket.io", logo: socketLogo },
  ],
  Design: [
    { name: "Figma", logo: figmaLogo },
    { name: "Adobe", logo: adobeLogo },
  ],
  Development: [
    { name: "Jira", logo: jiraLogo },
    { name: "Git", logo: gitLogo },
    { name: "VS Code", logo: vscodeLogo },
    { name: "Postman", logo: postmanLogo },
    { name: "npm", logo: npmLogo },
  ],
  Deployment: [
    { name: "Heroku", logo: herokuLogo },
    { name: "DigitalOcean", logo: digitaloceanLogo },
    { name: "Docker", logo: dockerLogo },
  ],
  Methodologies: [
    { name: "BEM", logo: bemLogo },
    { name: "AGILE", logo: agileLogo },
    { name: "Mobile-First", logo: mobileLogo },
    { name: "RESTful API", logo: restfulLogo },
    { name: "CI/CD", logo: cicdLogo },
  ],
};

const deploymentPlan = [
  {
    title: "Plan.",
    description:
      "Collaborate to define goals, identify key features, and create a detailed roadmap for the project.",
  },
  {
    title: "Build.",
    description:
      "Write clean, intuitive, and up-to-date code, bringing the project to life and getting it ready for revisions.",
  },
  {
    title: "Test.",
    description:
      "Ensure everything runs smoothly with thorough testing for functionality, performance, and usability.",
  },
  {
    title: "Refine.",
    description:
      "Polish the product based on feedback and testing results, making necessary optimizations and improvements.",
  },
  {
    title: "Deploy.",
    description:
      "Launch the project with confidence, ensuring it's secure and ready for users.",
  },
];

/**
 * Process Section Component
 * @component
 */

const ProcessSection = () => {
  // State management
  const [selectedCategory, setSelectedCategory] = useState("Client-Side");
  const [icons, setIcons] = useState(categories["Client-Side"]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs for scroll functionality
  const precisionRef = useRef(null);
  const toolboxRef = useRef(null);

  /**
   * @function
   * Handles scroll functionality to specific sections
   */
  const scrollToSection = useCallback((ref, isMiddleScroll = false) => {
    if (ref?.current) {
      const elementTop = ref.current.getBoundingClientRect().top;
      const offset = isMiddleScroll ? 160 : 80;
      const scrollY = window.scrollY + elementTop - offset;
      window.scrollTo({
        top: scrollY,
        behavior: "smooth",
      });
    }
  }, []);

  // Handles category changes with animation
  const handleCategoryChange = (category) => {
    if (selectedCategory === category) return; // Prevent redundant animations
    setIsAnimating(true);

    // Wait for slide-out animation to finish before changing icons
    setTimeout(() => {
      setSelectedCategory(category);
      setIcons(categories[category]);
      setIsAnimating(false); // Trigger slide-in animation
    }, 500); // Match the animation duration in CSS
  };

  return (
    <section className="process-section">
      <div className="behind-wrapper">
        <BehindCodeSection />
      </div>
      <div className="scroll-container">
        <p
          className="scroll-container__title"
          onClick={() => scrollToSection(precisionRef)}
        >
          this way
        </p>
        <div className="scroll-container__line"></div>
      </div>
      <div className="process-container precision-container" ref={precisionRef}>
        <PrecisionSection />
      </div>
      <div className="scroll-container__mid">
        <p
          className="scroll-container__mid--title"
          onClick={() => scrollToSection(toolboxRef, true)}
        >
          this way
        </p>
        <div className="scroll-container__mid--line"></div>
      </div>
      <div className="process-container toolbox-container">
        <ToolboxSection
          toolboxRef={toolboxRef}
          categories={categories}
          selectedCategory={selectedCategory}
          isAnimating={isAnimating}
          icons={icons}
          handleCategoryChange={handleCategoryChange}
        />
      </div>
      <div className="lifecycle-wrapper">
        <LifecycleSection deploymentPlan={deploymentPlan} />
      </div>
      <div className="process-container accessibility-container">
        <div className="accessibility-container__content">
          <div className="accessibility-container__img-container">
            <img
              className="accessibility-container__img-container--img"
              src={accessibilityImg}
            />
          </div>
          <div className="accessibility-container__content-wrapper">
            <h2 className="process-container__heading accessibility-container__heading">
              Accessibility Standards.
            </h2>
            <hr className="process-container__divider accessibility-container__divider" />
            <p className="process-container__text process-container__body accessibility-container__text">
              Inclusion and usability are at the heart of my development
              process. Using{" "}
              <span className="process-container__text--bold accessibility-container__text">
                ARIA roles
              </span>{" "}
              and{" "}
              <span className="process-container__text--bold accessibility-container__text">
                semantic HTML
              </span>
              , every project follows the industry-standard best practices for
              ensuring usability for everyone,{" "}
              <span className="process-container__text--bold accessibility-container__text">
                regardless of their ability
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
