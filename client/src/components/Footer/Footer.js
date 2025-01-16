import heartIcon from "../../assets/icons/heart-check.svg";
import ghLogoBlack from "../../assets/icons/gh-logo-black.svg";
// import ghNameBlack from "../../assets/icons/gh-black.png";
import linkedInLogo from "../../assets/icons/linkedin-logo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <hr className="footer__divider" />
      <div className="footer-container">
        <div className="footer-container__icons">
          <img className="footer-container__icons--github" src={ghLogoBlack} />
          <img
            className="footer-container__icons--linkedin"
            src={linkedInLogo}
          />
        </div>
        <p className="footer-container__copyright">
          Handcrafted by me | Nicholas Doucette © 2025
        </p>
        <div className="footer-container__outro">
          <p className="footer-container__made-with">Made with</p>
          <img className="footer-container__heart-icon" src={heartIcon} />
          <p className="footer-container__love">Love</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
