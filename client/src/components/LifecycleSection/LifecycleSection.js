import React from "react";
import "./LifecycleSection.scss";

const LifecycleSection = ({ deploymentPlan }) => {
  return (
    <div className="process-container lifecycle-container">
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
        approach to make sure the product looks good on all devices, and adhere
        to{" "}
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
              <h3 className="lifecycle-container__step--title">{step.title}</h3>
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
  );
};

export default LifecycleSection;
