import { getTopics } from "../src/utils/api";
import { useEffect } from "react";

function TopicsList({ topics, setTopics }) {

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data);
    });
  }, [setTopics]);

  return (
    <section className="topics-list">
      <h3>Pick a topic</h3>
      <ul>
        {topics.map(({ topic }) => (
          <li key={topic.slug}>{topic.slug}</li>
        ))}
      </ul>
    </section>
  );
}

export default TopicsList;
