import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Grid, LinearProgress } from '@material-ui/core';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 300,
        margin: 20,

        '&:hover': {
            cursor: 'pointer',
            boxShadow: '5px 10px 13px rgb(0, 0, 0,0.6)'
        },
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    // footer: {
    //     borderTop: '4px solid #3f51b5',
    //     height: 37,
    //     padding: 0,
    //     margin: 0
    // },
    footerLeft: {

       // borderRight: '2px solid #3f51b5',
       // height: 40,
        fontSize:10
    },
    footerRight: {
       // height: 40,
       fontSize:10
    },
    footerLeftTxt: {
       // padding: 10
       float:'left',
       fontSize:12
    },
    footerRightTxt: {
        //padding: 12,
        float:'right',
        fontSize:12
    },
    raised: {
        fontSize: 20,
        // fontWeight:'bold',
        fontFamily: 'sans-serif',
        color: '#3f51b5',
        paddingLeft: 10,
    },
    plntxt: {
        paddingLeft: 5,
        paddingTop: 5
    },
    progress: {
        //marginTop: 10,
        height: 15,
        borderRadius: 3,
        margin: 10
    }
}));

export default function ActiveFundraiser(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Card className={classes.root} onClick={() => { props.handleSelectCard(props) }}>

            <CardMedia
                className={classes.media}
                image="https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/171000/171615/image/widf6df2f35c801b86767a9536aa38abf081f47122e.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>
            </CardContent>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
          </Avatar>
                }
                title="Shrimp and Chorizo Paella"
            />
            <Grid container justify="center">
                <Typography style={{margin:10, fontSize:12}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </Typography>
            </Grid>
            <Grid container>
                <Typography className={classes.raised}>INR 122,791 </Typography>
                {/* <Typography className={classes.plntxt}>raised</Typography> */}
            </Grid>
            <LinearProgress variant="determinate" value={30} className={classes.progress} />
            <CardActions >
                <Grid container className={classes.footer}>
                    <Grid xs={6} className={classes.footerLeft}>
                        <Typography className={classes.footerLeftTxt}>52%</Typography>
                    </Grid>
                    <Grid xs={6} className={classes.footerRight}>
                        <Typography className={classes.footerRightTxt}>4 day Left</Typography>
                    </Grid>
                </Grid>

            </CardActions>

        </Card>
    );
}
