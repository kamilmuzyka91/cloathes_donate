import React from "react";
import { useUser } from "reactfire";

import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";

import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";

function App() {
  const user = useUser();
  return (
    <>
      <div className="App">
        {user && <LogOut />}
        {!user && (
          <>
            <SignUp />
            <LogIn />
          </>
        )}
      </div>

      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/logowanie" component={LogIn} />
          <Route exact path="/rejestracja" component={SignUp} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
