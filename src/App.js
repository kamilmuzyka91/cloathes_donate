import React from "react";
// import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AboutAction from "./components/AboutAction";
import AboutUs from "./components/AboutUs";
import Foundation from "./components/Foundation";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

function App() {
  return (
    (<Home />),
    (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/logowanie" component={Login} />
          <Route exact path="/rejestracja" component={Register} />
          <Route exact path="/o_co_chodzi" component={AboutAction} />
          <Route exact path="/o_nas" component={AboutUs} />
          <Route exact path="/fundacja_i_organizacje" component={Foundation} />
          <Route exact path="/kontakt" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    )
  );
}

export default App;
