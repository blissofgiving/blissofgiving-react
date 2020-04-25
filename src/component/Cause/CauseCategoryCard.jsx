import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
   // minWidth: 80,
   width:150,
    margin:10,
    
    '&:hover': {
        cursor: 'pointer',
        boxShadow: '7px 10px 13px rgb(0, 0, 0,0.6)'

    },
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  btn:{
      alignSelf:'center',
      justifySelf:'center',
      color:'#3f51b5'
  },
  img:{
      height:100,width:100
  }
});

export default function CauseCategory() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        {/* <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography> */}
        <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmduMQpwEbfvMBJAOwZUvL5cWw_frB_tQlFqBo5E-XiSbaaCQM&usqp=CAU"></img>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p">
        Lorem Ipsum is simply dummy 
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small" className={classes.btn}>Know More</Button>
      </CardActions>
    </Card>
  );
}
