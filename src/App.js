import React, {Component} from "react";
import Homepage from "./component/pages/Homepage/Homepage";
import ShopPage from "./component/pages/ShopPage/ShopPage";
import Header from "./component/pages/Header/Header";
import SignInSignUp from "./component/pages/SignInSignUp/SignInSignUp";
import Contact from "./component/pages/Contact/Contact";

import {auth} from "./firebase/firebase.utils";

import {Route, Switch} from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInSignUp} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }

}

export default App;
