import React from "react";
import Footer from "../Footer/footer";
import PageHeading from "../PageHeading/pageHeading";
import "./aboutme.scss";
import img from "../../img/pro2 (2).jpg";
import ParticlesJs from "./particles";

const AboutMe = () => {
    return (
        <div className="aboutme">
            <PageHeading title="About me" />
            <div className="about">
                <div className="container">
                    <div className="row">
                        <ParticlesJs />
                        <div
                            className="col-lg-6 col-12 mt-5 justify-content-md-center justify-content-lg-start"
                            data-aos="fade-up"
                        >
                            <div className="text-center">
                                <div className="profile-pic">
                                    <img
                                        src={img}
                                        alt=""
                                        className="img-fluid pro-pic"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-12 mt-5"
                            data-aos="fade-down"
                        >
                            <div className="home-text">
                                <h1>Umme Sadeka</h1>
                                <h4>A Front End Develpoer</h4>
                                <p>
                                A passionate computer engineer. I currently develop web and desktop applications. My core skill is based on JavaScript. I like dabbling in various sections of front-end development and like to learn about new technologies, write technical articles, and also love to learn tips and tricks regarding computer and software
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutMe;
