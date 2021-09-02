// Importing Helpers
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Importing Components
import MenuItem from "../menu-item/Menu-Item-Component";

// Importing Selector
import { selectDirectorySection } from "../../redux/directory/Directory-Selector";

// Importing Styles
import { DirectoryMenuContainer } from "./Directory-Styles";

// Class Component
const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

// HOF
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

// Default Export
export default connect(mapStateToProps)(Directory);
