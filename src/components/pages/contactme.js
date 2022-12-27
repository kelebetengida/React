import React from "react";
import { AiFillMail } from "react-icons/ai";

export default function ContactMe() {
  return (
    <div
      style={{
        background:
          "linear-gradient(360deg, #AFD275 9%, #C2CAD0 100%, #AFD275 9%)",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(360deg, #AFD275 9%, #C2CAD0 100%, #AFD275 9%)",
          maxWidth: "60%",
          marginLeft: "300px",
        }}
      >
        <h1
          style={{
            alignItems: "center",
            backgroundColor:
              "gradient(90deg, #AFD275 9%, #C2CAD0 100%, #AFD275 9%)",
            fontSize: "50px",
          }}
        >
          <span>Contact Me</span>
        </h1>
        <div class="row g-0">
          <div
            style={{
              alignItems: "center",
              fontSize: "29px",
              marginLeft: "0px",
              marginTop: "100px",
              textDecoration: "none",
            }}
            class="col-md-6"
          >
            <p
              style={{
                textDecoration: "none",
              }}
            >
              Tel: <a href="tel:+14255039206">206 307 7869</a>
            </p>

            <p>
              Email: <a href="mailto:kelebetaengida@gmail.com">kelebetaengida@gmail.com</a>
            </p>
          </div>
          <div class="col-md-6">
            <div
              style={{
                alignItems: "center",
                fontSize: "20px",
                marginLeft: "-60px",
                borderLeftStyle: " double",
                borderWidth: "15px",
              }}
              class="card-body"
            >
              <form>
                <div
                  style={{
                    alignItems: "center",
                    fontSize: "20px",
                    marginBottom: "50px",
                    marginLeft: "70px",
                  }}
                >
                  <label for="name-contact">
                    Name: <input type="text" id="name-contact" />
                  </label>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    fontSize: "20px",
                    marginBottom: "50px",
                  }}
                >
                  <label for="email-contact">
                    Email Address: <input type="email" id="email-contact" />
                  </label>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    fontSize: "20px",
                    marginBottom: "50px",
                    marginLeft: "50px",
                  }}
                >
                  <label for="msg-contact">
                    Message:{" "}
                    <textarea rows="9" cols="35" type="text" id="msg-contact" />
                  </label>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    fontSize: "20px",
                    marginBottom: "160px",
                    marginLeft: "140px",
                  }}
                >
                  <button type="submit">
                    <i>
                      <AiFillMail className="fa fa-camera-retro fa-2x" />
                    </i>{" "}
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
