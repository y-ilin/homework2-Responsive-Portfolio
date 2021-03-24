import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";

function App() {

  return (
      <BrowserRouter>
      <div className="app-div">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
            <Route exact path="/work">
            <Work />
             </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
