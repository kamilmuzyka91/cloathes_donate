import React from "react";


import Header from "./Header";
import Statistic from "./Statistic";


function Home() {
  return (
    <>
    <Header /> 
    <Statistic bag="10" organization="10" collection="10"/>
    </>
  )
}

export default Home;
