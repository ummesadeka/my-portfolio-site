import React from "react";
import { a } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="icon col-lg-12 text-center">
                        <a
                            href="https://github.com/ummesadeka"
                            className="social-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i
                                className="fa fa-github-square"
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
                                className="fa fa-facebook-square"
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
                                className="fa fa-linkedin-square"
                                aria-hidden="true"
                            ></i>
                        </a>

                        <a
                        // href="medium link dite hbe"
                            href=""
                            target="_blank"
                            className="social-icon"
                            rel="noopener noreferrer"
                        >
                            <i className="fa fa-medium" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="col-lg-12 text-center">
                        <h4>COPYRIGHT©2021 SADEKA ALL RIGHTS RESERVED</h4>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
