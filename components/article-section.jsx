import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../src/utils/api";
import CommentsByArticleId from "./comments";
import Votes from "./votes";

function ArticleSection() {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getArticleById(article_id).then((data) => {
      setArticle(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <section className="article-section">
      <Votes article_votes={article.votes} />
      <h2>{article.title}</h2>
      <img src={article.article_img_url} />
      <p>topic: {article.topic}</p>
      <p>created: {article.created_at}</p>
      <p>"{article.body}"</p>
      <p>-{article.author}</p>
      <CommentsByArticleId />
    </section>
  );
}

export default ArticleSection;
