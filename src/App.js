// App.js

// Importing Helpers
import React from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/Firebase-Utils";

// Importing Styles
import "./App.css";

// Importing Components
import HomePage from "./pages/homepage/Homepage-Component";
import ShopPage from "./pages/shop/Shop-Component";
import Header from "./components/header/Header-Component";
import SignInAndSignUpComponent from "./pages/sign-in-and-sign-up/Sign-In-And-Sign-Up-Component";

// Class Component
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  // Auth Subscription
  unsubscribeFromAuth = null;

  // Component Did Mount
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  // Component Will UnMount
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  // Render
  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpComponent} />
        </Switch>
      </>
    );
  }
}

// Default Export
export default App;
