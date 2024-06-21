import { useEffect, useState } from "react";
import { getArticleById, updateVotes } from "../src/utils/api";
import { useParams } from "react-router-dom";

function Votes({article_votes}) {
    console.log(article_votes)
  const [votes, setVotes] = useState(0);
  const [userVoted, setUserVoted] = useState(false);
  const { article_id } = useParams();


  const handleVote = () => {
    if (!userVoted) {
      setVotes(votes+1);
      updateVotes(article_id).then((data) => {
        setUserVoted(true);
      });
    }
  };

  return (
    <section>
      <h4>Votes: {article_votes + votes}</h4>
      <button onClick={handleVote} disabled={userVoted}>
        vote
      </button>
    </section>
  );
}

export default Votes;
