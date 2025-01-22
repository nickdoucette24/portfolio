import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser"; // Move to form component when made
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./ContactSection.scss";

const ContactSection = ({ headerHeight }) => {
  const [selectedTile, setSelectedTile] = useState(null);
  const [selectedSecondTile, setSelectedSecondTile] = useState(null);
  const [selectedThirdTiles, setSelectedThirdTiles] = useState([]);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    request: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const dividerRef = useRef(null);

  const handleFieldInput = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleFormClear = (event) => {
    event.preventDefault();
    setFormValues({
      name: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  const validate = () => {
    let formErrors = {};
    if (!formValues.name) formErrors.name = "Your Name is required.";
    if (!formValues.email) formErrors.email = "Your Email is required.";
    if (!formValues.request)
      formErrors.request = "You need to select your request pathway.";
    if (!formValues.message)
      formErrors.message = "A quick message is required.";
    return formErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      try {
        const payload = {
          name: formValues.name,
          email: formValues.email,
          request: formValues.request,
          message: formValues.message,
        };

        const result = await emailjs.send(
          "service_9g4pa2o",
          "template_one",
          payload,
          "UXUxN9P8Zlf-lVhfS"
        );
        alert(
          "Message Sent Successfully! I'll get back to you as soon as I can."
        );
        console.log("EmailJS Response: ", result.text);

        handleFormClear(event);
      } catch (error) {
        console.error("EmailJS Error: ", error);
        setErrors({ form: "Unable to Send Message! Please try again later." });
      }
    }
  };

  const handleSelect = (tile) => {
    setSelectedTile(tile);
    setSelectedSecondTile(null);
    setSelectedThirdTiles([]);
    scrollToDivider();
  };

  const handleSecondSelect = (tile) => {
    setSelectedSecondTile(tile);
    setSelectedThirdTiles([]); // Clear third-row selections on second-row change
    scrollToDivider();
  };

  const handleThirdSelect = (tile) => {
    setSelectedThirdTiles((prev) => {
      // Allow multiple selections only for "Feature Additions & Updates"
      if (selectedSecondTile === "Feature Additions & Updates") {
        if (prev.includes(tile)) {
          return prev.filter((item) => item !== tile); // Deselect
        } else if (prev.length < 3) {
          return [...prev, tile]; // Add up to 3 selections
        }
        return prev;
      } else {
        return [tile]; // Single selection for other second-row options
      }
    });
    scrollToDivider();
  };

  const scrollToDivider = () => {
    setTimeout(() => {
      if (dividerRef.current) {
        const dividerTop = dividerRef.current.getBoundingClientRect().top;
        const scrollY = window.scrollY + dividerTop - headerHeight;
        window.scrollTo({
          top: scrollY,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  useEffect(() => {
    const generateSubject = () => {
      let baseSubject = selectedTile || "";
      if (selectedSecondTile) baseSubject += ` - ${selectedSecondTile}`;
      if (selectedThirdTiles.length > 0) {
        baseSubject += ` - ${selectedThirdTiles.join(", ")}`;
      }
      return baseSubject;
    };

    setFormValues((prev) => ({
      ...prev,
      request: generateSubject(),
    }));
  }, [selectedTile, selectedSecondTile, selectedThirdTiles]);

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
      ?.subOptions;

  const showContactForm =
    (selectedThirdTiles.length > 0 && selectedSecondTile) ||
    (selectedSecondTile && (!thirdRowOptions || thirdRowOptions.length === 0));

  return (
    <div className="contact">
      <h2 className="contact__heading">Get in touch with me.</h2>
      <hr className="contact__divider" ref={dividerRef} />
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
            <hr className="contact__row--divider" ref={dividerRef} />
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
            <hr className="contact__row--divider" ref={dividerRef} />
            <div className="contact__row contact__row--third">
              {thirdRowOptions.map((option, index) => (
                <div
                  className={`contact__tile ${
                    selectedThirdTiles.includes(option.heading)
                      ? "tile-hovered"
                      : ""
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
            <hr className="contact__row--divider" ref={dividerRef} />
            <div className="contact-form">
              <h3 className="contact-form__heading">Shoot me a message.</h3>
              <hr className="contact-form__divider" />
              <p className="contact-form__description">
                Based on your selection, your message will be routed to me
                accordingly!
              </p>
              <form className="contact-form__fields" onSubmit={handleSubmit}>
                <div className="contact-form__info">
                  <div className="contact-form__group">
                    <label htmlFor="name" className="contact-form__label">
                      Your Name
                    </label>
                    <input
                      className="contact-form__input"
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleFieldInput}
                      value={formValues.name}
                      placeholder="Enter your name"
                    />
                    {errors.name && <ErrorMessage message={errors.name} />}
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="email" className="contact-form__label">
                      Your Email
                    </label>
                    <input
                      className="contact-form__input"
                      type="email"
                      id="email"
                      onChange={handleFieldInput}
                      name="email"
                      value={formValues.email}
                      placeholder="Enter your email"
                    />
                    {errors.email && <ErrorMessage message={errors.email} />}
                  </div>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="request" className="contact-form__label">
                    Request
                  </label>
                  <input
                    className="contact-form__input"
                    type="text"
                    id="request"
                    name="request"
                    value={formValues.request}
                    onChange={handleFieldInput}
                    readOnly
                  />
                  {errors.request && <ErrorMessage message={errors.request} />}
                </div>
                <div className="contact-form__group">
                  <label htmlFor="message" className="contact-form__label">
                    Your Message
                  </label>
                  <textarea
                    className="contact-form__textarea"
                    id="message"
                    name="message"
                    rows="8"
                    value={formValues.message}
                    onChange={handleFieldInput}
                    autoComplete="off"
                    placeholder="Please write the details for your message here."
                  ></textarea>
                  {errors.message && <ErrorMessage message={errors.message} />}
                </div>
                <button
                  type="submit"
                  className="contact-form__submit"
                  onSubmit={handleSubmit}
                >
                  Send Message
                </button>
              </form>
            </div>
          </>
        )}
      </div>
      <div />
    </div>
  );
};

export default ContactSection;
