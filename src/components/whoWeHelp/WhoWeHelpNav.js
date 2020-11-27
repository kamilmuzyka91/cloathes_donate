import React from "react";
import { NavLink } from "react-router-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import fundation from "./Fundation";
import organization from "./Organization";
import collection from "./Collection";
import fundationData from "../../dataForFundation";

function CtaWhoWeHelp() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/organization" component={organization} />
          <Route path="/fundation" component={fundation} />
          <Route path="/collection" component={collection} />
        </Switch>
      </HashRouter>
      <ul className="whoWeHelp__navigation">
        <li className="cta__nav cta__fundation">
          {" "}
          <NavLink className="whoWeHelp__link" to="/fundation">Fundacje</NavLink>
        </li>
        <li className="cta__nav cta__organization">
          <NavLink className="whoWeHelp__link" to="/organization">Ogranizacje</NavLink>
        </li>
        <li className="cta__nav cta__collection">
          {" "}
          <NavLink className="whoWeHelp__link" to="/collection">Zbiórki</NavLink>
        </li>
      </ul>
      <div className="whoWeHelp__descryption">{fundationData.describe}</div>
    </>
  );
}

export default CtaWhoWeHelp;
