import { useState } from "react";
import "./ContactSection.scss";

const ContactSection = () => {
  const [selectedTile, setSelectedTile] = useState(null);

  const handleSelect = (tile) => {
    setSelectedTile(tile);
  };

  const contactOptions = {
    "Websites & Web Apps": [
      {
        heading: "Feature Additions & Updates",
        description: "Enhance or update an existing website or web app.",
      },
      {
        heading: "New Project",
        description: "Start a new custom website or web app.",
      },
      {
        heading: "Bug Fixes & Maintenance",
        description: "Fix issues or maintain your current project.",
      },
    ],
    "Collaborations & Opportunities": [
      {
        heading: "Partnerships & Team Projects",
        description: "Collaborate on software or web development projects.",
      },
      {
        heading: "Freelance Work for Hire",
        description: "Hire me for a one-off freelance job.",
      },
      {
        heading: "Employment Opportunities",
        description: "Contact me about full-time or contract roles.",
      },
    ],
  };
  return (
    <div className="contact">
      <h2 className="contact__heading">Get in touch with me.</h2>
      <hr className="contact__divider" />
      <div className="contact__container">
        <div className="contact__row">
          <div
            className={`contact__tile ${
              selectedTile === "Websites & Web Apps" ? "tile-hovered" : ""
            }`}
            onClick={() => handleSelect("Websites & Web Apps")}
          >
            <h3 className="contact__tile--heading">Websites & Web Apps</h3>
            <p className="contact__tile--description">
              For clients interested in having a website or web application
              developed.
            </p>
          </div>
          <div
            className={`contact__tile ${
              selectedTile === "Collaborations & Opportunities"
                ? "tile-hovered"
                : ""
            }`}
            onClick={() => handleSelect("Collaborations & Opportunities")}
          >
            <h3 className="contact__tile--heading">
              Collaborations & Opportunities
            </h3>
            <p className="contact__tile--description">
              For inquiries about partnerships, collaborations, or employment
              opportunities.
            </p>
          </div>
        </div>
        {selectedTile && (
          <>
            <hr className="contact__row--divider" />
            <div className="contact__row contact__row--second">
              {contactOptions[selectedTile].map((option, index) => (
                <div
                  className={`contact__tile ${
                    selectedTile === option.heading ? "tile-hovered" : ""
                  }`}
                  key={index}
                  onClick={() => handleSelect(option.heading)}
                >
                  <h3 className="contact__tile--heading">{option.heading}</h3>
                  <p className="contact__tile--description">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
