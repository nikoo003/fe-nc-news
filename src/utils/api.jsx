import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-news-g7c7.onrender.com/api",
});

export function getLogin() {
  return ncNews.get("/").then((res) => {
    res.data;
  });
}

export function getTopics() {
  return ncNews.get("/topics").then((res) => {
    return res.data.topics;
  });
}

export function getArticles() {
  return ncNews.get("/articles").then((res) => {
    return res.data.articles;
  });
}

export function getArticleById(article_id) {
  return ncNews.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
}

export function getCommentsByArticleId(article_id) {
  return ncNews.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
}

export function updateVotes(article_id) {
  return ncNews.patch(`/articles/${article_id}`).then((res)=>{
    return res.data
  })
}