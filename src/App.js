import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
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

const App = () => {
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
    </Switch>
  );
};

export default App;