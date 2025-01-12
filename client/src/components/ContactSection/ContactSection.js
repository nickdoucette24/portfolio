import "./ContactSection.scss";

const ContactSection = () => {
  return (
    <div className="contact">
      <h2 className="contact__heading">Get in touch with me.</h2>
      <hr className="contact__divider" />
      <div className="contact__row">
        <div className="contact__tile">
          <h3 className="contact__tile--heading">Websites & Web Apps</h3>
          <p className="contact__tile--description">
            For clients interested in having a website or web application
            developed.
          </p>
        </div>
        <div className="contact__tile">
          <h3 className="contact__tile--heading">
            Collaborations & Opportunities
          </h3>
          <p className="contact__tile--description">
            For inquiries about partnerships, collaborations, or employment
            opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
