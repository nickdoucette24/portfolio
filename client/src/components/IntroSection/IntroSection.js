import React from "react";
import processImg from "../../assets/icons/behind-code.png";
import precisionImg from "../../assets/icons/precision.png";
import toolboxImg from "../../assets/icons/toolbox.png";
import lifecycleImg from "../../assets/icons/lifecycle.png";
import accessibilityImg from "../../assets/icons/accessibility.png";
import "./IntroSection.scss";

const IntroSection = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <img className="process-container__img" src={processImg} />
        <h1 className="process-container__heading">Behind my code.</h1>
        <hr className="process-container__divider" />
        <p className="process-container__text">
          Every line of code I write is an opportunity to raise the standard of
          content in the world. The internet is dark and ugly place, but I do my
          best to make it a little bit prettier.
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
      <div className="process-container">
        <img className="process-container__img" src={precisionImg} />
        <h1 className="process-container__heading">
          Precision in Development.
        </h1>
        <hr className="process-container__divider" />
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
      <div className="process-stack">
        <img className="process-container__img" src={toolboxImg} />
        <h1 className="process-stack__heading">My Toolbox.</h1>
        <hr className="process-container__divider" />
        <div className="process-stack__container">
          <div className="process-stack__titles">
            <ul>
              <li>Client-Side</li>
              <li>Server-Side</li>
              <li>Deployment</li>
              <li>Design</li>
              <li>Development</li>
              <li>Methodologies</li>
            </ul>
          </div>
          <hr />
          <div className="process-stack__icons">
            <ul>
              <li>
                <img />
                <p3>React.js</p3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="process-container">
        <img className="process-container__img" src={lifecycleImg} />
        <h1 className="process-container__heading">Project Lifecycle.</h1>
        <hr className="process-container__divider" />
        <p className="process-container__text process-container__body">
          From ideation to deployment, I follow a structured workflow to keep
          each project on track and{" "}
          <span className="process-container__text--bold">cover all bases</span>
          . I use a{" "}
          <span className="process-container__text--bold">mobile-first</span>
          approach to make sure the product looks good on all devices, and
          adhere to <span className="process-container__text--bold">
            BEM
          </span>,{" "}
          <span className="process-container__text--bold">accessible</span>{" "}
          development standards, and{" "}
          <span className="process-container__text--bold">RESTful</span> API
          logic to ensure my projects are scalable and future-proof.
          Plan-Build-Test-Refine-Deploy.
        </p>
      </div>
      <div className="process-container">
        <img className="process-container__img" src={accessibilityImg} />
        <h1 className="process-container__heading">Accessibility Matters.</h1>
        <hr className="process-container__divider" />
        <p className="process-container__text process-container__body">
          Inclusion and usability is at the heart of my web development process.
          With the use of methodologies like{" "}
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
