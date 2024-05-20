import React from "react";

const ErrorMessage: React.FC = () => {
  return (
    <div className="error-message">
      <h4 style={{ color: "white", textAlign: "center" }}>
        Oops something went wrong!
      </h4>
      <p style={{ color: "white", textAlign: "center" }}>
        Please try restarting your browser
      </p>
    </div>
  );
};

export default ErrorMessage;
