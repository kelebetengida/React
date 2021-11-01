import React from "react";
import RESUME from "../Assets/RESUME.pdf"

export default function Resume() {
    return (
        <div style={{ background: "linear-gradient(360deg, #AFD275 20%, #C2CAD0 100%, #AFD275 9%)", justifyContent: "center",paddingBottom: "100px" }}>
            <main>
                <section 
                style={{ 
                    margin:"auto",
                alignItems:"center",
                    width: "50%",
                    border: "3px solid black",
                    padding: "100px",fontSize:"large",
                     }}>
                    <h1 style={{ 
                alignItems:"center",
                   }}>Resume</h1>
                   <br/>
                    <div >
                    
                        <a href={RESUME}>Click Here To Download My Resume</a>
                        <br/><br/>
                        <h4>
                            Front-end Proficiencies
                        </h4>
                        
                        <ul class="col-md-6">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Responsive Design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>

                        
                        <h4>
                            Back-end Proficiencies
                        </h4>
                        <ul style={{ 
                marginBottom:"50px",
                   }}>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}