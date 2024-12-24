import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import heartIcon from "../../assets/icons/headerHeart.svg";
import workTogetherIcon from "../../assets/icons/work-together.svg";

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
        <img
          className={`header__logo ${
            isScrolled ? "header__logo--scrolled" : ""
          }`}
          src={logo}
          alt="nickd development logo and link to the home page"
          onClick={handleNavigateHome}
        />
        <div className="header__container">
          <img className="header__container--icon" src={workTogetherIcon} />
          <Link
            className={`header__container--link ${
              isScrolled ? "cta-scrolled" : ""
            }`}
          >
            Work Together
          </Link>
          <div className="header__container--hamburger">
            <button
              className={`hamburger hamburger--spring ${
                isActive ? "is-active" : ""
              }`}
              type="button"
              onClick={toggleHamburger}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="header__links">
        <button className={`header__cta ${isScrolled ? "cta-scrolled" : ""}`}>
          Work Together
        </button>
        <Link to={"/forthedogs"} className="header__z--link">
          <img
            className="header__z"
            src={heartIcon}
            alt="heart icon and link to the for the dogs page"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
