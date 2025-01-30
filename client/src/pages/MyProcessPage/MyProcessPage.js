import HeroCanvas from "../../components/HeroCanvas/HeroCanvas";
import ProcessSection from "../../components/ProcessSection/ProcessSection";
import Footer from "../../components/Footer/Footer";
import "./MyProcessPage.scss";

const MyProcessPage = () => {
  return (
    <>
      <main className="process-page" role="main">
        <article className="process-content">
          <HeroCanvas />
          <ProcessSection />
        </article>
      </main>
      <footer className="footer-wrapper">
        <Footer />
      </footer>
    </>
  );
};

export default MyProcessPage;
