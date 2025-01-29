import { useState, useRef } from "react";
import accessibilityImg from "../../assets/icons/accessibility_shield.svg";
import cssLogo from "../../assets/images/cssLogo.svg";
import reactLogo from "../../assets/images/react.svg";
import javascriptLogo from "../../assets/images/javascript.svg";
import htmlLogo from "../../assets/images/html.svg";
import sassLogo from "../../assets/images/sass.svg";
import expressLogo from "../../assets/images/express.svg";
import nodeLogo from "../../assets/images/nodejs.svg";
import mysqlLogo from "../../assets/images/mysql.svg";
import sequelizeLogo from "../../assets/images/sequelize.svg";
import socketLogo from "../../assets/images/socket.svg";
import figmaLogo from "../../assets/images/figma.svg";
import adobeLogo from "../../assets/images/adobe.svg";
import jiraLogo from "../../assets/images/jira.svg";
import gitLogo from "../../assets/images/git.svg";
import vscodeLogo from "../../assets/images/vscode.svg";
import postmanLogo from "../../assets/images/postman.svg";
import npmLogo from "../../assets/images/npm.svg";
import herokuLogo from "../../assets/images/heroku.svg";
import digitaloceanLogo from "../../assets/images/digitalocean.svg";
import dockerLogo from "../../assets/images/docker.svg";
import bemLogo from "../../assets/images/bem.svg";
import agileLogo from "../../assets/images/agile.png";
import restfulLogo from "../../assets/images/restful.svg";
import cicdLogo from "../../assets/images/cicd.svg";
import mobileLogo from "../../assets/images/mobile.svg";
import "./IntroSection.scss";

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
      "Launch the project with confidence, ensuring it’s secure and ready for users.",
  },
];

const IntroSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Client-Side");
  const [icons, setIcons] = useState(categories["Client-Side"]);
  const [isAnimating, setIsAnimating] = useState(false);
  const precisionRef = useRef();
  const toolboxRef = useRef();

  const scrollToSection = (ref, isMiddleScroll = false) => {
    if (ref && ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top;
      const offset = isMiddleScroll ? 160 : 80;
      const scrollY = window.scrollY + elementTop - offset;
      window.scrollTo({
        top: scrollY,
        behavior: "smooth",
      });
    }
  };

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
      {/* <HeroCanvas /> */}
      <div className="process-container behind-container">
        {/* <img className="process-container__img" src={processImg} /> */}
        <h1 className="process-container__heading behind-container__heading">
          Behind my code.
        </h1>
        <hr className="process-container__divider behind-container__divider" />
        <p className="process-container__text behind-container__text">
          I look at every project as an opportunity to make the world a little
          bit cleaner, a little bit more efficient, and a little bit prettier.
        </p>
        <p className="process-container__text process-container__text--bottom behind-container__text">
          I find a lot of fulfillment when creating things I know have been
          built with effort and care. I write every line to ensure a{" "}
          <span className="process-container__text--bold behind-container__text">
            silky smooth
          </span>{" "}
          experience, every time.
        </p>
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
        <div className="precision-container__content">
          {/* <img className="process-container__img" src={precisionImg} /> */}
          <h2 className="process-container__heading precision-container__heading">
            Precision in Development.
          </h2>
          <hr className="process-container__divider precision-container__divider" />
          <p className="process-container__text  process-container__body">
            I adapt my process to each project, ensuring its design is hitting
            the right{" "}
            <span className="process-container__text--bold">
              target demographic
            </span>{" "}
            and its code is built for maximum efficiency and readability. Every
            pixel of space is{" "}
            <span className="process-container__text--bold">deliberate</span>,
            every animation is{" "}
            <span className="process-container__text--bold">thought out</span>,
            and every path the user takes is{" "}
            <span className="process-container__text--bold">
              planned and prepared
            </span>{" "}
            for.
          </p>
        </div>
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
        <div className="toolbox-container__content">
          {/* <img className="process-container__img" src={toolboxImg} /> */}
          <h2
            className="process-container__heading toolbox-container__heading"
            ref={toolboxRef}
          >
            My Toolbox.
          </h2>
          <hr className="process-container__divider toolbox-container__divider" />
          <p className="process-container__text process-container__body toolbox-container__text">
            A list of my most used frameworks, applications, and methodologies
            that I follow.
          </p>
          <div className="toolbox-list">
            <div className="toolbox-list__container">
              <div className="toolbox-list__titles">
                <ul className="toolbox-list__list">
                  {Object.keys(categories).map((category) => (
                    <li
                      key={category}
                      className={`toolbox-list__item ${
                        selectedCategory === category ? "active" : ""
                      }`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="toolbox-list__divider" />
              <div
                className={`toolbox-list__icons ${
                  isAnimating ? "slide-out" : "slide-in"
                }`}
              >
                <ul className="toolbox-list__icon-list">
                  {icons.map((tool) => (
                    <li key={tool.name} className="toolbox-list__icon-item">
                      <img
                        className="toolbox-list__icon-item--img"
                        src={tool.logo}
                        alt={tool.name}
                      />
                      <p className="toolbox-list__icon-item--name">
                        {tool.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="process-container lifecycle-container">
        {/* <img className="process-container__img" src={lifecycleImg} /> */}
        <h1 className="process-container__heading lifecycle-container__heading">
          Project Lifecycle.
        </h1>
        <hr className="process-container__divider lifecycle-container__divider" />
        <p className="process-container__text process-container__body lifecycle-container__text">
          From ideation to deployment, I follow a{" "}
          <span className="process-container__text--bold lifecycle-container__text">
            structured workflow
          </span>{" "}
          to keep each project on track and cover all bases. I use a{" "}
          <span className="process-container__text--bold lifecycle-container__text">
            mobile-first
          </span>{" "}
          approach to make sure the product looks good on all devices, and
          adhere to{" "}
          <span className="process-container__text--bold lifecycle-container__text">
            BEM
          </span>
          ,{" "}
          <span className="process-container__text--bold lifecycle-container__text">
            accessible
          </span>{" "}
          development standards, and{" "}
          <span className="process-container__text--bold lifecycle-container__text">
            RESTful
          </span>{" "}
          API logic to ensure my projects are easily scalable and future-proof.
        </p>
        <div className="lifecycle-timeline">
          {deploymentPlan.map((step, index) => (
            <div className="lifecycle-container__step" key={index}>
              <div className="lifecycle-container__node" />
              <div className="lifecycle-container__content">
                <h3 className="lifecycle-container__step--title">
                  {step.title}
                </h3>
                <hr className="lifecycle-container__step--divider" />
                <p className="lifecycle-container__step--description">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          <div className="lifecycle-container__line" />
        </div>
      </div>
      <div className="process-container accessibility-container">
        <div className="accessibility-container__content">
          <div className="accessibility-container__img-container">
            <img
              className="accessibility-container__img-container--img"
              src={accessibilityImg}
            />
          </div>
          <h1 className="process-container__heading accessibility-container__heading">
            Accessibility Standards.
          </h1>
          <hr className="process-container__divider accessibility-container__divider" />
          <p className="process-container__text process-container__body accessibility-container__text">
            Inclusion and usability are at the heart of my development process.
            Using{" "}
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
    </section>
  );
};

export default IntroSection;
