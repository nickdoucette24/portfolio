// import { useState, useEffect } from "react";
import { useState, useEffect, useRef } from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import "./LandingPage.scss";

const LandingPage = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) {
          setIsAboutVisible(true);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    const currentRef = aboutSectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="landing-page">
      <section className="hero-wrapper">
        <div className="hero-wrapper__text">
          <h1 className="hero-wrapper__text--hello">Hello,</h1>
          <div className="hero-wrapper__text--group">
            <h2 className="hero-wrapper__text--h2">my name is</h2>
            <h2 className="hero-wrapper__text--h2">
              <span className="hero-wrapper__text--highlight">Nick</span>.
            </h2>
          </div>
          <div className="hero-wrapper__cube-container">
            <h4 className="hero-wrapper__text--h4">I am a</h4>
            <div className="hero-wrapper__rotating-cube">
              <div className="cube">
                <div className="face front">
                  software engineer<span className="face__period">.</span>
                </div>
                <div className="face bottom">
                  web developer<span className="face__period">.</span>
                </div>
                <div className="face back">
                  UX designer<span className="face__period">.</span>
                </div>
                <div className="face top">
                  creative<span className="face__period">.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="landing-page__line-container">
        <p className="landing-page__line-container--title">this way</p>
        <div className="landing-page__line-container--line"></div>
      </div>
      <div className="about-section">
        <div
          ref={aboutSectionRef}
          className={`about-wrapper ${
            isAboutVisible ? "about-wrapper__visible" : ""
          }`}
        >
          <AboutSection />
        </div>
      </div>
      <div className="projects-section">
        <div className="projects-wrapper">
          <ProjectsSection />
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-wrapper">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
