import React from "react";
// import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { useFirebaseApp } from "reactfire";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

import NotFound from "./components/NotFound";

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);

  return (
    (<Home />),
    (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/logowanie" component={LogIn} />
          <Route exact path="/rejestracja" component={SignUp} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    )
  );
}

export default App;
