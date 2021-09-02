// Importing Helpers
import React from "react";
import { Helmet } from "react-helmet";

// Importing Components
import SignIn from "../../components/sign-in/Sign-In-Component";
import SignUp from "../../components/sign-up/Sign-Up-Component";

// Importing Styles
import { SignInAndSignUpContainer } from "./Sign-In-And-Sign-Up-Styles";

// Functional Component
const SignInAndSignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Mirai Merch | Login </title>
      </Helmet>
      <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
      </SignInAndSignUpContainer>
    </>
  );
};

// Default Export
export default SignInAndSignUpPage;
