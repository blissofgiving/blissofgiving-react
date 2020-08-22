import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CountryDropDown from "../Common/CountryDropDown";
import Axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%!important",
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
    height:100,
    width:100
  },
  form: {
    //  width: "100%", // Fix IE 11 issue.
    minWidth: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height:50
  },
}));

export default function EditProfile() {
  const classes = useStyles();

  const [firstname, setFirstname] = useState({ name: "", error: false });
  const [middlename, setMiddlename] = useState({ name: "", error: false });
  const [lastname, setLastname] = useState({ name: "", error: false });
  const [email, setEmail] = useState({ email: "", error: false });
  const [phone, setPhone] = useState({ phone: "", error: false });
  const [password, setPassword] = useState({ password: "", error: false });
  const [username, setUsername] = useState({ name: "", error: false });
  const [token, setToken] = useState("");

  useEffect(() => {
    var usertoken = localStorage.getItem("token");
    console.log(token);
    setToken(usertoken);
  });

  const EditProfile = (event) => {
    let user = {
      userType: "USER",
      firstName: firstname.name,
      middleName: middlename.name,
      lastName: lastname.name,
      emailID: email.email,
      phoneNumber: phone.phone,
      username: username.name,
      password: password.password,
      address1: null,
      address2: null,
      city: null,
      state: null,
      country: null,
      postal: null,
    };
    console.log(user, "user model updated .............................");
    event.preventDefault();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    Axios.post(
      `http://blissofgiving.us-east-2.elasticbeanstalk.com/api/rest/v1/user`,
      user,
      config
    ).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <Container component="main" maxWidth="md">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            {"  "}
          </Typography>

          <form className={classes.form} noValidate>
            <Grid container justify="space-between">
              <Grid xs={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  name="name"
                  autoComplete="Name"
                  value={firstname.name}
                  // autoFocus
                  onChange={(name) => {
                    setFirstname({ name: name.target.value, error: false });
                  }}
                />
              </Grid>
              <Grid xs={3}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Middle Name"
                  name="name"
                  autoComplete="Name"
                  value={middlename.name}
                  // autoFocus
                  onChange={(name) => {
                    setMiddlename({ name: name.target.value, error: false });
                  }}
                />
              </Grid>
              <Grid xs={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Last Name"
                  name="name"
                  autoComplete="Name"
                  value={lastname.name}
                  // autoFocus
                  onChange={(name) => {
                    setLastname({ name: name.target.value, error: false });
                  }}
                />
              </Grid>
            </Grid>

            <Grid container justify="space-between">
              <Grid xs={5}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  label="Username"
                  name="phone"
                  autoComplete="Phone"
                  value={username.name}
                  //autoFocus
                  onChange={(name) => {
                    setUsername({ name: name.target.value, error: false });
                  }}
                ></TextField>
              </Grid>
              <Grid xs={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password.password}
                  onChange={(pass) => {
                    setPassword({ password: pass.target.value, error: false });
                  }}
                />
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email.email}
              // autoFocus
              onChange={(email) => {
                setEmail({ email: email.target.value, error: false });
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              type="number"
              label="Phone"
              name="phone"
              autoComplete="Phone"
              //autoFocus
              value={phone.phone}
              InputProps={{
                startAdornment: <CountryDropDown></CountryDropDown>,
              }}
              onChange={(phone) => {
                setPhone({ phone: phone.target.value, error: false });
              }}
            ></TextField>
            <Grid container justify="space-between">
              <Grid xs={8}></Grid>
              <Grid xs={4}>
                <Button
                  
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={EditProfile}
                  
                >
                  UPDATE
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </>
  );
}
