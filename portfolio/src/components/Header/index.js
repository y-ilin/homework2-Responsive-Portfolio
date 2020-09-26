import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div id="navbarBrandSocials">
          <a id="navbar-brand" href="./index.html">YI LIN LEE</a>
          {/* Socials */}
          <div id="socialsDiv">
            <a href="https://github.com/y-ilin" target="blank" className="socialslink"
              ><i className="fab fa-github"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/yi-lin-lee/"
              target="blank"
              className="socialslink"
              ><i className="fab fa-linkedin"></i
            ></a>
            <a
              href="mailto:yilinlee19@gmail.com"
              target="blank"
              className="socialslink"
              ><i className="fas fa-envelope"></i
            ></a>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              to="/"
              className={
                window.location.pathname === "/more"
                  ? "nav-item nav-link nav-pages"
                  : "nav-item nav-link nav-pages active"
              }
            >
              Portfolio 
            </Link>
            <Link
              to="/more"
              className={
                window.location.pathname === "/more"
                  ? "nav-item nav-link nav-pages active"
                  : "nav-item nav-link nav-pages"
              }
            >
              More on me 
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );

}


export default Header;
