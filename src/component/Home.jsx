import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import img from '../assets/images/bfg1.jpg'
import { Card, useScrollTrigger, Grid, Link, GridList } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CustomSearch from '../Common/CustomSearch';
import SignIn from './SignIn';
import InfoCard from './InfoCard';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CauseCard from './CauseCard';
import CustomizedSteppers from './Stepper';
import {
    BrowserRouter as Router,
    Switch,
    Route,
   // Link,
    useRouteMatch,
    useParams,
    useHistory
  } from "react-router-dom";
import Footer from './Footer';



const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
    },
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    },
    container: {
        height: 600,
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: -100,
        padding: 0,

    },
    headerMenu: {
        paddingRight: 20,
        cursor: 'pointer'
    },
    grdlst: {
        width: '80%',
        marginLeft: '10%',
        marginTop: '5%'
    },
    logoText:{
      fontSize: 20, fontWeight: 'bold', paddingLeft: 50, width: 300 
    },
    mainText:{
        position: 'absolute', top: 200, left: 200, width: 500, right: 0, bottom: 0, fontSize: 35, color: '#fff', fontWeight: 'bold', fontFamily: 'Roboto', justifyContent: 'center', alignItems: 'center' 
    },
    mainText2:{
         position: 'absolute', top: 250, left: 200, width: 200, right: 0, bottom: 0, fontSize: 20, color: '#fff', justifyContent: 'center', fontFamily: 'Roboto', alignItems: 'center'
    },
    fundRaiserButtonCard:{
      height: 50, width: 300, backgroundColor: '#FFF', position: 'absolute', top: 300, left: 200, color: 'rgb(63, 181, 159)', borderRadius: 50, cursor: 'pointer' 
    },
    fundRaiserButtonText:{
        marginTop: 10, marginLeft: 40, fontSize: 20, fontWeight: 'bold'
    }
}));


function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
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

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});




export default function Home(props) {
    const classes = useStyles();
    const history = useHistory();

    const [pos, setPos] = useState('absolute');
    const [back, setBack] = useState('transparent');
    const [boxs, setBoxs] = useState('');
    const [open, setOpen] = React.useState(false);
    const [arr, setArr] = useState([1, 2, 3]);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const [isResize,setisResize] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        window.addEventListener('resize',(data)=>{
            console.log(data);
            if(data.srcElement.outerWidth<=768){
                setisResize(false)
            }if(data.srcElement.outerWidth>768){
                setisResize(true)
            }
        })
        window.addEventListener('scroll', (event) => {
            console.log(event.path[1].scrollY);
            if (event.path[1].scrollY > 100) {
                setPos('fixed');
                setBack('');
            } else if (event.path[1].scrollY < 152) {
                setPos('absolute');
                setBack('transparent');
            }
        })
    })

    const handleSelectCard =(props)=>{
        history.push('/faund-raiser')
        
    }
    return (
        <>

            <AppBar position={pos} style={{ background: back, boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.logoText}>LOGO</Typography>
                    {isResize === true?<CustomSearch></CustomSearch>:null}
                    <Grid container justify="flex-end">

                        <Typography className={classes.headerMenu} >About</Typography>
                        <Typography className={classes.headerMenu} >Start a Fundriser</Typography>
                        <Typography className={classes.headerMenu}>Donate</Typography>
                        <Link onClick={() => {
                            handleClickOpen()
                        }}> <Typography className={classes.headerMenu} >Sign-in</Typography></Link>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <Grid className={classes.container}>
                <Typography className={classes.mainText}>Experience The Bliss of </Typography>
                <Typography className={classes.mainText2}>0% Platform<ArrowRightIcon style={{ color: '#ff9900' }}></ArrowRightIcon> </Typography>
                <Card className={classes.fundRaiserButtonCard}>
                    <Typography className={classes.fundRaiserButtonText} >START A FUNDRISER</Typography>
                </Card>
                {/* <Grid containter style={{ height: 50,width:'100%',backgroundColor: '#FFF', position: 'absolute', top: 515, cursor: 'pointer' }}>
                    <Grid xs={4}  alignItems="center" justify="center">
                        <Typography style={{fontSize:25,fontWeight:'bold',color: 'rgb(63, 181, 159)',marginLeft:100}}>8000 Cr+</Typography>
                        <Typography style={{fontSize:15,fontWeight:'bold',color: '#999',marginLeft:100}}>Raised</Typography>
                    </Grid>
                    
                </Grid> */}
            </Grid>
            <Grid container style={{margiTop:50,marginBottom:50}}>
                <CustomizedSteppers></CustomizedSteppers>
            </Grid>
            <Grid container
                direction="column"
                alignItems="center"
                justify="center"
                style={{ marginTop: 30 }}>
                <Grid xs={12}>
                    <Typography style={{ fontSize: 25, fontWeight: 'bold' }}>Trending Fundraisers</Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography style={{ color: '#777' }}>View the fundraisers that are most active right now</Typography>
                </Grid>
            </Grid>
            <Grid container direction="column"
                alignItems="center"
                justify="center"
            >
                <GridList cols={2.5} >
                    {arr.map((item, i) => (
                        <InfoCard handleSelectCard={handleSelectCard}></InfoCard>
                        
                    ))}
                </GridList>
            </Grid>
            
            <Grid container
                direction="column"
                alignItems="center"
                justify="center"
                style={{ marginTop: 30 }}>
                <Grid xs={12}>
                    <Typography style={{ fontSize: 25, fontWeight: 'bold' }}>Causes you can raise funds for</Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography style={{ color: '#777' }}>Be it for a personal need, social cause or a creative idea - you can count on us for</Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography style={{ color: '#777' }}>the project that you want to raise funds for.</Typography>
                </Grid>
            </Grid>
           

            <Grid container
                direction="column"
                alignItems="center"
                justify="center" style={{ paddingLeft: 80 }} >
                <Grid xs={10}>
                    <GridList cols={4}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => (
                            <CauseCard></CauseCard>
                        ))}
                    </GridList>
                </Grid>
            </Grid>
            <Footer></Footer>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>


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
