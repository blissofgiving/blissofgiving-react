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
import { Card, useScrollTrigger, Grid, Link, GridList, Tabs, Tab, LinearProgress, Avatar, Popper, Grow, ClickAwayListener, MenuList, MenuItem, Paper } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import LanguageIcon from '@material-ui/icons/Language';
import HistoryIcon from '@material-ui/icons/History';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function CustomHeader(props) {
    const classes = useStyles();
    const history = useHistory();


    const handleClickOpen = () => {
        //   setOpen(true);
    };

    // const handleClose = () => {
    //     // setOpen(false);
    // };

    useEffect(() => {

    })

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        console.log(event);

        // if (anchorRef.current && anchorRef.current.contains(event.target)) {
        //     return;
        // }

        setOpen(false);
        switch (event) {
            case 0:
                history.push('/sign-in')
                break;
            case 1:
                history.push('/sign-in')
                break;
            case 2:
                history.push('/sign-in')
                break;
            default:
                break;
        }
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (
        <>

            <AppBar position={props.pos} style={{ boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" style={{ fontSize: 20, cursor: 'pointer', fontWeight: 'bold', paddingLeft: 50, width: 300 }} onClick={() => {
                        //  handleClickOpen()
                        history.push('/')
                    }}>LOGO</Typography>
                    {props.isSignedIn === true ?
                        <Grid container justify="flex-end">
                            <Avatar alt="Remy Sharp" src="https://scc1031.com/wp-content/uploads/2020/02/computer-icons-user-profile-avatar-profile-transparent-png-thumbnail.jpg" />
                            <ArrowDropDownIcon
                                ref={anchorRef}
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}></ArrowDropDownIcon>

                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                    <MenuItem onClick={() => { handleClose(0) }}>Profile</MenuItem>
                                                    <MenuItem onClick={() => { handleClose(1) }}>My account</MenuItem>
                                                    <MenuItem onClick={() => { handleClose(2) }}>Logout</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </Grid>
                        :
                        <Grid container justify="flex-end">

                            <Typography className={classes.headerMenu} >About</Typography>
                            <Typography className={classes.headerMenu} >Start a Fundriser</Typography>
                            <Typography className={classes.headerMenu}>Donate</Typography>
                            <Link onClick={() => {
                                handleClickOpen()
                            }}> <Typography className={classes.headerMenu} >Sign-in</Typography></Link>
                        </Grid>}
                </Toolbar>
            </AppBar>
        </>
    );
}
