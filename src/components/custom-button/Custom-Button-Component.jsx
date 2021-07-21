// Importing Helpers
import React from "react";

// Importing Styles
import "./Custom-Button-Styles.scss";

// Functional Component
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

// Default Export
export default CustomButton;
