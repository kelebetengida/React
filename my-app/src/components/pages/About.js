import React from "react";
import imgs from "../Assets/kelebet.jpg";

const About = () => {
    return (
        <div style={{background: "linear-gradient(180deg, #AFD275 9%, #C2CAD0 100%)"}} >
            <div>
                <h1 style={{display: "flex", justifyContent: "center"}}>Welcome!</h1>
            </div>
            <main>
                <section >
                    <h3 style={{display: "flex", justifyContent: "center", fontSize:"30px"}}>About Me</h3>
                    <article>
                        <p style={{display: "flex"}}>
                            <img style={{display: "flex", width:"50%", margin: "10px" }} src={imgs} alt=""/>
                        </p>
                    </article>
                </section>
            </main>
            
        </div>
        );
    
};

export default About;