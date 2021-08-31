// Header Component

// Importing Helpers
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/Firebase-Utils";
import { connect } from "react-redux";

// Importing Components
import CartIcon from "../cart-icon/Cart-Icon-Component";

// Importing Styles
import "./Header-Styles.scss";
import CartDropdown from "../cart-dropdown/Cart-Dropdown-Component";

// Functional Component
const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
    {hidden && <CartDropdown />}
  </div>
);

// HOT to access Redux state
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

// Default Export
export default connect(mapStateToProps)(Header);
