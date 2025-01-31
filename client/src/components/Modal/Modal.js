import { Link } from "react-router-dom";
import "./Modal.scss";

const Modal = ({
  isOpen,
  onClose,
  scrollToSection,
  projectsRef,
  contactRef,
}) => {
  const handleScrollToSection = (ref) => {
    scrollToSection(ref);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "modal--open" : ""}`}>
      <nav className="modal__nav">
        <ul className="modal__list">
          <li className="modal__item">
            <Link to={"/my-process"} className="modal__link" onClick={onClose}>
              My Process.
            </Link>
          </li>
          <hr className="modal__divider" />
          <li className="modal__item">
            <button
              onClick={() => handleScrollToSection(projectsRef)}
              className="modal__link"
            >
              My Work.
            </button>
          </li>
          <hr className="modal__divider" />
          <li className="modal__item">
            <button
              onClick={() => handleScrollToSection(contactRef)}
              className="modal__link"
            >
              Contact Me.
            </button>
          </li>
          <hr className="modal__divider" />
          <li className="modal__item">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="modal__link"
            >
              Resume.
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Modal;
