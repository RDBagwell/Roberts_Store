import Homepage from "./component/pages/Homepage/Homepage";
import ShopPage from "./component/pages/ShopPage/ShopPage";
import Header from "./component/pages/Header/Header";
import SignInSignUp from "./component/pages/SignInSignUp/SignInSignUp";
import Contact from "./component/pages/Contact/Contact";

import {Route, Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={SignInSignUp} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
