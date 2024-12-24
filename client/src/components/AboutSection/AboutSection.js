import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutSection.scss";

const AboutSection = () => {
  const wordbank = [
    "dynamic",
    "scalable",
    "modern",
    "custom",
    "durable",
    "intuitive",
  ];
  const [currentWord, setCurrentWord] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % wordbank.length);
        setIsFading(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [wordbank.length]);

  return (
    <div className="about-container">
      <div className="heading-container">
        <h2 className="heading-container__small">Let's work together.</h2>
        <h2 className="heading-container__mobile">Let's work together.</h2>
        <h2 className="heading-container__tablet">
          Let's build something together.
        </h2>
        <h2 className="heading-container__laptop">
          Let's build something together, the right way.
        </h2>
      </div>
      <p>
        I’m a full-stack software engineer based in Ontario, Canada. I craft{" "}
        <span className={`rotating-word ${isFading ? "fading" : ""}`}>
          {wordbank[currentWord]}
        </span>{" "}
        cloud-based solutions from the ground up, line by line.
      </p>
      <div className="about-container__button">
        <Link className="about-container__link">About My Process</Link>
      </div>
    </div>
  );
};

export default AboutSection;
