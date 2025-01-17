import errorIcon from "../../assets/icons/error-icon.svg";
import "./ErrorMessage.scss";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <img className="error-container__icon" src={errorIcon} />
      <p className="error-container__message">{message}</p>
    </div>
  );
};

export default ErrorMessage;
