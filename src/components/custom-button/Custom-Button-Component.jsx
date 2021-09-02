// Importing Helpers
import React from "react";

// Importing Styled Components
import { CustomButtonContainer } from "./Custom-Button-Styles";

// Functional Component
const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

// Default Export
export default CustomButton;
