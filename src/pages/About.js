import React from "react";

import Nav from "../components/Nav/Nav.js";

import "./About.scss";

function About() {
    return (
        <div>
            <Nav useCase="nav"/>
            <div className="about__main-container">
                <table>
                    <tbody>
                        <tr>
                            <td>Coming from a mechanical engineering background</td>
                            {/* <td>
                                <ul>
                                    <li>3D modelling a hip replacement joint</li>
                                    <li>Simulating fluid dynamics around offshore wind turbines</li>
                                    <li>Building a robot for an obstacle course</li>
                                </ul>
                            </td> */}
                        </tr>
                        <tr>
                            <td>with experience in construction</td>
                            {/* <td>
                                <ul>
                                    <li>Managing subcontractors on a marine construction site</li>
                                    <li>Engineering solutions and logistics for hydropower projects</li>
                                </ul>
                            </td> */}
                        </tr>
                        <tr>
                            <td>now building web apps.</td>
                            {/* <td>
                                <ul>
                                    <li>Full stack coding bootcamp</li>
                                    <li>Selected as a Fellow in the Startmate Fellowship program</li>
                                    <li>Building cool things, this is my GitHub</li>
                                </ul>
                            </td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
  }


export default About;
