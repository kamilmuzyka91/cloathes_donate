import React from "react";

import Header from "./Header";
import Statistic from "./Statistic";
import Steps from "./Steps";
import AboutUs from "./AboutUs";
import dataFromBackend from "../dataFromBackend";
import WhoWeHelp from "./WhoWeHelp";


function Home() {
  return (
    <>
      <Header />
      <Statistic bag="10" organization="10" collection="10" />
      <Steps />
      <AboutUs />
      <WhoWeHelp data={dataFromBackend}/>
    </>
  );
}

export default Home;
