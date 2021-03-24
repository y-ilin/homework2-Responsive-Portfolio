import React from "react";
import "./Socials.scss";

import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
// import { GoLocation } from "react-icons/go";

function Socials({ useCase }) {
    return (
        <div className={`socials-container ${useCase}`}>
            <a href="https://github.com/y-ilin" target="blank">
                <AiOutlineGithub className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/yi-lin-lee/" target="blank">
                <AiFillLinkedin className="icon"/>
            </a>
            <a href="mailto:yilinlee19@gmail.com" target="blank" >
                <AiOutlineMail className="icon"/>
            </a>
            {/* <a href="mailto:yilinlee19@gmail.com" target="blank" >
                <GoLocation className="icon location" /> Melbourne, Australia
            </a> */}
        </div>
    )
}

export default Socials;
