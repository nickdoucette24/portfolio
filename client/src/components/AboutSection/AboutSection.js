import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <div className="about-container">
      <h3>Have an idea? Let's give it some wings.</h3>
      <p>
        I’m a full-stack software engineer based in Ontario, Canada. I craft
        dynamic cloud-based solutions from the ground up, line by line.
      </p>
      <Link>About My Process</Link>
    </div>
  );
};

export default AboutSection;
