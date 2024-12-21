// import { useState, useEffect } from "react";
import "./LandingPage.scss";
// import headshot from "../../assets/images/headshot.JPG";

const LandingPage = () => {
  // const [borderPosition, setBorderPosition] = useState({ x: 0, y: 0 });
  // const [isVisible, setIsVisible] = useState(false);

  // const handleMouseMove = (event) => {
  //   const img = event.target.getBoundingClientRect();
  //   const x = (event.clientX - img.left - img.width / 2) / 20;
  //   const y = (event.clientY - img.top - img.height / 2) / 20;
  //   setBorderPosition({ x, y });
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setIsVisible(true);
  //         }
  //       });
  //     },
  //     { threshold: 0.75 }
  //   );

  //   const target = document.querySelector(".hero-wrapper__headshot");
  //   if (target) {
  //     observer.observe(target);
  //   }
  //   return () => {
  //     if (target) {
  //       observer.unobserve(target);
  //     }
  //   };
  // }, []);

  return (
    <section className="landing-page">
      <div className="hero-wrapper">
        <div className="hero-wrapper__text">
          <h1 className="hero-wrapper__text--hello">Hello,</h1>
          <div className="hero-wrapper__text--group">
            <h2 className="hero-wrapper__text--h2">my name is</h2>
            <h2 className="hero-wrapper__text--h2">
              <span className="hero-wrapper__text--highlight">Nick</span>.
            </h2>
          </div>
          <div className="hero-wrapper__cube-container">
            <h4 className="hero-wrapper__text--h4">I'm a</h4>
            <div className="hero-wrapper__rotating-cube">
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
      <div className="landing-page__line-container">
        <p className="landing-page__line-container--title">this way</p>
        <div className="landing-page__line-container--line"></div>
      </div>
      {/* <div
          className={`hero-wrapper__headshot ${isVisible ? "fade-in" : ""}`}
          onMouseMove={handleMouseMove}
        >
          <img
            className={`hero-wrapper__headshot--img ${
              isVisible ? "fade-in" : ""
            }`}
            src={headshot}
            alt="headshot of Nick, the one who made this website"
            style={{
              boxShadow: `${-borderPosition.x}px ${-borderPosition.y}px 0 2px var(--ice-blue)`,
            }}
          />
          <p className="hero-wrapper__headshot--text">
            Here's a photo of me looking professional so you know I'm real!
          </p>
        </div> */}
    </section>
  );
};

export default LandingPage;
