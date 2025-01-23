import { useState } from "react";
import processImg from "../../assets/icons/behind-code.png";
import precisionImg from "../../assets/icons/precision.png";
import toolboxImg from "../../assets/icons/toolbox.png";
import lifecycleImg from "../../assets/icons/lifecycle.png";
import accessibilityImg from "../../assets/icons/accessibility.png";
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

const IntroSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Client-Side");

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
  return (
    <section className="process-section">
      <div className="process-container">
        <img className="process-container__img" src={processImg} />
        <h1 className="process-container__heading behind-heading">
          Behind my code.
        </h1>
        <hr className="process-container__divider behind-heading__divider" />
        <p className="process-container__text">
          Every line of code I write is an opportunity to raise the standard of
          content in the world. The internet is a dark and ugly place, and I do
          my best to make it a little bit prettier.
        </p>
        <p className="process-container__text">
          While that sentiment means little to most people, I find a lot of
          fulfillment in spending time writing{" "}
          <span className="process-container__text--highlight">
            crystal clear
          </span>{" "}
          code which provides the user a{" "}
          <span className="process-container__text--highlight">
            silky smooth
          </span>{" "}
          and perfectly optimized experience.
        </p>
      </div>
      <div className="scroll-container">
        <p className="scroll-container__title">this way</p>
        <div className="scroll-container__line"></div>
      </div>
      <div className="process-container precision-container">
        <img className="process-container__img" src={precisionImg} />
        <h2 className="process-container__heading precision-container__heading">
          Precision in Development.
        </h2>
        <hr className="process-container__divider precision-container__divider" />
        <p className="process-container__text  process-container__body">
          I adapt my process to each project, ensuring its design is hitting the
          right{" "}
          <span className="process-container__text--bold">
            target demographic
          </span>{" "}
          and its code is built for maximum efficiency and scalability. Every
          pixel of space is{" "}
          <span className="process-container__text--bold">deliberate</span>,
          every animation is{" "}
          <span className="process-container__text--bold">thought out</span>,
          and every direction the user takes is{" "}
          <span className="process-container__text--bold">
            planned and prepared
          </span>{" "}
          for.
        </p>
      </div>
      <div className="process-container toolbox-container">
        <img className="process-container__img" src={toolboxImg} />
        <h2 className="process-container__heading toolbox-container__heading">
          My Toolbox.
        </h2>
        <hr className="process-container__divider toolbox-container__divider" />
        <p className="process-container__text process-container__body">
          A list of my most used frameworks, applications, and methodolgies that
          follow. I'm a habitual learner so this list grows very fast.
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
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <hr className="toolbox-list__divider" />
            <div className="toolbox-list__icons">
              <ul className="toolbox-list__icon-list">
                {categories[selectedCategory].map((tool) => (
                  <li key={tool.name} className="toolbox-list__icon-item">
                    <img
                      className="toolbox-list__icon-item--img"
                      src={tool.logo}
                      alt={tool.name}
                    />
                    <p className="toolbox-list__icon-item--name">{tool.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="process-container">
        <img className="process-container__img" src={lifecycleImg} />
        <h1 className="process-container__heading lifecycle-heading">
          Project Lifecycle.
        </h1>
        <hr className="process-container__divider lifecycle-heading__divider" />
        <p className="process-container__text process-container__body">
          From ideation to deployment, I follow a{" "}
          <span className="process-container__text--bold">
            structured workflow
          </span>{" "}
          to keep each project on track and cover all bases. I use a{" "}
          <span className="process-container__text--bold">mobile-first</span>{" "}
          approach to make sure the product looks good on all devices, and
          adhere to <span className="process-container__text--bold">BEM</span>,{" "}
          <span className="process-container__text--bold">accessible</span>{" "}
          development standards, and{" "}
          <span className="process-container__text--bold">RESTful</span> API
          logic to ensure my projects are easily scalable and future-proof.
          Plan-Build-Test-Refine-Deploy.
        </p>
      </div>
      <div className="process-container accessibility-container">
        <img className="process-container__img" src={accessibilityImg} />
        <h1 className="process-container__heading accessibility-container__heading">
          Accessibility Standards.
        </h1>
        <hr className="process-container__divider accessibility-container__divider" />
        <p className="process-container__text process-container__body">
          Inclusion and usability is at the heart of my web development process.
          Using{" "}
          <span className="process-container__text--bold">ARIA roles</span> and{" "}
          <span className="process-container__text--bold">semantic HTML</span>,
          every project follows the industry-standard best practices for
          ensuring usability for all users,{" "}
          <span className="process-container__text--bold">
            regardless of their ability
          </span>
          .
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
