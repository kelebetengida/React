import React from "react";
import { Footing } from  "./footerelement"
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer =()=>{
    return (               
                    
                        <Footing >
                             <FaGithub to="https://github.com/kelebetengida"/>
                                <FaLinkedin/>
                        </Footing>
                   
    )
}

export default Footer;