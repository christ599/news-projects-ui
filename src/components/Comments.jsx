import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from '../../api';


const Comments = () => {
    const { article_id } = useParams();
  const [comments, setComment] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
          setIsLoading(true)
          getComments(article_id)
          .then((articleData)=>{
              setComment(articleData);
              setIsLoading(false)
          })
        }, [article_id]);

        if (isLoading) return <p> gathering comments data...</p>
        return (
            <div>
              <ol>
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <h2>Comment</h2>
            <p>comment_id: {comment.comment_id}</p>
            <p>article_id: {comment.article_id}</p>
            <p>body: {comment.body}</p>
            <p>votes: {comment.votes}</p>
            <p>author: {comment.author}</p>
            <p>created_at: {comment.created_at}</p>
          </li>
               ))}
             </ol>
            </div>
        )
             
    
};

export default Comments;