import React, { useState, useEffect } from "react";
import "./style.css";
import ProjectBadges from "../ProjectBadges";

function Project(props) {
    // const [isShown, setIsShown] = useState(false);

    // useEffect(() => {
    //     if (isShown) {
    //         console.log(this)
    //     }
    // }, [isShown])
    const toggleOpacityUp = e => {
        e.target.style.opacity = "80%";
    }

    const toggleOpacityDown = e => {
        e.target.style.opacity = "0%";
    }

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
            <p className="viewApp"
                // onMouseEnter={() => setIsShown(true)}
                // onMouseLeave={() => setIsShown(false)}
                onMouseEnter={toggleOpacityUp}
                onMouseLeave={toggleOpacityDown}
            >Go to app →</p>
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
