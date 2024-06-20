import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../src/utils/api";

function ArticleSection() {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((data) => {
        console.log(data)
      setArticle(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <>
      <h2>{article.title}</h2>
      <img src={article.article_img_url} />
      <p>topic: {article.topic}</p>
      <p>created: {article.created_at}</p>
      <p>"{article.body}"</p>
      <p>-{article.author}</p>
    </>
  );
}

export default ArticleSection;
