import React from "react";

import "./ProjectBadges.scss";

function ProjectBadges(props) {

    const skillsArray = props.skills;

    return (
    <div className="project-badge__main-container">
        {skillsArray.map(skill => {
            return <p key={skill}>{skill}</p>
        })}

    </div>
    );
}

export default ProjectBadges;
