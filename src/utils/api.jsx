import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-news-g7c7.onrender.com/api",
});

export function getLogin() {
  return ncNews
    .get("/")
    .then((res) => {
      console.log(res);
      res.data;
    })
    .catch((err) => {
      console.log("errooorrrr", err);
    });
}
