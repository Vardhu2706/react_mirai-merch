// Importing Helpers
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Importing Components
import MenuItem from "../menu-item/Menu-Item-Component";

// Importing Selector
import { selectDirectorySection } from "../../redux/directory/Directory-Selector";

// Importing Styles
import "./Directory-Styles.scss";

// Class Component
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

// HOF
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

// Default Export
export default connect(mapStateToProps)(Directory);
