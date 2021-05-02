import React from "react";
import img from "../../img/pro2 (2).jpg";
import "./home.scss";

import Typical from "react-typical";

import { Link } from "react-router-dom";
import ParticlesJs from "./particles";

const Home = () => {
    return (
        <div className="homepage">
            <div className="container">
                <div
                    className="row"
                    style={{
                        position: "relative",
                    }}
                >
                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="home-text text-center text-md-left">
                            <h1>Umme Sadeka</h1>
                            <h4>
                                <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        "A Front End Develpoer",
                                        1000,
                                        "JavaScript Enthusiast",
                                        1000,
                                        "Love to solve problems",
                                        1000,
                                    ]}
                                />
                            </h4>
                            <Link className="hire-me btn" to="/contactme">
                                hire me
                            </Link>
                            <div className="icon">
                                <a
                                    href="https://github.com/ummesadeka"
                                    className="social-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i
                                        class="fa fa-github-square"
                                        aria-hidden="true"
                                    ></i>
                                </a>

                                <a
                                    href="https://www.facebook.com/profile.php?id=100048709404320"
                                    className="social-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i
                                        class="fa fa-facebook-square"
                                        aria-hidden="true"
                                    ></i>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/umme-sadeka-942718203/"
                                    className="social-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i
                                        class="fa fa-linkedin-square"
                                        aria-hidden="true"
                                    ></i>
                                </a>

                                <a
                                // href = "medium link dite hbe"
                                    href=""
                                    target="_blank"
                                    className="social-icon"
                                    rel="noopener noreferrer"
                                >
                                    <i
                                        class="fa fa-medium"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-lg-6 mb-5 col-md-center justify-content-md-center justify-content-lg-start"
                        data-aos="fade-left"
                    >
                        <div className="text-center text-md-left ">
                            <div className="profile-pic">
                                <img src={img} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
