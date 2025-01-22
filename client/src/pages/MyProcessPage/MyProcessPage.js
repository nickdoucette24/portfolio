import IntroSection from "../../components/IntroSection/IntroSection";
import Footer from "../../components/Footer/Footer";
import "./MyProcessPage.scss";

const MyProcessPage = () => {
  return (
    <div className="process-page">
      <div className="intro-wrapper">
        <IntroSection />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default MyProcessPage;
