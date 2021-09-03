// With-Spinner Component

// Importing Helpers
import React from "react";

// Importing Styles
import { SpinnerOverlay, SpinnerContainer } from "./With-Spinner-Styles";

// HOF
const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

// Default Exports
export default WithSpinner;
