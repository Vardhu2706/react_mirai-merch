// Importing Helpers
import React from "react";

// Importing Styles
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./Form-Input-Styles";

// Functional Component
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

// Default Export
export default FormInput;
