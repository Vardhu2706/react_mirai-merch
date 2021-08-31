// Importing Helpers
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/Firebase-Utils";
import { connect } from "react-redux";

// Importing Components

// Importing Styles
import "./Header-Styles.scss";

// Functional Component
const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      Mirai Merch
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

// HOT to access Redux state
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// Default Export
export default connect(mapStateToProps)(Header);
