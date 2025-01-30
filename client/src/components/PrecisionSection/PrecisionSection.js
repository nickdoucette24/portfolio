import React from "react";
import "./PrecisionSection.scss";

const PrecisionSection = () => {
  return (
    <div className="precision-container__content">
      {/* <img className="process-container__img" src={precisionImg} /> */}
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
        and its code is built for maximum efficiency and readability. Every
        pixel of space is{" "}
        <span className="process-container__text--bold">deliberate</span>, every
        animation is{" "}
        <span className="process-container__text--bold">thought out</span>, and
        every path the user takes is{" "}
        <span className="process-container__text--bold">
          planned and prepared
        </span>{" "}
        for.
      </p>
    </div>
  );
};

export default PrecisionSection;
