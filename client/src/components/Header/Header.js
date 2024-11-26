import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import headerLogo from "../../assets/images/headerLogo.svg";
import heartIcon from "../../assets/icons/headerHeart.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  // Header Logo Navigating to the top of the page/the home page
  const handleNavigateHome = () => {
    navigate("/");
  };

  // Animated Hamburger Menu Function
  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <div className="header__navs">
        <nav className="nav-container">
          <ul className="nav-container__list">
            <li className="nav-container__item">
              <button className="nav-container__item--button" type="button">
                About
              </button>
            </li>
            <li className="nav-container__item">
              <button className="nav-container__item--button" type="button">
                My Work
              </button>
            </li>
            <li className="nav-container__item">
              <button className="nav-container__item--button" type="button">
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
          className="header__logo"
          src={headerLogo}
          alt="nickd development logo and link to the home page"
          onClick={handleNavigateHome}
        />
      </div>
      <div className="header__links">
        <button className="header__cta">Work Together</button>
        <Link to={"/forthedogs"} className="header__z--link">
          <img
            className="header__z"
            src={heartIcon}
            alt="heart icon and link to the for the dogs page"
          />
        </Link>
      </div>
      <div className="header__hamburger">
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
    </header>
  );
};

export default Header;
