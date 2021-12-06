import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './SinglePostStyle';
import { useStyles } from './SinglePostStyle';
import { Box } from '@mui/system';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const SinglePost = (props) => {
    const {title,body,id,userId} = props.post
    const classes = useStyles()

    return (
         
                <Box className={classes.root}  sx={{ display: 'inline-flex',alignContent: 'center'}}>
                <Card className={classes.card} sx={{ minWidth: 275 }}  gutterBottom>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">UserID :{userId}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        ID : {id}
                    </Typography>
                    <Typography variant="h5" component="div">
                    {title}
                    </Typography>
                    <Typography variant="body2">{body}</Typography>
                </CardContent>
                <CardActions>
                    <Link to={"/detailse/"+userId+"/"+id} size="small">Detailse</Link>
                </CardActions>
                 </Card>
                 </Box>
         
    );
};

export default SinglePost;