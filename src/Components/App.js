import Header from "./Header";
import LandingPage from "./LandingPage";
import MainPage from "./MainPage";

// Import Hooks
import {Route, Link} from "react-router-dom";
// import React, { useEffect, useState } from "react";


function App() {

  return (
    <>
      
      <Header />
      <Route exact path = "/">
        <LandingPage />
      </Route>
      <Route exact path = "/mainpage">
        <MainPage />
      </Route>
      

    </>
  );
}

export default App;
