/**
 * @component
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutSection.scss";

const AboutSection = () => {
  // Wordbank for the rotating text animation
  const wordbank = [
    "dynamic",
    "scalable",
    "modern",
    "custom",
    "durable",
    "intuitive",
  ];

  // State management for word rotation animation
  const [currentWord, setCurrentWord] = useState(0);
  // State management for the fade-out/fade-in animation
  const [isFading, setIsFading] = useState(false);

  /**
   * Handles scroll reset when navigating to a new page
   * @function
   */
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  // Word rotation animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        // Use modulo to cycle through wordbank continuously
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
          Let's build something together.
        </h2>
        <hr className="heading-container__divider" />
      </div>
      <p className="about-container__text">
        I'm a full-stack software engineer based in Ontario, Canada. I craft{" "}
        <span className={`rotating-word ${isFading ? "fading" : ""}`}>
          {wordbank[currentWord]}
        </span>{" "}
        cloud-based solutions from the ground up, line by line.
      </p>
      <p className="about-container__text--tablet">
        From smooth{" "}
        <span className="about-container__text--bold">
          single-page applications
        </span>{" "}
        to dynamic{" "}
        <span className="about-container__text--bold">multi-page websites</span>
        , or even fullstack{" "}
        <span className="about-container__text--bold">software systems</span>,
        what you'll find about me is that I always sweat the{" "}
        <span className="about-container__text--little">little</span> details
        that bring your idea to life and provide a top-tier user experience.
      </p>
      <div className="about-container__button">
        <Link
          className="about-container__link"
          to="/my-process"
          onClick={handleScrollToTop}
        >
          About My Process
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
