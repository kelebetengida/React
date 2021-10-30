import React from "react";
import RESUME from "../Assets/RESUME.pdf"

export default function Resume() {
    return (
        <div style={{ background: "linear-gradient(360deg, #AFD275 9%, #C2CAD0 100%, #AFD275 9%)", justifyContent: "center" }}>
            <main>
                <section 
                sstyle={{ margin: "auto",
                    width: "50%",
                    border: "3px solid green",
                    padding: "10px", }}>
                    <h1>Resume</h1>
                    <div class="col-md-6">
                        <a href={RESUME}>Click Here To Download My Resume</a>
                        <h4>
                            Front-end Proficiencies
                        </h4>
                        <ul>
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
                        <ul>
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