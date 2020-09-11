import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./page/Login/SignIn";
import SignUp from "./page/Login/SignUp";
import Whoops404 from "./page/Whoops404/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login/signIn" component={SignIn} />
        <Route exact path="/login/signUp" component={SignUp} />
        <Route path="/404" component={Whoops404} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
