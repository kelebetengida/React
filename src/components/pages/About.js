import React from "react";
import imgs from "../Assets/kelebet.jpg";
import img3 from "../Assets/seattle.jpg";
import img4 from "../Assets/819fUv8a0cL._AC_SL1417_.jpg";
const About = () => {
    return (
        <div style={{ background: "linear-gradient(360deg, #AFD275 9%, #C2CAD0 100%, #AFD275 9%)" }} >
            <div >
                <img style={{ display: "flex", width: "100%" }} src={img3} alt="" />

            </div>
            <main>
                <section >

                    <article>
                        <h3 style={{ display: "flex", justifyContent: "center", fontSize: "45px" }}>About Me</h3>
                        <p style={{ display: "flex", fontSize: "29px" }}>
                            <img style={{ display: "flex", width: "50%", padding: "20px" }} src={imgs} alt="" />
                            <br />
                            Full stack developer with curiosity to learn and problem solve. I really enjoy using my new skills from UW’s full-time Coding Bootcamp to support the entrepreneurial culture of startups and big companies.
                            <br />

                            With various internships and experience in python from undergraduate studies I am looking forward to applying my expanding skill set. I am currently learning to write Node.js server code to serve static web pages, querying large amounts of data and answering questions from a MySQL database and understanding / using Joins.
                        </p>
                    </article>
                </section>
            </main>
            <div >
                <h1 class="h1-responsive font-weight-bold text-center my-0" style={{ marginBottom: "-35px", position: "absolute" }}>Thankyou for visiting</h1>
                <img style={{ display: "flex", width: "100%" }} src={img4} alt="" />

            </div>

        </div>
    );

};

export default About;