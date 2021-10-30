import React from "react";
import imgs from "../Assets/kelebet.jpg";
import img3 from "../Assets/seattle.jpg";
import img4 from "../Assets/819fUv8a0cL._AC_SL1417_.jpg";
const About = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(360deg, #AFD275 9%, #C2CAD0 100%, #AFD275 9%)",
      }}
    >
      <div>
        <img style={{ display: "flex", width: "100%" }} src={img3} alt="" />
      </div>
      <main>
        <section>
          <article>
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "45px",
              }}
            >
              About Me
            </h3>
            <p style={{ display: "flex", fontSize: "29px" }}>
              <img
                style={{ display: "flex", width: "50%", padding: "20px" }}
                src={imgs}
                alt=""
              />
              
              <br /><br />
              Dedicated and efficient Full-stack Agile Developer with an
              Environmental Science degree (focusing on remote sensing data
              analytical skills) from the University of Washington. Have
              intermediate experience in Python (panda library). Recently
              graduated with a Certificate in Full Stack Web Development from
              Coding Boot Camp from the University of Washington.
              <br />
              <br /> Well-rounded professional with communication and
              organizational skills. I really enjoy using my skill sets to
              support the entrepreneurial culture of startups and big companies.
            </p>
          </article>
        </section>
        <div>
          <p
            style={{
              display: "flex",
              fontSize: "29px",
              width: "100%",
              padding: "20px",
            }}
          >
            I recently worked in collaboration with a team of five to develop a
            single-page MERN stack application using MongoDB, GraphQL API,
            Express.js, and Node.js server with a React front end, implementing
            user authentication with JWT to build a user-focused networking hub
            where different professionals can network to tackle family
            situations to create more connections to help the foster system.
            <br />
            <br />
            Past experience in environmental data analysis has taught me current
            data is key to making informed scientific decisions in an
            ever-changing world. Led me to focus on object-oriented programming
            skills to automate and create efficient applications as well as
            applying my additional HTML, CSS, and JavaScript skills to solve
            challenging problems and foster growing success.
          </p>
        </div>
      </main>
      <div>
        <h1
          class="h1-responsive font-weight-bold text-center my-0"
          style={{ marginBottom: "-35px", position: "absolute" }}
        >
          Thankyou for visiting
        </h1>
        <img style={{ display: "flex", width: "100%" }} src={img4} alt="" />
      </div>
    </div>
  );
};

export default About;
