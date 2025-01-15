import { useState, useEffect, useRef } from "react";
import "./ContactSection.scss";

const ContactSection = () => {
  const [selectedTile, setSelectedTile] = useState(null);
  const [selectedSecondTile, setSelectedSecondTile] = useState(null);
  const [selectedThirdTile, setSelectedThirdTile] = useState(null);
  const [subject, setSubject] = useState("");
  const bottomRef = useRef(null); // Ref for scrolling to the bottom

  const handleSelect = (tile) => {
    setSelectedTile(tile);
    setSelectedSecondTile(null);
    setSelectedThirdTile(null);
    scrollToBottom();
  };

  const handleSecondSelect = (tile) => {
    setSelectedSecondTile(tile);
    setSelectedThirdTile(null);
    scrollToBottom();
  };

  const handleThirdSelect = (tile) => {
    setSelectedThirdTile(tile);
    scrollToBottom();
  };

  const scrollToBottom = () => {
    // Use setTimeout to ensure DOM updates before scrolling
    setTimeout(() => {
      if (bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  useEffect(() => {
    const generateSubject = () => {
      let baseSubject = selectedTile || "";
      if (selectedSecondTile) baseSubject += ` > ${selectedSecondTile}`;
      if (selectedThirdTile) baseSubject += ` > ${selectedThirdTile}`;
      return baseSubject;
    };

    setSubject(generateSubject());
  }, [selectedTile, selectedSecondTile, selectedThirdTile]);

  const contactOptions = {
    "Websites & Web Apps": [
      {
        heading: "Feature Additions & Updates",
        description: "Enhance or update an existing website or web app.",
        subOptions: [
          {
            heading: "Add Features",
            description:
              "Add new functionalities like a login system or dashboard.",
          },
          {
            heading: "Update Design",
            description: "Revamp the design or layout of your project.",
          },
          {
            heading: "Fix Performance",
            description: "Optimize speed or resolve performance issues.",
          },
        ],
      },
      {
        heading: "New Project",
        description: "Start a new custom website or web app.",
        subOptions: [
          {
            heading: "Website",
            description:
              "Single-page or multi-page, with a focus on the User Interface.",
          },
          {
            heading: "Web App",
            description:
              "A complex web application with user interaction or dynamic content.",
          },
          {
            heading: "Unsure",
            description: "Not sure? Let's brainstorm together.",
          },
        ],
      },
      {
        heading: "Bug Fixes & Maintenance",
        description: "Fix issues or maintain your current project.",
        subOptions: [],
      },
    ],
    "Collaborations & Opportunities": [
      {
        heading: "Partnerships & Team Projects",
        description: "Collaborate on software or web development projects.",
        subOptions: [
          {
            heading: "SaaS Development",
            description: "Looking to build a SaaS product.",
          },
          {
            heading: "Open Source",
            description: "Collaborate on open-source projects.",
          },
          {
            heading: "Other",
            description: "Unique collaboration idea? Let's chat.",
          },
        ],
      },
      {
        heading: "Freelance Work for Hire",
        description: "Hire me for a one-off freelance job.",
        subOptions: [],
      },
      {
        heading: "Employment Opportunities",
        description: "Contact me about full-time or contract roles.",
        subOptions: [],
      },
    ],
  };

  const secondRowOptions = selectedTile ? contactOptions[selectedTile] : [];

  const thirdRowOptions =
    selectedSecondTile &&
    secondRowOptions.find((option) => option.heading === selectedSecondTile)
      .subOptions;

  const showContactForm =
    selectedThirdTile || (selectedSecondTile && thirdRowOptions.length === 0);

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
              {secondRowOptions.map((option, index) => (
                <div
                  className={`contact__tile ${
                    selectedSecondTile === option.heading ? "tile-hovered" : ""
                  }`}
                  key={index}
                  onClick={() => handleSecondSelect(option.heading)}
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
        {selectedSecondTile && thirdRowOptions?.length > 0 && (
          <>
            <hr className="contact__row--divider" />
            <div className="contact__row contact__row--third">
              {thirdRowOptions.map((option, index) => (
                <div
                  className={`contact__tile ${
                    selectedThirdTile === option.heading ? "tile-hovered" : ""
                  }`}
                  key={index}
                  onClick={() => handleThirdSelect(option.heading)}
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
        {showContactForm && (
          <>
            <hr className="contact__row--divider" />
            <div className="contact__form">
              <h3 className="contact__form--heading">Contact Me</h3>
              <p className="contact__form--description">
                Based on your selection, use one of the methods below to reach
                out to me.
              </p>
              <form
                className="contact__form--fields"
                onSubmit={(event) => {
                  event.preventDefault();
                  alert(`Form submitted! Subject: ${subject}`);
                }}
              >
                <div className="contact__form--group">
                  <label htmlFor="name">Your Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="contact__form--group">
                  <label htmlFor="email">Your Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="contact__form--group">
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    readOnly
                  />
                </div>
                <div className="contact__form--group">
                  <label htmlFor="message">Your Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write it here!"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="contact__form--submit">
                  Send Message
                </button>
              </form>
            </div>
          </>
        )}
      </div>
      <div ref={bottomRef} />
    </div>
  );
};

export default ContactSection;
