// Importing Helpers
import React from "react";

// Importing Styles
import "./Custom-Button-Styles.scss";

// Functional Component
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

// Default Export
export default CustomButton;
