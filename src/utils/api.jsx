import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-news-g7c7.onrender.com"
});

export function getLogin() {
  return ncNews.get("/api/").then((res) => {
    res.data;
  });
}
