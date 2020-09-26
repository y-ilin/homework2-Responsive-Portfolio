import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import More from "./pages/More";

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);


    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
      <BrowserRouter>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/">
            <Portfolio scrollTop={scrollTop}/>
          </Route>
          <Route exact path="/more">
            <More />
          </Route>
          <Route path="*">
            <Portfolio />
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
