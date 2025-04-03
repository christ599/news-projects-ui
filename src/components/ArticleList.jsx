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
            <section key ={article.article_id}>
              <h3>author: {article.author}</h3> 
              <Link to={`/articles/${article.article_id}`}>
              <h3> title: {article.title}</h3> 
              </Link>
              <img src ={article.article_img_url}/>

            </section>
        )

      })
    };

    export default ArticleList;
    /*return (
        <div>
          <h2>Articles</h2>
          <ul>
            {articles.map((article) => (
              <li key={article.article_id}>
                  <h3>{article.title}</h3>
                <p>{article.article_img_url}</p>
              </li>
            ))}
          </ul>
        </div>
      );*/
  
