import React, { useEffect, useState } from "react";
import "./style.css";

function IntroBanner(props) {
  const scrollTop = props.scrollTop;
  const [marqueeStyle, setMarqueeStyle] = useState({});
  
  useEffect(() => {
    if (scrollTop > 100) {
      setMarqueeStyle({opacity: "0%"});
    } else {
      setMarqueeStyle({opacity: "100%", transform: "translateY(0px)"});
    }  
  }, [scrollTop]);

  return (
    // <!---------- Start Intro & Skills Container ---------->
    <div id="introContainer">
      <div id="marqueeContainer">
        <div className="marquee marquee1" style={marqueeStyle}>
          <span className="role marquee1lead">FULL STACK WEB DEVELOPER</span>
          <span className="role">FULL STACK WEB DEVELOPER</span>
          <span className="role">FULL STACK WEB DEVELOPER</span>
        </div>
        <div className="marquee marquee2" style={marqueeStyle}>
          <span className="role marquee2lead">WEB DEVElOPER</span>
          <span className="role">WEB DEVElOPER</span>
          <span className="role">WEB DEVElOPER</span>
          <span className="role">WEB DEVElOPER</span>
        </div>
        <div id="introName">YI LIN</div>
        <div className="marquee marquee3" style={marqueeStyle}>
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
