import React from "react";
import { useUser } from "reactfire";

import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";

import SignUp from "./components/login/Signup";
import LogIn from "./components/login/Login";
import AdminPanel from "./components/login/AdminPanel";

function App() {
  const user = useUser();
  return (
    <>
      <div className="register">
        {user && <AdminPanel />}
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
          <Route exact path="/admin" component={AdminPanel} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
