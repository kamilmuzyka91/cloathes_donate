import React from "react";


import Header from "./Header";
import Statistic from "./Statistic";
import Steps from "./Steps";


function Home() {
  return (
    <>
    <Header /> 
    <Statistic bag="10" organization="10" collection="10"/>
    <Steps/>
    </>
  )
}

export default Home;
