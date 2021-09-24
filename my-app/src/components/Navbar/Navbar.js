import React, { Component } from "react";
import { MenuItems } from "./Menuitems";
import "./Namvbar.css";
class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"> KELEBET ENGIDA<i className="'fab fa-react"></i></h1>
                
                <ul>
                    {MenuItems.map((item, index) => {
                        return <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a></li>
                    })}

                </ul>
            </nav>
        )
    }
}

export default Navbar;