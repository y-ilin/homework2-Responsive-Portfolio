import React from "react";

import ProjectBadges from "../ProjectBadges/ProjectBadges";

import "./ProjectCard.scss";

function ProjectCard(props) {
    const toggleOpacityUp = e => {
        e.target.style.opacity = "80%";
    }

    const toggleOpacityDown = e => {
        e.target.style.opacity = "0%";
    }

    return (
        <div className="main-container__project-card">
            <a
            href={props.deployedLink}
            target="blank"
            className="portfolio-img-link"
            >
            <img
                src={props.img}
                alt={props.imgAlt}
                className="portfolio-img"
            />
            <p className="project-card__view-app"
                onMouseEnter={toggleOpacityUp}
                onMouseLeave={toggleOpacityDown}
            >Go to app →</p>
            </a>
            <p className="project-title">{props.projectTitle}</p>
            <p>{props.projectDescription}</p>
            <a
                href={props.githubLink}
                target="blank"
                className="project-link"
                >Link to repo →</a
            >
            <ProjectBadges 
                key={props.projectTitle}
                skills={props.skills}
            />
        </div>
    )

}


export default ProjectCard;
