import React from "react";

const ErrorMessage: React.FC = () => {
  return (
    <div className="error-message">
      <h4 style={{ color: "white" }}>Oops something went wrong!</h4>
      <p style={{ color: "white" }}>Please try restarting your browser</p>
    </div>
  );
};

export default ErrorMessage;
