import { useState } from "react";
import TopicsList from "./topics-list";

const Topics = () => {
  const [topics, setTopics] = useState();

  return (
    <section className="topics">
      <TopicsList topics={topics} setTopics={setTopics}/>
    </section>
  );
};

export default Topics;
