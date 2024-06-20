import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../src/utils/api";
import { useParams } from "react-router-dom";
import "../styling/comments.css";

function CommentsByArticleId() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalVotes, setTotalVotes] = useState(0);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
      let totalVotes = 0;
      data.forEach((comment) => {
        totalVotes += comment.votes;
      });
      setTotalVotes(totalVotes);
      setComments(data);
      setLoading(false);
    });
  });

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <section>
      <h3>Comments</h3>
      <p>Total votes: {totalVotes}</p>
      {comments.map((comment) => {
        return (
          <ul className="comments" key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>-{comment.author}</p>
          </ul>
        );
      })}
    </section>
  );
}

export default CommentsByArticleId;
