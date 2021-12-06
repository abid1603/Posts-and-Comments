import React, { useEffect, useState } from 'react';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
  const [post, setPost] = useState([])
    useEffect( () =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setPost(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          
    },[])

    return (
        <div>
            {
                post.map(pd => <SinglePost key={pd.id} post ={pd}> </SinglePost>)
            }
        </div>
    );
};

export default Posts;