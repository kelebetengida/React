import React from "react";

import {Nav, NavLink, Bars, NavMenu, NavL} from "./navbarelements"
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavL to="/">
                    
                        <h1 >Kelebet Engida</h1>
                    
                </NavL>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About Me
                    </NavLink>
                    <NavLink to="/portfolio" activeStyle>
                        Portfolio
                    </NavLink>
                    <NavLink to="/contact-me" activeStyle>
                        Contact Me
                    </NavLink>
                    
                    <NavLink to="/resume" activeStyle>
                        Resume
                    </NavLink>

                     {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                
            </Nav>
        </>
        );
    
};

export default Navbar;