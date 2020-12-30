import React, {Component} from "react";
import Homepage from "./component/pages/Homepage/Homepage";
import ShopPage from "./component/pages/ShopPage/ShopPage";
import Header from "./component/pages/Header/Header";
import SignInSignUp from "./component/pages/SignInSignUp/SignInSignUp";
import Contact from "./component/pages/Contact/Contact";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import {Route, Switch} from "react-router-dom";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


import './App.css';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const useRef = await createUserProfileDocument(userAuth);
        useRef.onSnapshot( snapShot=>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      } else {

        this.setState({currentUser: userAuth});

      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
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

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
