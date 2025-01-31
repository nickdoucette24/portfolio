import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/n-logo.png";
import Modal from "../Modal/Modal";

const Header = ({ contactRef, projectsRef }) => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedNav, setSelectedNav] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Header Logo Navigating to the top of the page/the home page
  const handleNavigateHome = () => {
    setSelectedNav("");
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const handleNavClear = () => {
  //   setSelectedNav("");
  // };

  const scrollToSection = (ref, navItem) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSectionHelper(ref, navItem);
      }, 250); // Adjust delay if needed
    } else {
      scrollToSectionHelper(ref, navItem);
    }
  };

  const scrollToSectionHelper = (ref, navItem) => {
    setSelectedNav(navItem);
    if (ref && ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top;
      const scrollY = window.scrollY + elementTop - 80; // Adjust for fixed header height
      window.scrollTo({
        top: scrollY,
        behavior: "smooth",
      });
    }
  };

  const handleProcessClick = () => {
    navigate("/my-process");
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    setSelectedNav("My Process");
  };

  // Animated Hamburger Menu Function
  const toggleHamburger = () => {
    setIsActive(!isActive);
    document.body.style.overflow = !isActive ? "hidden" : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__navs">
        <nav className="nav-container">
          <ul className="nav-container__list">
            <li className="nav-container__item">
              <Link
                className={`nav-container__item--link ${
                  selectedNav === "My Process" ? "nav-link__selected" : ""
                } ${isScrolled ? "nav-link__scrolled" : ""}`}
                to={"/my-process"}
                onClick={handleProcessClick}
              >
                My Process
              </Link>
            </li>
            <li className="nav-container__item">
              <button
                className={`nav-container__item--button ${
                  selectedNav === "My Work" ? "nav-link__selected" : ""
                } ${isScrolled ? "nav-link__scrolled" : ""}`}
                onClick={() => scrollToSection(projectsRef, "My Work")}
              >
                My Work
              </button>
            </li>
            <li className="nav-container__item">
              <button
                className={`nav-container__item--button ${
                  selectedNav === "Contact" ? "nav-link__selected" : ""
                } ${isScrolled ? "nav-link__scrolled" : ""}`}
                onClick={() => scrollToSection(contactRef, "Contact")}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__logo-container">
        <img
          className={`header__logo-n ${
            isScrolled ? "header__logo-n--scrolled" : ""
          }`}
          src={logo}
          alt="cloud logo and link to the home page"
          onClick={() => handleNavigateHome()}
        />
      </div>
      <div className="header__container">
        <div className="header__container--hamburger">
          <button
            className={`hamburger hamburger--spring ${
              isActive ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleHamburger}
          >
            <span className="hamburger-box">
              <span
                className={`hamburger-inner ${
                  isScrolled ? "hamburger-scrolled" : ""
                }`}
              ></span>
            </span>
          </button>
        </div>
        <button className="resume-button">
          <a
            className={`resume-button__link ${
              isScrolled ? "resume-button__scrolled" : ""
            }`}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </button>
      </div>
      <Modal
        isOpen={isActive}
        onClose={toggleHamburger}
        scrollToSection={scrollToSection}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </header>
  );
};

export default Header;
