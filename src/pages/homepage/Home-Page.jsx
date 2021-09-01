// Importing Helpers
import React from "react";
import { Helmet } from "react-helmet";

// Importing Components
import Directory from "../../components/directory/Directory-Component";

// Importing Styles
import "./Home-Styles.scss";

// Functional Component
const HomePage = () => (
  <>
    <Helmet>
      <title>Mirai Merch | Home</title>
    </Helmet>
    <div className="homepage">
      <Directory />
    </div>
  </>
);

// Default Export
export default HomePage;
