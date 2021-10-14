import React from "react";
import img from "../Assets/Picture1.png"
const Resume = () => {
    return (
        <div style={{ background: "linear-gradient(360deg, #AFD275 9%, #C2CAD0 100%, #AFD275 9%)" ,justifyContent: "center"}}>
            <h1 style={{ display: "flex", justifyContent: "center" }}>Resume</h1>

            <img style={{ width: "60%",  alignItems:"center", marginLeft:"300px"}} src={img}alt="" />
        </div>
    );

};

export default Resume;