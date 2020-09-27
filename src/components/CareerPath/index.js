import React, { useEffect, useState } from "react";
import "./style.css";
import windTurbineIcon from "../../assets/wind-turbine-Freepik.svg";
import integralIcon from "../../assets/integral-Freepik.svg";
import architectIcon from "../../assets/architect-Eucalyp.svg";
import prototypeIcon from "../../assets/prototype-ultimatearm.svg";
import dataIcon from "../../assets/data-Freepik.svg";
import startupIcon from "../../assets/startup-Freepik.svg";
import arrowIcon from "../../assets/right-arrow-Freepik.svg";
import yilinImg from "../../assets/yilin.jpg";
import resumeLink from "../../assets/YiLinLeeResume.pdf";


function CareerPath() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [iconsResponsive, setIconsResponsive] = useState("horizontal");

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (windowWidth < 992 && iconsResponsive === "horizontal") {
            setIconsResponsive("vertical");
        } else if (windowWidth >= 992 && iconsResponsive === "vertical") {
            setIconsResponsive("horizontal");
        }
    }, [windowWidth])

    
  return (
    <div id="morePageDiv">

        <div id="iconsContainer">
            <div id="iconsDiv" className={iconsResponsive}>
                <div id="careerStep">
                    <div className="careerIcons">
                        <img src={windTurbineIcon} className="largerIcon" alt="wind turbine icon"></img>
                        <img src={integralIcon} className="smallerIcon" alt="math icon"></img>
                    </div>
                    <div className="careerLabel">
                        <p>Mechanical Engineering</p>
                        <ul>
                            <li>3D modelling of a hip replacement joint</li>
                            <li>Simulating fluid dynamics around offshore wind turbines</li>
                            <li>Building a robot for an obstacle course</li>
                        </ul>
                    </div>
                </div>
                <div className={iconsResponsive + " arrowDiv"}>
                    <img src={arrowIcon} className="arrow smallerIcon" alt="arrow icon"></img>
                </div>
                <div id="careerStep">
                    <div className="careerIcons">
                        <img src={architectIcon} className="largerIcon" alt="construction icon"></img>
                        <img src={prototypeIcon} className="smallerIcon" alt="engineering design icon"></img>
                    </div>
                    <div className="careerLabel">
                        <p>Construction</p>
                        <ul>
                            <li>Engineer on a marine site</li>
                            <li>Engineering design</li>
                            <li>Tendered for marine and hydropower projects</li>
                        </ul>
                    </div>
                </div>
                <div className={iconsResponsive + " arrowDiv"}>
                    <img src={arrowIcon} className="arrow smallerIcon" alt="arrow icon"></img>
                </div>
                <div id="careerStep">
                    <div className="careerIcons">
                        <img src={dataIcon} className="largerIcon" alt="web development icon"></img>
                        <img src={startupIcon} className="smallerIcon" alt="rocketship icon"></img>
                    </div>
                    <div className="careerLabel">
                        <p>Web Development</p>
                        <ul>
                            <li>
                                Intensive full stack
                                <span className="accentText"> coding bootcamp </span>
                                at Monash University
                            </li>
                            <li>
                                A Fellow in the
                                <a href="https://www.startmate.com.au/">
                                <span className="accentText"> Startmate Fellowship </span>
                                </a>
                                program
                            </li>
                            <li>Building really cool things
                                <a href="https://github.com/y-ilin" className="accentText"> here</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="bioDiv" className={iconsResponsive}>
            <div>
                <img src={yilinImg} alt="photo of Yi Lin" id="yilinImg"/>
            </div>
            <div id="bioWriteup">
               <p>
                    My experience with coding began with MATLAB in first year of uni,
                    and later brought me to solving really fun problems in a Python
                    class. Somewhere down the line, I stumbled through simulating the
                    fluid dynamics around offshore wind turbines for my Masters
                    dissertation using a C++ toolbox called OpenFOAM.
                </p>
                <p>
                    Now, I'm applying my <span className="accentText">love for problem-solving </span>
                    along with my <span className="accentText">creative </span> side in web
                    development.
                </p>
                <div id="resumeDiv">
                    <a href={resumeLink} target="blank">
                        Download my resume ↓
                    </a>
              </div>  
            </div>
        </div>

    </div>
  );

}

export default CareerPath;
