// Importing Helpers
import React from "react";
import { Helmet } from "react-helmet";

// Importing Components
import Directory from "../../components/directory/Directory-Component";

// Importing Styled Component
import { HomepageContainer } from "./Home-Styles";

// Functional Component
const HomePage = () => (
  <>
    <Helmet>
      <title>Mirai Merch | Home</title>
    </Helmet>
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  </>
);

// Default Export
export default HomePage;
