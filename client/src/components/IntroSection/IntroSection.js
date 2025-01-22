import React from "react";

const IntroSection = () => {
  return (
    <section className="process-section">
      <div className="process-intro">
        <h1 className="process-intro__heading">Behind my code.</h1>
        <p className="process-intro__text">
          Every line of code I write is an opportunity to raise the standard of
          content in the world. While that sentiment is of minimal importance to
          most people, I find vast fulfillment in spending time writing crystal
          clear code which provides the user a silky smooth and perfectly
          optimized experience.
        </p>
      </div>
      <div className="process-precision">
        <h1 className="process-precision__heading">
          Precision in Development.
        </h1>
        <p className="process-precision__text">
          I adapt my process to each project, ensuring its design is hitting the
          right target demographic and its code is built for maximum efficiency
          and scalability. Every pixel of space is deliberate, every animation
          is thought out, and every direction the user takes is planned and
          prepared for.
        </p>
      </div>
      <div className="process-stack">
        <h1 className="process-stack__heading">My Toolbox.</h1>
        <div className="process-stack__container">
          <div className="process-stack__titles">
            <ul>
              <li>Client-Side</li>
              <li>Server-Side</li>
              <li>Deployment</li>
              <li>Design</li>
              <li>Development</li>
              <li>Methodologies</li>
            </ul>
          </div>
          <hr />
          <div className="process-stack__icons">
            <ul>
              <li>
                <img />
                <p3>React.js</p3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="process-workflow">
        <h1 className="process-workflow__heading">Project Lifecycle.</h1>
        <p className="process-workflow__text">
          From ideation to deployment, I follow a structured yet flexible
          workflow tailored to each project’s needs. A mobile-first approach and
          adherence to BEM, Accessible Development, and RESTful API logic ensure
          my projects are scalable and future-proof.
          Plan-Build-Test-Refine-Deploy.
        </p>
      </div>
      <div className="process-accessibility">
        <h1 className="process-accessibility__heading">
          Accessibility Matters.
        </h1>
        <p className="process-accessibility__text">
          Inclusion and usability is at the heart of my web development process.
          With the use of methodologies like ARIA roles and semantic HTML, every
          project follows the industry-standard best practices for ensuring
          usability for all users, regardless of their ability.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
