// Importing Helpers
import React from "react";
import { withRouter } from "react-router-dom";

// Importing Components

// Importing Styles
import "./Menu-Item-Styles.scss";

// Functional Component
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

// Default Export
export default withRouter(MenuItem);
