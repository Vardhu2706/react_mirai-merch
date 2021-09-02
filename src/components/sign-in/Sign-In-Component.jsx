// Importing Helpers
import React from "react";
import { auth, signInWithGoogle } from "../../firebase/Firebase-Utils";

// Importing Components
import FormInput from "../form-input/Form-Input-Component";
import CustomButton from "../custom-button/Custom-Button-Component";

// Importing Styles
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./Sign-In-Styles";

// Class Component
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    // State Variables
    this.state = {
      email: "",
      password: "",
    };
  }

  // Handle Submit
  handleSubmit = async (event) => {
    // Preventing default form submit action
    event.preventDefault();

    // Getting Email and Password entered stored in state
    const { email, password } = this.state;

    // Try logging in with given email and password
    try {
      // Sign In With Email And Password
      await auth.signInWithEmailAndPassword(email, password);

      // Reset Email and Password variables in state after signing in
      this.setState({ email: "", password: "" });
    } catch (error) {
      // If error, log error
      alert("Login failed: Please check your login details.");
      console.log("Error signing in: ", error.message);
    }
  };

  // Handle Change
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I have an account</SignInTitle>
        <span>Sign in with your email and password.</span>

        {/* Form */}
        <form onSubmit={this.handleSubmit}>
          {/* Email */}
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            handleChange={this.handleChange}
            label="Email"
            required
          />

          {/* Password */}
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit">Login</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
              type="button"
            >
              Google Login
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

// Default Export
export default SignIn;
