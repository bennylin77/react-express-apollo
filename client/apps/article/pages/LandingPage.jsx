import React, { useState, useEffect } from "react";

const LandingPage = () => {
    const [articleList, setArticleList] = useState([]);
    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch("/graphql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ query: "{ articles { id }}" }),
            });
            const responseJSON = await response.json();
            const {
                data: {
                    articles,
                },
            } = responseJSON;
            setArticleList(articles);
        };
        fetchArticles();
    }, []);

    const listUI = articleList.map((article) => (<li key={ article.id }>{article.id}</li>));
    return (
        <ul>
            {listUI}
        </ul>
    );
};

export default LandingPage;
