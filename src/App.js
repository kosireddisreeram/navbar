/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
// import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter as Router,  Route } from "react-router-dom";
// import Side from "./side.js";

import { Switch } from "react-router-dom";
import Form from "./Form";
// import "./Side.css";
// import { useState } from "react";


const Menu = () => {
  return (
    <>
      <Navbar />
      <section className="main-section">
        <h1> Menu</h1>
      </section>
    </>
  );
};
const Subscription = () => {
  return (
    <>
      <Navbar />
      <section className="main-section">
        <h1>Subscription</h1>
      </section>
    </>
  );
};
const About = () => {
  return (
    <>
      <Navbar />
      <section className="main-section">
        
        <h1>About Us</h1>
      </section>
    </>
  );
};

const Data = () => {
  return (
    <>
      <Navbar />
      <section className="main-section">
      <h1>Data</h1>
      </section>
    </>
  );
};
const Register = () => {
  return (
    <>
      <Navbar />
      <section className="main-section">
      {/* place the sign-in component here */}
      <Form/>
      </section>
    </>
  );
};

const App = ( ) => {
  return (
    <Switch>
      <Route exact path="/">
        <Menu />
      </Route>

      <Route path="/subscription">
        <Subscription/>
      </Route>

      <Route path="/about us">
        <About/>
      </Route>

      <Route path="/data">
        <Data/>
      </Route>
      <Route path="/sign-in">
        <Register/>
      </Route>
    </Switch>
  );
};

export default App;