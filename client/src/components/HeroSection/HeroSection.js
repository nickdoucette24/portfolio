import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <div className="hero__text--group">
          <h1 className="hero__text--hello">Hello,</h1>
          <div className="hero__text--groupTwo">
            <h2 className="hero__text--h2">I'm</h2>
            <h2 className="hero__text--highlight">
              Nick<span className="hero__text--period">.</span>
            </h2>
          </div>
        </div>
        <div className="hero__cube-container">
          <h4 className="hero__text--h4">I'm a</h4>
          <div className="hero__rotating-cube">
            <div className="cube">
              <div className="face front">
                software engineer<span className="face__period">.</span>
              </div>
              <div className="face bottom">
                web developer<span className="face__period">.</span>
              </div>
              <div className="face back">
                UX designer<span className="face__period">.</span>
              </div>
              <div className="face top">
                creative<span className="face__period">.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
