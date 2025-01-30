import { useState, useEffect, useRef, useCallback } from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import HeroCanvas from "../../components/HeroCanvas/HeroCanvas";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import "./LandingPage.scss";

// Configuration object for Intersection Observer
// Threshold of 0.2 means callback triggers when 20% of element is visible
const OBSERVER_OPTIONS = {
  root: null,
  threshold: 0.2,
};

/**
 * LandingPage Component
 * @component
 */

const LandingPage = ({ contactRef, projectsRef, headerHeight }) => {
  // State management for section visibility animations
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  // Refs for section visibility tracking
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // Function for handing smooth scrolling to target section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top;
      const scrollY = window.scrollY + elementTop - headerHeight; // Adjust for fixed header height
      window.scrollTo({
        top: scrollY,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Intersection Observer Callback
    // Visibility state management function
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        // About section visibility
        if (entry.target === aboutSectionRef.current && entry.isIntersecting) {
          setIsAboutVisible(true);
          observer.unobserve(entry.target);
        }
        // Projects section visibility
        if (entry.target === projectsRef.current && entry.isIntersecting) {
          setIsProjectsVisible(true);
          observer.unobserve(entry.target);
        }
        // Contact section visibility
        if (
          entry.target === contactSectionRef.current &&
          entry.isIntersecting
        ) {
          setIsContactVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };

    // Initialize observer with callback and options
    const observer = new IntersectionObserver(
      observerCallback,
      OBSERVER_OPTIONS
    );

    // Start observing sections if refs are available
    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    if (contactSectionRef.current) {
      observer.observe(contactSectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
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
        <p
          className="line-container__title"
          onClick={() => scrollToSection(aboutSectionRef)}
        >
          this way
        </p>
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
      <section className="projects-section" ref={projectsRef}>
        <div
          className={`projects-wrapper ${
            isProjectsVisible ? "projects-wrapper__visible" : ""
          }`}
        >
          <ProjectsSection isVisible={isProjectsVisible} />
        </div>
      </section>
      <section className="contact-section" ref={contactRef}>
        <div
          ref={contactSectionRef}
          className={`contact-wrapper ${
            isContactVisible ? "contact-wrapper__visible" : ""
          }`}
        >
          <ContactSection headerHeight={headerHeight} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
