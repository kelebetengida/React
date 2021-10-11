import React from "react";
import PorfolioCard from "./projectcard";
import imgs from "../Assets/kelebet.jpg";

const workData =
    [
        {
            "title": "Life Happens",
            "tech": "HTML, CSS, JavaScript / Bulma / Third-party APIs",
            "cName": "workcards life_happens",
            "appLink": "https://ywkuo227.github.io/life-happens/",
            "repoLink": "https://github.com/ywkuo227/life-happens"
        },
        {
            "title": "Password-Generator",
            "tech": "HTML, CSS, Java Script",
            "cName": "workcards weather",
            "appLink": "https://kelebetengida.github.io/Password-Generator/",
            "repoLink": "https://github.com/kelebetengida/Password-Generator.git"
        },
        {
            "title": "Workday-Calander-",
            "tech": "HTML, CSS, Java Script, JQuery, Moment.js",
            "cName": "workcards scheduler",
            "appLink": "https://github.com/kelebetengida/Workday-Calander-.git",
            "repoLink": "https://github.com/ywkuo227/work-day-scheduler"
        },
        {
            "title": "E-Commerce-Back-End",
            "tech": " NodeJS, API express, mysql2, sequelize, Insomnia",
            "cName": "workcards ecommerce",
            "appLink": "",
            "repoLink": "https://github.com/kelebetengida/E-Commerce-Back-End.git"
        },
        {
            "title": "Facility Management",
            "tech": "Node.js / Express.js / MySQL / MVC / Handlebars",
            "cName": "workcards fac_mgmt",
            "appLink": "https://dn-fac-mgmt.herokuapp.com/",
            "repoLink": "https://github.com/DN-Vanguard/Facility_Management"
        },
        {
            "title": "EMT-Quiz",
            "tech": "HTML, CSS, JS",
            "cName": "workcards tech_blog",
            "appLink": "https://kelebetengida.github.io/EMT-Quiz/",
            "repoLink": "https://github.com/kelebetengida/EMT-Quiz.git"
        },
        {
            "title": "Take your Notes",
            "tech": "Bootstrap, Node.js / Express.js / Heroku",
            "cName": "workcards note_taker",
            "appLink": "https://note-taker-with-express.herokuapp.com/",
            "repoLink": "https://github.com/kelebetengida/Take-your-notes.git"
        },
        {
            "title": "Weather Dashboard",
            "tech": "HTML, CSS, Javascript, Jquery, Bootstrap",
            "cName": "workcards ecommerce",
            "appLink": "https://kelebetengida.github.io/Weather-CH/",
            "repoLink": "https://github.com/kelebetengida/Weather-CH.git"
        }
    ];

export default function ProjectCard() {
    return (
        <div>
            <main>
                <h3>Work</h3>
                <section >
                    
                    <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between",  fontSize: "20px" }} >
                        {workData.map((work) => (
                            <PorfolioCard title={work.title} tech={work.tech} cName={work.cName} appLink={work.appLink} repoLink={work.repoLink}>
                                 <img src={imgs} alt="" />
                                 </PorfolioCard>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}
