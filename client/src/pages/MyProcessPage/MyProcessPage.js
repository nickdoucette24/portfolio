import ProcessSection from "../../components/ProcessSection/ProcessSection";
import Footer from "../../components/Footer/Footer";
import "./MyProcessPage.scss";

const MyProcessPage = () => {
  return (
    <main className="process-page" role="main">
      <article className="process-content">
        <ProcessSection />
      </article>
      <footer className="footer-wrapper">
        <Footer />
      </footer>
    </main>
  );
};

export default MyProcessPage;
