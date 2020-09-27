import React from "react";
import "./style.css";

function ProjectBadges(props) {

    const skillsArray = props.skills;

    return (
    <div className="projectLinkBadgeDiv">
        {skillsArray.map(skill => {
            return <p key={skill}
            >{skill}</p>
        })}

    </div>
    );
}

export default ProjectBadges;
