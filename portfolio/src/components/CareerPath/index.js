import React from "react";
import "./style.css";

function CareerPath() {
  
  return (
    <div id="journeyContainer">
        <ul id="journeyList">
        <li className="journeyStop" id="journey1">
            <div className="journeyStopTitle">
            <span className="journeyBullet">•</span>
            <p>MECHANICAl ENGINEERING</p>
            </div>
            <ul>
            <li>3D modelling of a hip replacement joint</li>
            <li>Simulating fluid dynamics around offshore wind turbines</li>
            <li>Building a robot for an obstacle course</li>
            </ul>
        </li>

        <li className="journeyStop" id="journey2">
            <div className="journeyStopTitle">
            <span className="journeyBullet">•</span>
            <p>CONSTRUCTION</p>
            </div>
            <ul>
            <li>Site engineering</li>
            <li>Engineering design</li>
            <li>Marine and hydropower projects</li>
            </ul>
        </li>

        <li className="journeyStop" id="journey3">
            <div className="journeyStopTitle">
            <span className="journeyBullet">•</span>
            <p>WEB DEVElOPMENT</p>
            </div>
            <ul>
            <li>
                Fellow in <span className="accentText">Fellowship</span> program by
                <a href="https://www.startmate.com.au/"
                ><span className="accentText">Startmate</span></a
                >
            </li>
            <li>
                Intensive full stack
                <span className="accentText">coding bootcamp</span> by Monash
                University
            </li>
            <li>Building really cool things</li>
            <li>
                <div id="resumeDiv">
                <a href="./assets/imgs/YiLinLeeResume.pdf" target="blank"
                    >Download my resume ↓</a
                >
                </div>
            </li>
            </ul>
        </li>
        <div id="skillsDiv">
            <p>JavaScript</p>
            <p>jQuery</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>Responsive Layouts</p>
            <p>MongoDB</p>
            <p>NoSQL</p>
            <p>MySQL</p>
            <p>Git</p>
            <p>Heroku</p>
        </div>
        </ul>
    </div>
  );

}

export default CareerPath;
