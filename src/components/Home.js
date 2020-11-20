import React from "react";

import Header from "./Header";
import Statistic from "./Statistic";
import Steps from "./Steps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./whoWeHelp/WhoWeHelp";

function Home() {
  return (
    <>
      <Header />
      <Statistic bag="10" organization="10" collection="10" />
      <Steps />
      <AboutUs />
      <WhoWeHelp />
    </>
  );
}

export default Home;
