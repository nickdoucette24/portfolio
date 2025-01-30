import React from "react";
import "./BehindCodeSection.scss";

const BehindCodeSection = () => {
  return (
    <div className="process-container behind-container">
      <h1 className="process-container__heading behind-container__heading">
        Behind my code.
      </h1>
      <hr className="process-container__divider behind-container__divider" />
      <p className="process-container__text behind-container__text">
        I look at every project as an opportunity to make the world a little bit
        cleaner, a little bit more efficient, and a little bit prettier.
      </p>
      <p className="process-container__text process-container__text--bottom behind-container__text">
        I find a lot of fulfillment when creating things I know have been built
        with effort and care. I write every line to ensure a{" "}
        <span className="process-container__text--bold behind-container__text">
          silky smooth
        </span>{" "}
        experience, every time.
      </p>
    </div>
  );
};

export default BehindCodeSection;
