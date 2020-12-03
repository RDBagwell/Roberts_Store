import Homepage from "./component/pages/Homepage/Homepage";
import {Route, Switch} from "react-router-dom";

const HatPage = ()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
