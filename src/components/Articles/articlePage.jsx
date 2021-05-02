import React, { useState } from "react";
import "./articlePage.scss";
import PageHeading from "../PageHeading/pageHeading";
import Footer from "../Footer/footer";
import img2 from "../../img/article2.png";
import ParticlesJs from "../About Me/particles";
import ArticleTemplate from "./articeleTemplate";

const ArticlePage = () => {
    const [articles] = useState([
        {
            title: "Comming Soon",
            img: img2,
            desc:
                "Comming Soon",
            link:
                ""
                // link:"medium article link dite hbe"
        },
        {
            title: "Comming Soon",
            img: img2,
            desc:
                "Comming Soon",
            link:
                "",
        },
        {
            title: "Comming Soon",
            img: img2,
            desc:
                "Comming Soon",
            link:
                "",
        },
    ]);

    return (
        <div className="article-page">
            <PageHeading title="articles" />
            <div className="articles">
                <div className="container">
                    <div className="row">
                        <ParticlesJs />
                        {articles.map((article) => (
                            <ArticleTemplate data={article} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ArticlePage;
