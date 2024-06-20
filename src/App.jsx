import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../components/login";
import TopicsList from "../components/topics-list";
import ArticlesList from "../components/articles-list";
import ArticleById from "../components/article-by-id";

function App() {


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<ArticleById />} />
      </Routes>
    </div>
  );
}

export default App;
