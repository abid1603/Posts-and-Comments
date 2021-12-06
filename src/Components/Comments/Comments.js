import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useStyles } from '../SinglePost/SinglePostStyle';

const Comments = () => {
   const {userId,id} = useParams();
   const [post, setPost] = useState([]);
   //const [comments, setComments] = useState([]);
    
   useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        
        setPost(data)
        //console.log("post",post)
      })
      .catch((error) => {
        console.error('Error:', error);
      });

},[])
    // useEffect(() =>{
    //     fetch('https://jsonplaceholder.typicode.com/comments')
    //     .then(res => res.json())
    //     .then(data => {
            
    //         setComments(data)
    //         console.log("comments",comments)
    //       })
    //       .catch((error) => {
    //         console.error('Error:', error);
    //       });
    // },[])

    // const singlepost = post.find(pd => pd.id === id);
    // console.log(singlepost)
    const classes = useStyles()
    return (
        <div>
            {

                <Card  sx={{ minWidth: 275,margin:'0 40px' }}  gutterBottom>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">UserID :{userId}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        ID : {id}
                    </Typography>
                    <Typography variant="h5" component="div">
                    {post.map(pd =>{
                        return(
                            pd.id === Number(id)?
                            <Typography variant="h4">{pd.title}</Typography>:<span></span>
                        )
                    })}
                    </Typography>
                    <Typography variant="body2">{}</Typography>
                </CardContent>
                 </Card>
            }
        </div>
    );
};

export default Comments;