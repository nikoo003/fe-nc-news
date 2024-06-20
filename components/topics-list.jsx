import { getTopics } from "../src/utils/api";
import { useEffect, useState } from "react";

function TopicsList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data);
    });
  }, []);

  return (
    <section className="topics-list">
      <h3>Pick a topic</h3>
      <ul>
        {topics.map((topic) => (
          <li key={topic.slug}>{topic.slug}</li>
        ))}
      </ul>
    </section>
  );
}

export default TopicsList;
