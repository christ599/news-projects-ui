import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../../api';


const Article = () => {
    const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
          setIsLoading(true)
          getArticle(article_id)
          .then((articleData)=>{
              setArticle(articleData);
              setIsLoading(false)
          })
        }, [article_id]);

        if (isLoading) return <p> gathering article data...</p>
        return (
            <div>
              <h3>author: {article.author}</h3> 
              <h3> title: {article.title}</h3> 
              <h3>article_id: {article.article_id}</h3> 
              <h3>topic: {article.topic}</h3> 
              <h3>created_at: {article.created_at}</h3>
              <h3>votes: {article.votes}</h3>
              <h3>comment_count: {article.comment_count}</h3>   
              <img src ={article.article_img_url}/>
            </div>
        )
             
    
};

export default Article;