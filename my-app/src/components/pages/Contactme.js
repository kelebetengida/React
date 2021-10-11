import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Contacts = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>Contact Us</h1>

            <div style={{ margin: "40px" }}>
                <a href="https://github.com/kelebetengida/React"><i><FaGithub className="fa fa-camera-retro fa-2x" /></i></a>
                <a href="https://www.linkedin.com/notifications/"><i><FaLinkedin className="fa fa-camera-retro fa-2x" /></i></a>
            </div>
        </div>
    );

};

export default Contacts;