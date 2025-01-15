import heartIcon from "../../assets/icons/heart-check.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <hr className="footer__divider" />
      <div className="footer-container">
        <div className="footer-container__icons">hi</div>
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
