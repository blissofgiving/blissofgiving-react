import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Card, TextField, Grid, Button } from '@material-ui/core';
import { comments } from '../service/mock';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
   // maxWidth: '60ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  card:{
      marginTop:20
  },
  addBtn:{
    height:'100%',
    width:'100%',
    marginLeft:10
  }
}));

export default function Comment() {

  const [commets,setComments] = useState(comments);
  const [comment,setComment] = useState('')
  const classes = useStyles();
  
  const addComment =()=>{
   let c = [];
    let demoComment = {
      url:'https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/User_No-Frame.png',
      name:'JOHN SNOW',
      description:comment
    }
    c.push(demoComment);
    console.log(c);
    
    setComments(c);
  }

  return (
      <>
      <Grid container>
        <Grid xs={10}>
        <TextField id="outlined-basic" 
        placeholder="Write Something to cheer help foundation" 
        variant="outlined" 
        fullWidth 
        onChange={(event)=>{
          setComment(event.target.value)
        }}/>
        </Grid>
        <Grid xs={2}>
          <Button variant="outlined" color="primary" className={classes.addBtn} onClick={addComment}>Add</Button>
        </Grid>
      </Grid>
      
    <List className={classes.root}>
      {commets.map((item,i)=>(
        <Grid container key={i}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item.url} />
        </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {item.description}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </Grid>
      ))}
      
     
    </List>
  </>
  );
}
