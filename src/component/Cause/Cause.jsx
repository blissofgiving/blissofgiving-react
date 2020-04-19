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
import { Card, useScrollTrigger, Grid, Link, GridList, Tabs, Tab, LinearProgress, Box, Divider } from '@material-ui/core';
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
import CustomTab from '../../Common/CustomTab';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';
import { resize } from '../../service/common';
import Slider from "react-slick";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomHeader from '../../Common/Header';
import CauseCategory from './CauseCategoryCard';
import WhyChoose from './WhyChoose';
import Swiper from 'react-id-swiper';

// Version >= 2.4.0
import 'swiper/css/swiper.css'
import ActiveFundraiser from './ActiveFundraiser';
import GetACall from './GetCall';

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
        marginTop: 10,
        paddingTop: '56.25%', // 16:9
    },
    right: {
       // marginLeft: 20,
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
    },
    secondGrid: {
        marginTop: 50,
        marginBottom: 50,
        backgroundColor: '#f7f7f7',
    },
    heading: {
        fontSize: 30,
        fontWeight: '500',

    },
    heading2: {
        fontSize: 15,
        // fontWeight:'500',
    },
    heading3: {
        fontSize: 28,
        // fontWeight:'500',
    },
    cimg: {
        height: 70, width: 70,
        margin: 20
    },
    divider:{
        marginLeft:'30%',
        marginRight:'30%'
    }

}));

const param = {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPreView: 'auto',
    grabCursor: true,
    coverfowEffect: {
        rotate: 50,
        strech: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
}

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


export default function Cause(props) {
    const classes = useStyles();
    const history = useHistory();
    const [pos, setPos] = useState('absolute');
    const [back, setBack] = useState('transparent');
    const [boxs, setBoxs] = useState('');
    const [open, setOpen] = React.useState(false);
    const [arr, setArr] = useState([1, 2, 3]);
    const [isResize, setisResize] = useState(true);

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
            <CustomHeader pos={pos} isSignedIn={true} />

            <Toolbar id="back-to-top-anchor" />

            <Grid container style={{ marginTop: 30 }}>
                <Grid xs={1}></Grid>
                <Grid xs={11}>
                    <Grid container>
                        <Grid xs={6}>

                            <Card className={classes.root} >

                                <Swiper {...param} >
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
                                    <div>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/171000/171615/image/widf6df2f35c801b86767a9536aa38abf081f47122e.jpg"
                                            title="Paella dish"
                                        />
                                    </div>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/171000/171615/image/widf6df2f35c801b86767a9536aa38abf081f47122e.jpg"
                                        title="Paella dish"
                                    />
                                </Swiper>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize: 15, fontWeight: 'bold' }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Typography>
                                </CardContent>



                                <CardActions disableSpacing>

                                </CardActions>

                                {/* <CustomTab></CustomTab> */}
                            </Card>
                        </Grid>
                        <Grid xs={6} className={classes.right}>
                        <GetACall></GetACall>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid xs={1}></Grid> */}
            </Grid>
            <Grid container justify="center" className={classes.secondGrid}>
                <Typography className={classes.heading}>What medical treatments can you raise funds for?</Typography>
                <Grid container justify="center">
                    <CauseCategory></CauseCategory>
                    <CauseCategory></CauseCategory>
                    <CauseCategory></CauseCategory>
                    <CauseCategory></CauseCategory>
                    <CauseCategory></CauseCategory>
                    <CauseCategory></CauseCategory>
                </Grid>
                <Typography className={classes.heading}>Have any query or Need help?</Typography>
                <Grid container justify="center">
                    <Typography className={classes.heading2}>Have any query or Need help?</Typography>
                </Grid>


            </Grid>
            <Grid container justify="center">
                <Typography className={classes.heading3}>Why are people choosing medical crowdfunding?</Typography>
            </Grid>
            <Divider></Divider>
            <Grid container justify="center">


                <Grid xs={6}>
                    <WhyChoose
                        img="https://cdn2.iconfinder.com/data/icons/business-blue-series-set-8/128/a-89-512.png"
                        title="High cost of treatment"></WhyChoose>
                </Grid>
                <Grid xs={6}>
                    <WhyChoose
                        img="https://cdn2.iconfinder.com/data/icons/health-care-rounded-4/512/xxx027-512.png"
                        title="Asking For Money Isn’t Easy"></WhyChoose>
                </Grid>
                <Grid xs={6}>
                    <WhyChoose
                        img="http://getdrawings.com/free-icon/bank-icon-png-64.png"
                        title="Emergencies Demand a Prompt Response"></WhyChoose>
                </Grid>
                <Grid xs={6}>
                    <WhyChoose
                        img="https://image.flaticon.com/icons/png/512/709/premium/709087.png"
                        title="Loan Repayment Is Stressful"></WhyChoose>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Typography className={classes.header}>
                    Active Fundraisers
                </Typography>
            </Grid>
            <Divider className={classes.divider}></Divider>
            <Grid container justify="center">
                {arr.map((item) => (
                    <ActiveFundraiser></ActiveFundraiser>
                ))}
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
