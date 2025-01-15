import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import logoCloud from "../../assets/images/logo-cloud.png";
import logoName from "../../assets/images/logo-name.png";
import heartIcon from "../../assets/icons/headerHeart.svg";
import hireIcon from "../../assets/icons/work-together.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Header Logo Navigating to the top of the page/the home page
  const handleNavigateHome = () => {
    navigate("/");
  };

  // Animated Hamburger Menu Function
  const toggleHamburger = () => {
    setIsActive(!isActive);
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
              <button
                className={`nav-container__item--button ${
                  isScrolled ? "nav-link__scrolled" : ""
                }`}
                type="button"
              >
                My Process
              </button>
            </li>
            <li className="nav-container__item">
              <button
                className={`nav-container__item--button ${
                  isScrolled ? "nav-link__scrolled" : ""
                }`}
                type="button"
              >
                My Work
              </button>
            </li>
            <li className="nav-container__item">
              <button
                className={`nav-container__item--button ${
                  isScrolled ? "nav-link__scrolled" : ""
                }`}
                type="button"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <nav className="nav-container">
          <ul className="nav-container__list">
            <li className="nav-container__item"></li>
            <li className="nav-container__item"></li>
            <li className="nav-container__item"></li>
            <li className="nav-container__item"></li>
          </ul>
        </nav>
      </div>
      <div className="header__home">
        <div className="header__logo-container">
          <img
            className={`header__logo-cloud ${
              isScrolled ? "header__logo-cloud--scrolled" : ""
            }`}
            src={logoCloud}
            alt="cloud logo and link to the home page"
            onClick={handleNavigateHome}
          />
          <img
            className={`header__logo-name ${
              isScrolled ? "header__logo-name--scrolled" : ""
            }`}
            src={logoName}
            alt="first and last name link to the home page"
            onClick={handleNavigateHome}
          />
        </div>
        <div className="header__container">
          <div
            className={`header__hire ${
              isScrolled ? "header__hire--scrolled" : ""
            }`}
          >
            <h4
              className={`header__hire-tag ${
                isScrolled ? "header__hire-tag--scrolled" : ""
              }`}
            >
              Let's Talk
            </h4>
          </div>
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
        </div>
      </div>
      <div className="header__links"></div>
    </header>
  );
};

export default Header;
