import "./HeroSection.scss";

// Text content for the rotating cube faces
const CUBE_FACES = {
  front: "software engineer",
  bottom: "web developer",
  back: "UX designer",
  top: "creative",
};

/**
 * Hero Section Component
 * @component
 */
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
                {CUBE_FACES.front}
                <span className="face__period">.</span>
              </div>
              <div className="face bottom">
                {CUBE_FACES.bottom}
                <span className="face__period">.</span>
              </div>
              <div className="face back">
                {CUBE_FACES.back}
                <span className="face__period">.</span>
              </div>
              <div className="face top">
                {CUBE_FACES.top}
                <span className="face__period">.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
