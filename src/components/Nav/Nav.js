import React from "react";
import { Link, NavLink } from "react-router-dom";

import Socials from "../Socials/Socials";

import "./Nav.scss";

function Nav() {
    const activeLinkStyle = {fontWeight: "bold", borderBottom: "1px solid"};

    return (
        <div className="nav-container">
            <div className="nav-container__left-div">
                <Link className="name" to="/">YI LIN LEE</Link>
                <Socials useCase="nav"/>
            </div>
            <div className="nav-container__right-div">
                <NavLink activeStyle={activeLinkStyle} className="link" to="/work">Work</NavLink>
                <NavLink  activeStyle={activeLinkStyle} className="link" to="/about">About</NavLink>
            </div>
        </div>
    )
}

export default Nav;
