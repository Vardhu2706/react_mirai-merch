// Importing Helpers
import React from "react";

// Importing Components
import FormInput from "../form-input/Form-Input-Component";
import CustomButton from "../custom-button/Custom-Button-Component";
import { signInWithGoogle } from "../../firebase/Firebase-Util";

// Importing Styles
import "./Sign-In-Styles.scss";

// Class Component
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  // Handle Submit
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  // Handle Change
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
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
          <div className="buttons">
            <CustomButton type="submit">Login</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google Login
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

// Default Export
export default SignIn;
