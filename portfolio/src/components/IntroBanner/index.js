import React from "react";
import "./style.css";

function IntroBanner() {
  
  return (
    // <!---------- Start Intro & Skills Container ---------->
    <div id="introContainer">
      <div id="marqueeContainer">
        <div className="marquee marquee1">
          <span className="role marquee1lead">BUILDING APPS DRINKING SCHNAPPS</span>
          <span className="role">BUILDING APPS DRINKING SCHNAPPS</span>
          <span className="role">BUILDING APPS DRINKING SCHNAPPS</span>
        </div>
        <div className="marquee marquee2">
          <span className="role marquee2lead">WEB DEVElOPER</span>
          <span className="role">WEB DEVElOPER</span>
          <span className="role">WEB DEVElOPER</span>
          <span className="role">WEB DEVElOPER</span>
        </div>
        <div id="introName">YI LIN</div>
        <div className="marquee marquee3">
          <span className="role marquee3lead">FULL STACK WEB DEVELOPER</span>
          <span className="role">FULL STACK WEB DEVELOPER</span>
          <span className="role">FULL STACK WEB DEVELOPER</span>
        </div>
      </div>
    </div>
    // <!----------- End Intro & Skills Container ---------->
  );

}


export default IntroBanner;
