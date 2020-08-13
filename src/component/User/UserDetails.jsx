import React, { useState, Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Card, TextField, Grid, Button } from "@material-ui/core";
import CustomHeader from "../../Common/Header";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: '60ch',
    backgroundColor: theme.palette.background.paper,
  },
  hederText: {
    alignSelf: "center",
    // marginLeft:'33%',
    fontSize: 26,
    fontWeight: 600,
    color: "#444",
  },
  text: {
    fontSize: 17,
    padding: 50,
    // lineHeight:27,
    letterSpacing: "0.4px",
    //  textAlign:'center'
  },
}));

export default class UserDetails extends Component {
  // const classes = useStyles();
  render() {
    return (
      <>
        <CustomHeader pos={"transparent"} isSignedIn={true} />

        <Grid container justify="center">
          <Typography >
            About the Fundraiser
          </Typography>
          <img
            height={"30%"}
            width={"100%"}
            src="https://d1vdjc70h9nzd9.cloudfront.net/media/website/chf-banner2-euot86.jpg"
          ></img>
      
        </Grid>
        <Footer></Footer>
      </>
    );
  }
}
