import React from "react";
import PorfolioCard from "./projectcard";
import imgs from "../Assets/kelebet.jpg";
import img3 from "../Assets/seattle.jpg";
const workData =
    [
        {
            "title": "Life Happens",
            "img": "Picture5.png",
            "tech": "HTML, CSS, JavaScript / Bulma / Third-party APIs",
            "cName": "Life Happens",
            "appLink": "https://ywkuo227.github.io/life-happens/",
            "repoLink": "https://github.com/ywkuo227/life-happens"
        },
        {
            "title": "Password-Generator",
            "img": "loginScreenshot.png",
            "tech": "HTML, CSS, Java Script",
            "cName": "Password-Generator",
            "appLink": "https://kelebetengida.github.io/Password-Generator/",
            "repoLink": "https://github.com/kelebetengida/Password-Generator.git"
        },
        {
            "title": "Profile-Generator",
            "img": "Picture10.png",
            "tech": "HTML, JavaScript, NPM module, Jest, Inquiere",
            "cName": "workcards scheduler",
            "repoLink": "https://github.com/kelebetengida/OOP-Profile-Generator.git"
        },
        {
            "title": "E-Commerce-Back-End", 
            "img": "13-orm-homework-demo-02.gif",
            "tech": " NodeJS, API express, mysql2, sequelize, Insomnia",
            "cName": "E-Commerce-Back-End",
            "appLink": "",
            "repoLink": "https://github.com/kelebetengida/E-Commerce-Back-End.git"
        },
        {
            "title": "Facility Management",
            "img": "Laptop_View.png",
            "tech": "Handlebars, Javascript, Node.js, Express.js, MySQL, Insomia Core, Heroku, Bootstrap, Sequelize, Moment,Handlebars-dateformat",
            "cName": "Facility Management",
            "appLink": "https://dn-fac-mgmt.herokuapp.com/",
            "repoLink": "https://github.com/DN-Vanguard/Facility_Management"
        },
        {
            "title": "EMT-Quiz",
            "img": "Picture5.png",
            "tech": "HTML, CSS, JS",
            "cName": "EMT-Quiz",
            "appLink": "https://kelebetengida.github.io/EMT-Quiz/",
            "repoLink": "https://github.com/kelebetengida/EMT-Quiz.git"
        },
        {
            "title": "Take your Notes",
            "img": "11-express-homework-demo-01.png",
            "tech": "Bootstrap, Node.js / Express.js / Heroku",
            "cName": "Take your Notes",
            "appLink": "https://note-taker-with-express.herokuapp.com/",
            "repoLink": "https://github.com/kelebetengida/Take-your-notes.git"
        },
        {
            "title": "Weather Dashboard",
            "img": "Picture1.png",
            "tech": "HTML, CSS, Javascript, Jquery, Bootstrap",
            "cName": "Weather Dashboard",
            "appLink": "https://kelebetengida.github.io/Weather-CH/",
            "repoLink": "https://github.com/kelebetengida/Weather-CH.git"
        },
        {
            "title": "Family Knowledge Exchange",
            "img": "responsivedes.png",
            "tech": "Express.js, React.js, React-Bootstrap, styled-component, JWT validation, Node.js, MongoDB, Apollo-Server-Express, GraphQL",
            "cName": "Family Knowledge Exchange",
            "appLink": "https://fierce-island-14478.herokuapp.com/",
            "repoLink": "https://github.com/kelebetengida/family-knowledge-exchange.git"
        }
    ];

export default function ProjectCard() {
    return (
        <div style={{ background: "linear-gradient(360deg, #AFD275 9%, #C2CAD0 100%, #AFD275 9%)", justifyContent: "center" }}>
            <main>
                <h1 class="h1-responsive font-weight-bold text-center my-0">Work </h1><br/><br/>
                <section >

                    <div style={{ display: "grid", gridTemplateColumns: "auto  ",   paddingBottom: "80px" }}>
                        {workData.map((work) => (
                            <PorfolioCard title={work.title} tech={work.tech} cName={work.cName} appLink={work.appLink} repoLink={work.repoLink} img={work.img}>
                                
                            </PorfolioCard>
                        ))}
                    </div>
                </section>
               
            </main>
        </div>
    )
}
