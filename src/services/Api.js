import axios from "axios";

const Get = path => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`http://localhost:5000/api/v1/${path}`).then(
      res => {
        resolve(res.data);
      },
      err => {
        reject(err);
      }
    );
  });
  return promise;
};

const Post = (path, datas) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`http://localhost:5000/api/v1/${path}`, datas).then(
      res => {
        resolve(res.data);
        const data = res.data;
        localStorage.setItem("id", data.user.id);
        localStorage.setItem("fullname", data.user.fullname);
        localStorage.setItem("username", data.user.username);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("token", data.token);
      },
      err => {
        reject(err);
      }
    );
  });
  return promise;
};

// Category
const getCategory = () => Get(`categories`);
const getCategoryArticles = id => Get(`categories/${id}/showarticles`);

// Articles
const getArticles = () => Get("articles");
const getDetailArticles = id => Get(`articles/${id}/detailarticles`);
const getArticlesbycategories = id => Get(`articles/${id}/related`);

//Login
const login = datas => Post(`login`, datas);

const API = {
  getCategory,
  getCategoryArticles,
  getArticles,
  getDetailArticles,
  getArticlesbycategories,
  login
};

export default API;
