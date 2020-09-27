import React, { useEffect, useState } from "react";
// import "./style.css";
import ProjectBadges from "../ProjectBadges";

function Project(props) {

    return (
        <div className="projectCard">
            <a
            href={props.deployedLink}
            target="blank"
            className="portfolioImgLink"
            >
            <img
                src={props.img}
                alt={props.imgAlt}
                className="portfolioImg"
            />
            <p className="viewApp">Go to app →</p>
            </a>
            <p className="projectTitle">{props.projectTitle}</p>
            <p>{props.projectDescription}</p>
            <a
                href={props.githubLink}
                target="blank"
                className="projectLink"
                >Link to repo →</a
            >
            <ProjectBadges 
                key={props.projectTitle}
                skills={props.skills}
            />
        </div>
    )

}


export default Project;
