import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { Card, useScrollTrigger, Grid, Link, GridList, Tabs, Tab, LinearProgress } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import SignIn from '../SignIn';
import LanguageIcon from '@material-ui/icons/Language';
import HistoryIcon from '@material-ui/icons/History';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Footer from '../Footer';
import FundRaiserList from './FundRaiserList';
import CustomTab from '../../Common/CustomTab';
import ReactPlayer from 'react-player';
import './FundRaiser.css';
import { useHistory } from 'react-router-dom';
import { resize } from '../../service/common';
import DonorList from './DonorList';
import Slider from "react-slick";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomHeader from '../../Common/Header';

const useStyles = makeStyles(theme => ({
    root: {
        bottom: theme.spacing(2),
        top: theme.spacing(2),
    },
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    },

    headerMenu: {
        paddingRight: 20,
        cursor: 'pointer',
        //  color:'#000'
    },
    grdlst: {
        width: '80%',
        marginLeft: '10%',
        marginTop: '5%'
    },
    header: {
        alignSelf: 'center',
        fontSize: 36,
        fontWeight: '600',
        margin: 20,
        textAlign: 'center'
    },
    media: {
        height: 0,
        marginTop:10,
        paddingTop: '56.25%', // 16:9
    },
    right: {
        marginLeft: 20,
    },
    rightCard: {
        // marginLeft: 10,
        height: 70,
        backgroundColor: '#3f51b5',
        marginBottom: 10,
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '5px 10px 13px rgb(0, 0, 0,0.6)'

        },
    },
    donate: {
        fontSize: '27px',
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        paddingTop: '16px',
        cursor: 'pointer',
    },
    earn: {
        fontSize: 36,
        fontWeight: '600'
    },
    progress: {
        marginTop: 10,
        height: 10,
        borderRadius: 3
    }

}));


function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  
    appendDots: dots => (
      <div
        style={{
          bottom: 10
        }}
      >
        <ul style={{ margin: "0px", padding: 0 }}> {dots} </ul>
      </div>
    )
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ChevronRightIcon
        className={className}
        style={{
          ...style,
          display: "block",
          color: "white",
          fontSize: "3em",
          right: "9px",
          zIndex: 1
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ChevronLeftIcon
        className={className}
        style={{
          ...style,
          display: "block",
          color: "white",
          fontSize: "3em",
          left: "9px",
          zIndex: 1
        }}
        onClick={onClick}
      />
    );
  }
  

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function FundRaiser(props) {
    const classes = useStyles();
    const history = useHistory();
    const [pos, setPos] = useState('absolute');
    const [back, setBack] = useState('transparent');
    const [boxs, setBoxs] = useState('');
    const [open, setOpen] = React.useState(false);
    const [arr, setArr] = useState([1, 2, 3]);
    const [isResize,setisResize] = useState(true);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {

        window.addEventListener('load', (data) => {
            //console.log(event,'kkkkkkk');
            if (data.currentTarget.innerWidth <= 768) {
                setisResize(false)
            } if (data.currentTarget.innerWidth > 768) {
                setisResize(true)
            }
        })
        window.addEventListener('resize', (data) => {
            console.log(data);
            if (data.currentTarget.innerWidth <= 768) {
                setisResize(false)
            } if (data.currentTarget.innerWidth > 768) {
                setisResize(true)
            }
        })
        window.addEventListener('scroll', (event) => {
            console.log(event.path[1].scrollY);
            if (event.path[1].scrollY > 50) {
                setPos('fixed');
                setBack('');
            } else if (event.path[1].scrollY < 152) {
                setPos('absolute');
                setBack('transparent');
            }
        })
    })


 

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
        <CustomHeader pos={pos} isSignedIn={true}/>

            <Toolbar id="back-to-top-anchor" />
            <Grid container>
                <Grid xs={1}></Grid>
                <Grid xs={10}>
                    <Typography className={classes.header}>
                        Help Us Distribute Food To Daily Wage Earners' Families Suffering From Lockdown Due To Coronavirus
                </Typography>
                </Grid>
                <Grid xs={1}></Grid>
            </Grid>
            <Grid container>
                <Grid xs={1}></Grid>
                <Grid xs={11}>
                    <Grid container>
                        <Grid xs={isResize===false?11:7}>

                            <Card className={classes.root} >

                                 <Slider {...settings}>
                                <div className='player-wrapper'>
                                    <ReactPlayer
                                        className='react-player'
                                        url='https://www.youtube.com/watch?v=bk7McNUjWgw'
                                        width='100%'
                                        height='100%'
                                        // playing={true}
                                        controls={true}
                                    />
                                </div>

                                <CardMedia
                                    className={classes.media}
                                    image="https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/171000/171615/image/widf6df2f35c801b86767a9536aa38abf081f47122e.jpg"
                                    title="Paella dish"
                                />
                                 <CardMedia
                                    className={classes.media}
                                    image="https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/171000/171615/image/widf6df2f35c801b86767a9536aa38abf081f47122e.jpg"
                                    title="Paella dish"
                                />
                                </Slider>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize: 15, fontWeight: 'bold' }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Typography>
                                </CardContent>



                                <CardActions disableSpacing>

                                </CardActions>

                                <CustomTab></CustomTab>
                            </Card>
                        </Grid>
                        <Grid xs={isResize===false?11:4} className={classes.right}>
                            <Card className={classes.rightCard} onClick={() => {
                           history.push('/payment')
                        }}>
                                <Typography className={classes.donate}>Donate Now</Typography>
                            </Card>
                            <Card className={classes.rightCard} >
                                <Typography className={classes.donate}>Spread The World</Typography>
                            </Card>
                            <Grid containter>
                                <Typography className={classes.earn}>INR 177,240</Typography>
                                <Typography>raised of INR 526,315 goal</Typography>
                                <LinearProgress variant="determinate" value={30} className={classes.progress} />
                            </Grid>
                            <Grid container>
                                <FundRaiserList></FundRaiserList>
                            </Grid>
                            <Grid container>
                                <DonorList></DonorList>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid xs={1}></Grid> */}
            </Grid>

            <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>

            <Footer></Footer>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <SignIn></SignIn>
                </DialogContent>
            </Dialog>
        </>
    );
}
