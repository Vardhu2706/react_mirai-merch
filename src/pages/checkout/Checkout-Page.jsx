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
import "./Checkout-Styles.scss";

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
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem cartItem={cartItem} key={cartItem.id} />
        ))}
        <div className="total">
          <span>Total: ${total}</span>
        </div>

        {currentUser ? (
          <>
            <div className="test-warning">
              * Please use the following test credit cart for payments *
              <br />
              <p>{`4242 4242 4242 4242 - Exp: ${month}/${year} - CVV: 123`}</p>
            </div>
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
      </div>
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
