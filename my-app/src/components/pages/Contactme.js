import React from "react";

import img4 from "../Assets/819fUv8a0cL._AC_SL1417_.jpg";
const contacts = () => {
    return (
        <div style={{ background: "linear-gradient(360deg, #AFD275 9%, #C2CAD0 100%, #AFD275 9%)" }}>
            <div >
                <h1 class="h1-responsive font-weight-bold text-center my-0">Contact Me</h1>
            </div>
            <section class="mb-4">
                <div class="contactmebox">
                    <h2 class="h1-responsive font-weight-bold text-center my-4">If you have any questions please dont
                        hesitate to contactme.</h2>
                    <div class="row">
                        <div class=" col-md-9 " style={{ marginLeft: "200px" }} >
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control" />
                                            <label for="name" class="">Your name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <input type="text" id="email" name="email" class="form-control" />
                                            <label for="email" class="">Your email</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <input type="text" id="subject" name="subject" class="form-control" />
                                            <label for="subject" class="">Subject</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">

                                        <div class="md-form">
                                            <textarea type="text" id="message" name="message" rows="2"
                                                class="form-control md-textarea"></textarea>
                                            <label for="message">Your message</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="text-center text-md-left">
                                <a class="btn btn-primary"
                                >Send</a>
                            </div>
                            <div class="status"></div>
                        </div>
                    </div>
                </div>
            </section>
            <div >
                <h2 style={{ justifyContent: "center", fontSize: "45px", marginBottom: "-28px", position: "absolute" }}>Thankyou for visiting</h2>
                <img style={{ display: "flex", width: "100%" }} src={img4} alt="" />

            </div>

        </div>
    );

};

export default contacts;