// Importing Helpers
import React from "react";

// Importing Components

// Importing Styles
import "./Menu-Item-Styles.scss";

// Functional Component
const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
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
export default MenuItem;
