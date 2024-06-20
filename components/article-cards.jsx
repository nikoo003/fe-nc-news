import { useEffect } from "react";
import { getArticles } from "../src/utils/api";
import "../styling/article-cards.css"

function ArticleCards({ articles, setArticles }) {
  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <section >
      <h3>All articles</h3>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.title} className="article-card" >
              <img src={article.article_img_url}/>
              <h4>{article.title}</h4>
              <p><em>{article.topic}</em></p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ArticleCards;
