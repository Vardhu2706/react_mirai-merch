// Importing Helpers
import React from "react";

// Importing Styles
import "./Custom-Button-Styles.scss";

// Functional Component
const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

// Default Export
export default CustomButton;
