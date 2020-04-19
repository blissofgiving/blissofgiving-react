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
import Footer from './Footer';
import CustomHeader from '../Common/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: '60ch',
        backgroundColor: theme.palette.background.paper,
    },
    hederText:{
        alignSelf:'center',
       // marginLeft:'33%',
        fontSize:26,
        fontWeight:600,
        color:'#444'
    },
    text:{
        fontSize:17,
        padding:50,
       // lineHeight:27,
        letterSpacing:'0.4px',
      //  textAlign:'center'
    }
}));

export default function AboutUs(props) {
    const classes = useStyles();
    
    return (<>
     <CustomHeader pos={"transparent"} isSignedIn={false}/>
     
        <Grid container justify="center">
           
            <Typography className={classes.hederText}>About the Fundraiser</Typography>
            <img height={'30%'} width={'100%'} src="https://d1vdjc70h9nzd9.cloudfront.net/media/website/chf-banner2-euot86.jpg"></img>
            <Typography className={classes.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>
        </Grid>
        <Footer></Footer>
        </>
    );
}
