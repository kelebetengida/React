import React from "react";
import PorfolioCard from "./projectcard";
import imgs from "../Assets/kelebet.jpg";
import img3 from "../Assets/seattle.jpg";
const workData =
    [
        {
            "title": "Life Happens",
            "img": "../Assets/seattle.jpg",
            "tech": "HTML, CSS, JavaScript / Bulma / Third-party APIs",
            "cName": "Life Happens",
            "appLink": "https://ywkuo227.github.io/life-happens/",
            "repoLink": "https://github.com/ywkuo227/life-happens"
        },
        {
            "title": "Password-Generator",
            "tech": "HTML, CSS, Java Script",
            "cName": "Password-Generator",
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
            "cName": "E-Commerce-Back-End",
            "appLink": "",
            "repoLink": "https://github.com/kelebetengida/E-Commerce-Back-End.git"
        },
        {
            "title": "Facility Management",
            "tech": "Node.js / Express.js / MySQL / MVC / Handlebars",
            "cName": "Facility Management",
            "appLink": "https://dn-fac-mgmt.herokuapp.com/",
            "repoLink": "https://github.com/DN-Vanguard/Facility_Management"
        },
        {
            "title": "EMT-Quiz",
            "tech": "HTML, CSS, JS",
            "cName": "EMT-Quiz",
            "appLink": "https://kelebetengida.github.io/EMT-Quiz/",
            "repoLink": "https://github.com/kelebetengida/EMT-Quiz.git"
        },
        {
            "title": "Take your Notes",
            "tech": "Bootstrap, Node.js / Express.js / Heroku",
            "cName": "Take your Notes",
            "appLink": "https://note-taker-with-express.herokuapp.com/",
            "repoLink": "https://github.com/kelebetengida/Take-your-notes.git"
        },
        {
            "title": "Weather Dashboard",
            "tech": "HTML, CSS, Javascript, Jquery, Bootstrap",
            "cName": "Weather Dashboard",
            "appLink": "https://kelebetengida.github.io/Weather-CH/",
            "repoLink": "https://github.com/kelebetengida/Weather-CH.git"
        },
        {
            "title": "Refactoring Horiseons webpage",
            "tech": "Fixing accessibility Standards",
            "cName": "Refactoring Horiseons",
            "appLink": "https://kelebetengida.github.io/Refactoring-Horiseon-s-webpage/",
            "repoLink": "https://github.com/kelebetengida/Refactoring-Horiseon-s-webpage.git"
        }
    ];

export default function ProjectCard() {
    return (
        <div style={{ background: "linear-gradient(360deg, #AFD275 9%, #C2CAD0 100%, #AFD275 9%)", justifyContent: "center" }}>
            <main>
                <h1 class="h1-responsive font-weight-bold text-center my-0">Work</h1>
                <section >

                    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", padding: "0px", justifyContent: "center", padding: "60px" }}>
                        {workData.map((work) => (
                            <PorfolioCard title={work.title} tech={work.tech} cName={work.cName} appLink={work.appLink} repoLink={work.repoLink}>
                                <img src={imgs} alt="" />
                            </PorfolioCard>
                        ))}
                    </div>
                </section>
                <div >
                    <img style={{ display: "flex", width: "100%" }} src={img3} alt="" />
                    <h2 style={{ fontSize: "45px", justifyContent: "center", alignItems: "center" }}>Welcome to my page!</h2>
                </div>
            </main>
        </div>
    )
}
