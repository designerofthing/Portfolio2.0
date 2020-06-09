import React, { useState } from "react";
import "./css/App.css";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import WebDev from "./Components/WebDev";
import Products from "./Components/Products";
import Header from "./Components/Header";

const App = () => {
  const [matrix, setMatrix] = useState("0vh");
  const [blank, setBlank] = useState("visible");

  const pullBack = () => {
    setBlank("hidden");
    setMatrix("cover");
    setTimeout(function () {
      setMatrix("0vh");
      setBlank("visible");
    }, 5000);
  };

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Landing blank={blank} matrix={matrix} pullBack={pullBack} />
          )}
        ></Route>
        <Route
          exact
          path="/about"
          render={(props) => <About {...props} title={"ABOUT"} />}
        ></Route>
        <Route
          exact
          path="/portfolio"
          render={(props) => <Portfolio {...props} title={"PORTFOLIO"} />}
        ></Route>

        <Route exact path="/portfolio/webdev" component={WebDev}></Route>
        <Route exact path="/portfolio/products" component={Products}></Route>
        <Route
          exact
          path="/contact"
          render={(props) => <Contact {...props} title={"CONTACT"} />}
        ></Route>
      </Switch>
      <Footer blank={blank} pullBack={pullBack} />
    </>
  );
};

export default App;
