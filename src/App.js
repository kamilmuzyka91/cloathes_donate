import React from "react";
// import { useUser } from "reactfire";

import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";

// import SignUp from "./components/login/Signup";
// import Login from "./components/login/Login";
// import AdminPanel from "./components/login/AdminPanel";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import LogOut from "./components/LogOut";

function App() {
  // const user = useUser();

  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logowanie" component={SignIn} />
          <Route path="/rejestracja" component={SignUp} />
          <Route path="/wylogowano" component={LogOut} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
