import React from "react";
import Header from "../components/Header";
import CareerPath from "../components/CareerPath";
import Footer from "../components/Footer";

function More(props) {
    const scrollTop = props.scrollTop;

    return (
        <div className="morePage">
            <Header scrollTop={scrollTop}/>
            <CareerPath />
            <Footer 
                page="More"
            />
        </div>

    );
  }


export default More;
