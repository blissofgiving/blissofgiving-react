import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   root:{
    height:100,
    backgroundColor:'#929294',
   }
}));
export default function Footer(props){

const classes = useStyles();

    return(
        <Grid  className={classes.root} alignItems="center"
        justify="center">

        </Grid>
    );

}