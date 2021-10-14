import React from "react";
import { Footing } from "./footerelement"
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
const Footer = () => {
    return (

        <Footing  >

            <div style={{ margin: "20px" }}>
                <a href="https://github.com/kelebetengida?tab=repositories"><i><FaGithub className="fa fa-camera-retro fa-2x" /></i></a>
                <a href="https://www.linkedin.com/notifications/"><i><FaLinkedin className="fa fa-camera-retro fa-2x" /></i></a>
                <a href="https://mail.google.com/mail"><i><AiFillMail className="fa fa-camera-retro fa-2x" /></i></a>
            </div>


        </Footing>
    )
}

export default Footer;