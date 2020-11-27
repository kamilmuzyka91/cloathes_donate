import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";

import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebaseConfig";
import React, { Suspense } from "react";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<h3>Loading...</h3>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById("root")
);
