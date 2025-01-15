// import { useState, useEffect } from "react";
import { useState, useEffect, useRef } from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import HeroCanvas from "../../components/HeroCanvas/HeroCanvas";
import HeroSection from "../../components/HeroSection/HeroSection";
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
      <section className="hero-section">
        <div className="hero-wrapper">
          <HeroCanvas />
          <HeroSection />
        </div>
      </section>
      <div className="line-container">
        <p className="line-container__title">this way</p>
        <div className="line-container__line"></div>
      </div>
      <section className="about-section">
        <div
          ref={aboutSectionRef}
          className={`about-wrapper ${
            isAboutVisible ? "about-wrapper__visible" : ""
          }`}
        >
          <AboutSection />
        </div>
      </section>
      <section className="projects-section">
        <div className="projects-wrapper">
          <ProjectsSection />
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-wrapper">
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
