// Header Component

// Importing Helpers
import React from "react";
import { auth } from "../../firebase/Firebase-Utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Importing Selectors
import { selectCartHidden } from "../../redux/cart/Cart-Selector";
import { selectCurrentUser } from "../../redux/user/User-Selector";

// Importing Components
import CartIcon from "../cart-icon/Cart-Icon-Component";
import CartDropdown from "../cart-dropdown/Cart-Dropdown-Component";

// Importing Styled Components
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./Header-Styles";

// Functional Component
const Header = ({ currentUser, hidden }) => (
  <>
    <HeaderContainer>
      <LogoContainer to="/">Mirai Merch</LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        {/* <OptionLink to="/contact">CONTACT</OptionLink> */}
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden && <CartDropdown />}
    </HeaderContainer>
  </>
);

// HOF to access Redux state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// Default Export
export default connect(mapStateToProps)(Header);
