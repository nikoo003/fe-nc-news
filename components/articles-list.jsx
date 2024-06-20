import { useState, useEffect } from "react";
import ArticleCard from "./article-card";
import { getArticles } from "../src/utils/api";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <section>
      <h3>All articles</h3>
      <ul>
        {articles.map((article) => {
          return <ArticleCard article={article} />;
        })}
      </ul>
    </section>
  );
}

export default ArticlesList;
