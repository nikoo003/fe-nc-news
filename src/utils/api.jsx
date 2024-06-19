import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-news-g7c7.onrender.com/api",
});

export function getLogin() {
  return ncNews.get("/").then((res) => {
    res.data;
  });
}

export function getTopics () {
    return ncNews.get("/topics").then((res)=>{
        console.log(res)
    })
}
