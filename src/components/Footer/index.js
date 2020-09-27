import React, { useEffect, useState } from "react";
import "./style.css";

function Footer(props) {

    return (
        <div className="footer">
            <p className="footerP">Yi Lin Lee</p>
            {props.page==="More" ?
                <p className="footerCredit">Icons made by Freepik, Eucalyp, and ultimatearm from www.flaticon.com</p> :
                <p className="footerCredit noshow">☺</p>
            }
        </div>
    )

}


export default Footer;
