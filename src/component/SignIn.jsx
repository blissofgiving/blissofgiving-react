import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import Axios from 'axios';
import UserDataService from '../service/UserDataService';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [username, setUsername]=useState('');
  const [password,setpassword]=useState('');

  const Login=()=>{
    console.log(process.env.USRL);
    let data={
      username:username,
      password:password
    }
    UserDataService.login(data).then((res)=>{
      console.log(res);
      if(res.status==200){
        const config = {
          withCredentials: true,
          mode: 'no-cors',
          headers: { Authorization: `Bearer ${res.data.jwtToken}`,"Content-Type": "application/json",
          "Cache-Control": "no-cache",'Access-Control-Allow-Origin': '*', },
        };
        Axios.get('http://blissofgiving.us-east-2.elasticbeanstalk.com/api/rest/v1/user?username=bliss', config).then((ress)=>{
        //  console.log(ress,'llllllllllllllllllllllllllllllllllllllllllllllllll');
        })
        localStorage.setItem("token",res.data.jwtToken)
        props.active(false)
      }
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="User Name"
            name="email"
          //  autoComplete="email"
            autoFocus
            onChange={(email)=>{
              console.log(email.target.value);
              setUsername(email.target.value)
              
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
           // autoComplete="current-password"
            onChange={(password)=>{
              console.log(password.target.value);
              setpassword(password.target.value)
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
           // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={Login}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
       
      </Box>
    </Container>
  );
}