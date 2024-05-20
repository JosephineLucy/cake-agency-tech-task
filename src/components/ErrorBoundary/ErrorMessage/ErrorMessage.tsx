import React from "react";
import "./styles.scss";

const ErrorMessage: React.FC = () => {
  return (
    <div className="error-message">
      <h4 className="error-message__heading">Oops something went wrong!</h4>
      <p className="error-message__subheading">
        Please try restarting your browser
      </p>
    </div>
  );
};

export default ErrorMessage;
