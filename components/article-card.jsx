import { useEffect } from "react";
import { getArticles, getArticleById } from "../src/utils/api";
import "../styling/article-cards.css";
import { Link} from "react-router-dom";

function ArticleCard({article}) {

return (
  <li className="article-card">
  <Link to={`/articles/${article.article_id}`}>
    <img src={article.article_img_url} />
    <p>
      <em>{article.topic}</em>
    </p>
    <h4>{article.title}</h4>
  </Link>
</li>
)
}

export default ArticleCard;
