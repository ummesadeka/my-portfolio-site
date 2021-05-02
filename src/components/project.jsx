import React, { useState } from "react";
import "./project.scss";
import PageHeading from "./PageHeading/pageHeading";
import Footer from "./Footer/footer";

import img1 from "../img/project-1.png";
import img2 from "../img/project-1.png";
import img3 from "../img/project-1.png";
import ProjectTemplate from "./Projects Page/projectTemplate";

const ProjectPage = () => {
    const [projectData] = useState([
        {
            img: img1,
            projectTitle: "E-commerce App",
            projectDesc:
                "MERN stack app where a user creates an  account and can buy products to his cart. Then he can place order if he is signedin. His order details will be kept in Mongo database.Authentication with firebase.",
            badges: [
                "React",
                "Node JS",
                "Express JS",
                "MongoDB",
                "Firebase",
                "Heroku",
            ],
            text: "Lorem ipsum dolor, sit amet consectetur",
            link1: "https://github.com/ummesadeka/sami-shop-server",
            link2: "https://sami-shop-fullstack.web.app/",
        },
        {
            img: img2,
            projectTitle: "Fancy Slider App",
            projectDesc:
                "Responsive awesome slider website. User can search their anything from the search bar like nature ,furniture, river etc. And then user can make fancy slider with selected pictures. ",
            badges: ["HTML5", "CSS", "JavaScript"],
            text: "Lorem ipsum dolor, sit amet consectetur",
            link1: "https://github.com/ummesadeka/fancy-slider",
            link2: "https://ummesadeka.github.io/fancy-slider/",
        },
        {
            img: img3,
            projectTitle: "Cooking Master App",
            projectDesc:
                " Customers can search their desired food from the search bar and can order their foods.   Customers can see the ingredients used to make the foods. Data load from live database. ",
            badges: ["HTML5", "CSS", "JavaScript"],
            text: "Lorem ipsum dolor, sit amet consectetur",
            link1: "https://github.com/iamamit-107/crown-ecommerce",
            link2: "https://suspicious-mcnulty-36b0ac.netlify.app/",
        },
  
    ]);
    return (
        <div className="projects">
            <PageHeading title="Projects" />
            <div className="project-main">
                <div className="container">
                    <div className="row">
                        {projectData.map((data) => (
                            <ProjectTemplate key={data.img} data={data} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectPage;
