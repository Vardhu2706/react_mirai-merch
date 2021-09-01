// Stripe Checkout Button

// Importing Helpers
import React from "react";
import StripeCheckout from "react-stripe-checkout";

// Functional Component
const StripeCheckoutButton = ({ price, email, displayName }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I6YHWIdjtldjbnIuMA2vxuz26pzQagQRDxIhWXSC2CYUKRk2yU7sJpPU1yuUcZk6KtENUkePdqzNrYQQTfoGCDm00fI6z0Ji1";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      currency="INR"
      label="Pay Now"
      name="Mirai Merch Ltd."
      billingAddress
      email={email}
      image="https://i.ibb.co/51brZK4/Screenshot-2021-09-01-193055-modified.png"
      shippingAddress
      description={`Your total is: ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

// Default Export
export default StripeCheckoutButton;
