// Importing Helpers
import React from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/Firebase-Util";

// Importing Styles
import "./App.css";

// Importing Components
import HomePage from "./pages/homepage/Homepage-Component";
import ShopPage from "./pages/shop/Shop-Component";
import Header from "./components/header/Header-Component";
import SignInAndSignUpComponent from "./pages/sign-in-and-sign-up/Sign-In-And-Sign-Up-Component";

// Functional Component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  // Lifecycle method - Component Did Mount
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  render() {
    return (
      <>
        <Header />
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
