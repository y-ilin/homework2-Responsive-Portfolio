import React from "react";
import { Link } from "react-router-dom";

import Socials from "../components/Socials/Socials";

import "./Home.scss";

function Home() {
    return (
      <div className="home__main-container">
        <p className="name">YI LIN LEE</p>
        <p className="role">Web Developer</p>
        <Socials useCase="home"/>
        <Link className="link" to="/work">Work →</Link>
        <Link className="link" to="/about">About →</Link>
        <p className="paragraph">Hi, I'm a full stack developer based in Melbourne, Australia. </p>
      </div>
    );
  }

export default Home;
