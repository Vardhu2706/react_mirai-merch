// Sign Up Component

// Importing Helpers
import React from "react";
import { auth, createUserProfile } from "../../firebase/Firebase-Utils";

// Importing Components
import FormInput from "../form-input/Form-Input-Component";
import CustomButton from "../custom-button/Custom-Button-Component";

// Importing Styles
import "./Sign-Up-Styles.scss";

// Class Component
class SignUp extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    // State Variables
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  //  Handle Submit
  handleSubmit = async (event) => {
    // Preventing default form submit action
    event.preventDefault();

    // Getting variables stored in state
    const { displayName, email, password, confirmPassword } = this.state;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // If passwords match, try creating the user
    try {
      // Creating the user in Firebase Auth
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // Pushing the created user to Firestore
      await createUserProfile(user, { displayName });

      // Resetting state variables once user is created and pushed
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      // If error, log error
      console.log("Error Signing Up: ", error.message);
    }
  };

  // Handle Change
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Render
  render() {


    // Return
    return (
      <div className="sign-up">
        <h1 className="title">I do not have an account</h1>
        <span>Sign up with an email and password.</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          {/* Display Name */}
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />

          {/* Email */}
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          {/* Password */}
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          {/* Confirm Password */}
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          {/* Sign Up Button */}
          <div className="button">
            <CustomButton type="submit" style={{ width: "100%" }}>
              SIGN UP
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

// Default Export
export default SignUp;
