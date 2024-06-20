import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../components/login";
import TopicsList from "../components/topics-list";

function App() {


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/topics" element={<TopicsList />} />
      </Routes>
    </div>
  );
}

export default App;
