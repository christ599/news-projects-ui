import axios from "axios";
const api = axios.create({
  baseURL: "https://nc-news-projects-1.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({data})=>{
    return data.article
  })

};

export const getArticle = (article_id) => {
    return api.get(`/articles/${article_id}`).then(({data})=>{
      return data.article
    })
  
 };

 export const getComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({data})=>{
    return data.comments
  })

};