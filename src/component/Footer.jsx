import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
const useStyles = makeStyles(theme => ({
    root: {
        height: 300,
        backgroundColor: '#212529',
    },
    divider:{
        backgroundColor:'#2b5958',
        height:2,
        margin:24
    },
    logo:{
        fontSize: 36, fontWeight: 'bold', paddingLeft: 24, width: 300,color:'#FFF'
    },
    icons:{
        margin:5,
        color:'#FFF',
        fontSize:36
    },
    menuTitle:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'
    },
    menuList:{
       // fontWeight:'bold',
        color:'#FFF',
        lineHeight:2
    }
}));
export default function Footer(props) {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} alignItems="center"
            justify="center">
            <Grid xs={1}></Grid>
            <Grid xs={3} style={{alignItems:'center'}}>
                <Typography className={classes.logo}>LOGO</Typography>
                <Divider className={classes.divider}></Divider>
                <Grid container style={{marginLeft:24}}>
                    <FacebookIcon className={classes.icons}/>
                    <TwitterIcon className={classes.icons}/>
                    <LinkedInIcon className={classes.icons}/>
                    <YouTubeIcon className={classes.icons}/>
                    <InstagramIcon className={classes.icons}/>
                    <WhatsAppIcon className={classes.icons}/>
                </Grid>
            </Grid>
            <Grid xs={2} justify="center">
                <Typography className={classes.menuTitle}>Fundraiser</Typography>
                {[1,2,3,4,5].map((item,i)=>( <Typography className={classes.menuList}>Lorem Ipsum</Typography>))}
            </Grid>
            <Grid xs={2}>
                <Typography className={classes.menuTitle}>How it Works</Typography>
                {[1,2,3,4,5].map((item,i)=>( <Typography className={classes.menuList}>Lorem Ipsum</Typography>))}

            </Grid>
            <Grid xs={2}>
                <Typography className={classes.menuTitle}>About</Typography>
                {[1,2,3,4,5].map((item,i)=>( <Typography className={classes.menuList}>Lorem Ipsum</Typography>))}

            </Grid>
            <Grid xs={2}>
                <Typography className={classes.menuTitle}>Support</Typography>
                {[1,2,3,4,5].map((item,i)=>( <Typography className={classes.menuList}>Lorem Ipsum</Typography>))}

            </Grid>
            <Grid xs={1}></Grid>
        </Grid>
    );

}