// Checkout Component

// Importing Helpers
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Helmet } from "react-helmet";

// Importing Selectors
import { selectCartItems, selectTotal } from "../../redux/cart/Cart-Selector";
import { selectCurrentUser } from "../../redux/user/User-Selector";

// Importing Styles
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./Checkout-Styles";

// Importing Components
import CheckoutItem from "../../components/checkout-item/Checkout-Item-Component";
import StripeCheckoutButton from "../../components/stripe-button/Stripe-Button-Component";
import CustomButton from "../../components/custom-button/Custom-Button-Component";
import { Link } from "react-router-dom";

// Functional Component
const CheckoutPage = ({ cartItems, total, currentUser }) => {
  var now = new Date();
  var year = ("" + now.getFullYear()).substr(2);
  var month = "" + ((now.getMonth() + 1) % 12);

  return (
    <>
      <Helmet>
        <title>Mirai Merch | Checkout</title>
      </Helmet>
      <CheckoutPageContainer>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer>
            <span>Product</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Description</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Quantity</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Price</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Remove</span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map((cartItem) => (
          <CheckoutItem cartItem={cartItem} key={cartItem.id} />
        ))}
        <div className="total">
          <TotalContainer>Total: ${total}</TotalContainer>
        </div>

        {currentUser ? (
          <>
            <WarningContainer>
              * Please use the following test credit cart for payments *
              <br />
              <p>{`4242 4242 4242 4242 - Exp: ${month}/${year} - CVV: 123`}</p>
            </WarningContainer>
            <StripeCheckoutButton
              price={total}
              displayName={currentUser.displayName}
              email={currentUser.email}
            />
          </>
        ) : (
          <Link to="/signin">
            <CustomButton>Login to proceed</CustomButton>
          </Link>
        )}
      </CheckoutPageContainer>
    </>
  );
};

// HOF
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotal,
  currentUser: selectCurrentUser,
});

// Default Export
export default connect(mapStateToProps)(CheckoutPage);
