import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../components/login";
import Topics from "../components/topics";

function App() {

  const [topics, setTopics] = useState([])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </div>
  );
}

export default App;
