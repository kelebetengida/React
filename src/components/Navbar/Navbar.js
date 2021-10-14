import React from "react";

import { Nav, NavLink,  NavMenu, NavL } from "./navbarelements"
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavL to="/">

                    <h1 >Kelebet Engida</h1>

                </NavL>
                
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About Me
                    </NavLink>
                    <NavLink to="/portfolio" activeStyle>
                        Portfolio
                    </NavLink>
                    <NavLink to="/contactme" activeStyle>
                        Contact Me
                    </NavLink>

                    <NavLink to="/resume" activeStyle>
                        Resume
                    </NavLink>

                </NavMenu>

            </Nav>
        </>
    );

};

export default Navbar;