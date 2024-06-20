import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../src/utils/api";
import { useParams } from "react-router-dom";
import "../styling/comments.css"

function CommentsByArticleId() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
      setComments(data);
      setLoading(false);
    });
  });

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <section >
      {comments.map((comment) => {
        return (
          <ul className="comments" key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>-{comment.author}</p>
            <p>votes: {comment.votes}</p>
          </ul>
        );
      })}
    </section>
  );
}

export default CommentsByArticleId;
