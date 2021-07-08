import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useAuthentication } from "../hooks/useAuthentication";
import { useHistory } from "react-router-dom";

import banner from "../img/banner.jpg";

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
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1547656807-9733c2b738c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [name, setName] = useState("");
  const [cognome, setCognome] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuthentication();
  const history = useHistory();
  const classes = useStyles();
  const checkValues = () => {
    if (name == "") {
      setErrorName(true);
    } else {
      let nomeCognome = name + " " + cognome;
      auth.signUpEmail(nomeCognome, email, password);
    }
  };
  const googleLogin = (e) => {
    e.preventDefault();
    auth.login();
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iscriviti
          </Typography>
          <div className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} className="center mb-4 mt-2">
                <button
                  class="btn btn-lg btn-google btn-block text-uppercase"
                  type="submit"
                  style={{ fontSize: 15 }}
                  onClick={auth.login}
                >
                  <i class="fab fa-google mr-2"></i> Iscriviti con Google
                </button>
              </Grid>
              <Grid item xs={12} sm={6} className="center mb-4 mt-2">
                <button
                  class="btn btn-lg btn-facebook btn-block text-uppercase "
                  type="submit"
                  style={{ fontSize: 15 }}
                  onClick={auth.fbLogin}
                >
                  <i class="fab fa-facebook-f mr-2"></i> Iscriviti con Facebook
                </button>
              </Grid>
              <Grid item xs={12} sm={6} spacing={5}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  error={name == "" ? (errorName ? true : false) : null}
                  helperText={
                    name == "" ? (errorName ? "Required" : null) : null
                  }
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  error={cognome == "" ? (errorName ? true : false) : null}
                  helperText={
                    cognome == "" ? (errorName ? "Required" : null) : null
                  }
                  type="text"
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                  variant="outlined"
                  required
                  id="lastName"
                  label="Cognome"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Voglio ricevere materiale promozionale e aggiornamenti via email"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Hai già un account? Log in
                </Link>
              </Grid>
            </Grid>
          </div>{" "}
        </div>
      </Grid>
    </Grid>
  );
}
