// import { useState, useEffect } from "react";
import { useState, useEffect, useRef } from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import HeroCanvas from "../../components/HeroCanvas/HeroCanvas";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import "./LandingPage.scss";

const LandingPage = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === aboutSectionRef.current && entry.isIntersecting) {
          setIsAboutVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
        if (
          entry.target === projectsSectionRef.current &&
          entry.isIntersecting
        ) {
          setIsProjectsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
        if (
          entry.target === contactSectionRef.current &&
          entry.isIntersecting
        ) {
          setIsContactVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }
    if (projectsSectionRef.current) {
      observer.observe(projectsSectionRef.current);
    }
    if (contactSectionRef.current) {
      observer.observe(contactSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
      if (projectsSectionRef.current) {
        observer.unobserve(projectsSectionRef.current);
      }
      if (contactSectionRef.current) {
        observer.unobserve(contactSectionRef.current);
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
        <div
          ref={projectsSectionRef}
          className={`projects-wrapper ${
            isProjectsVisible ? "projects-wrapper__visible" : ""
          }`}
        >
          <ProjectsSection isVisible={isProjectsVisible} />
        </div>
      </section>
      <section className="contact-section">
        <div
          ref={contactSectionRef}
          className={`contact-wrapper ${
            isContactVisible ? "contact-wrapper__visible" : ""
          }`}
        >
          <ContactSection />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
