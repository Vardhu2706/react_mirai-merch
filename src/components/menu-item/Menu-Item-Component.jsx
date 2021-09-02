// Importing Helpers
import React from "react";
import { withRouter } from "react-router-dom";

// Importing Components

// Importing Styles
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./Menu-Item-Styles";

// Functional Component
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <ContentContainer>
      <ContentTitle>{title}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

// Default Export
export default withRouter(MenuItem);
