// App.js

// Importing Helpers
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfile } from "./firebase/Firebase-Utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Importing Styles
import "./App.css";

// Importing Components/Pages
import HomePage from "./pages/homepage/Homepage-Component";
import ShopPage from "./pages/shop/Shop-Component";
import Header from "./components/header/Header-Component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/Sign-In-And-Sign-Up-Component";
import CheckoutPage from "./pages/checkout/Checkout-Component";

// Importing Actions
import { setCurrentUser } from "./redux/user/User-Actions";

// Importing Selectors
import { selectCurrentUser } from "./redux/user/User-Selector";

// Class Component
class App extends React.Component {
  // Auth Subscription
  unsubscribeFromAuth = null;

  // Component Did Mount
  componentDidMount() {
    // Destructuring Props
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  // Component Will UnMount
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  // Render
  render() {
    console.log("Mirai Merch by Vardhu2706@GitHub");

    // Return
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </>
    );
  }
}

// HOF
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// HOF
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// Default Export
export default connect(mapStateToProps, mapDispatchToProps)(App);
