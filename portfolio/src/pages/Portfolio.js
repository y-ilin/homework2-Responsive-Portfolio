import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import IntroBanner from "../components/IntroBanner";
import Projects from "../components/Projects";

function Portfolio(props) {
    const scrollTop = props.scrollTop;

    // Change body background color on scroll
    if (scrollTop > 500) {
        document.body.style.backgroundColor = "rgb(80, 0, 255)";
    } else if (scrollTop > 300) {
        document.body.style.backgroundColor = "rgb(219, 214, 255)";
    } else {
        document.body.style.backgroundColor = "rgb(219, 214, 255)";
    }
        
    return (
        <div>
            <Header />
            <IntroBanner />
            <Projects />
        </div>

    );
  }


export default Portfolio;
