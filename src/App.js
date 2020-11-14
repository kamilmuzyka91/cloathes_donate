import React from "react";
// import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";

function App() {
  return (
    (<Home />),
    (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/logowanie" component={Login} />
          <Route exact path="/rejestracja" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    )
  );
}

export default App;
