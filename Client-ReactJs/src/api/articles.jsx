import axios from "axios";

const API = axios.create({
  baseURL: "https://server-bogs.onrender.com/api",
});

export const fetchArticles = async () => {
  const res = await API.get("/articles");
  return res.data;
};
