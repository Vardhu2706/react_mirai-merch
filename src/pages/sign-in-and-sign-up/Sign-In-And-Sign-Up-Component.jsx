// Importing Helpers
import React from "react";
import { Helmet } from "react-helmet";

// Importing Components
import SignIn from "../../components/sign-in/Sign-In-Component";
import SignUp from "../../components/sign-up/Sign-Up-Component";

// Importing Styles
import "./Sign-In-And-Sign-Up-Styles.scss";

// Functional Component
const SignInAndSignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Mirai Merch | Login </title>
      </Helmet>
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

// Default Export
export default SignInAndSignUpPage;
