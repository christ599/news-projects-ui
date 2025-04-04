import React from 'react';
import { useState } from 'react'
import {useEffect } from 'react';
import { getArticles } from '../../api';
import { Link } from 'react-router-dom';


const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getArticles()
        .then((articleData)=>{
            setArticles(articleData);
            setIsLoading(false)
        })
      }, []);

      if (isLoading) return <p> gathering article data...</p>

      
      return articles.map((article)=>{
        return (
            <div className = "article-list"key ={article.article_id}>
              <h3>author: {article.author}</h3> 
              <Link to={`/articles/${article.article_id}`}>
              <h3> title: {article.title}</h3> 
              </Link> 
              <img src ={article.article_img_url}/>

            </div>
        )
      })
    };

    export default ArticleList;
  
