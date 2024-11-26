import "./LandingPage.scss";
// import headshot from "../../assets/images/headshot.svg";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="headshot-wrapper">
        <div className="headshot-wrapper__container">
          <img
            className="headshot-wrapper__image"
            // src={headshot}
            alt="headshot photo of Nick, the one who made this website"
          />
        </div>
        <div className="landing-page__text-container">
          <h1 className="landing-page__text-container--h1">
            Hi, my name is <span className="">Nick</span>
          </h1>
          <div className="landing-page__cube-container">
            <h2 className="landing-page__text-container--h2">I am a</h2>
            <div className="landing-page__rotating-cube">
              <div className="cube">
                <div className="face front">software engineer</div>
                <div className="face top">web developer</div>
                <div className="face back">UX designer</div>
                <div className="face bottom">creative developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
