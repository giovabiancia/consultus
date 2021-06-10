import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Step1 from "../Request/Step1";
import Step2 from "../Request/Step2";
import Step3 from "../Request/Step3";
import Step4 from "../Request/Step4";
import Step5 from "../Request/Step5";

import LinearProgress from "@material-ui/core/LinearProgress";
import { RequestContext } from "../context/RequestContext";
import ReactGa from "react-ga";
import { Helmet } from "react-helmet";
import { RegistrationStepContext } from "../context/RegistrationStepContext";

import { Container } from "react-bootstrap";
import NavigationMenu from "../components/global-components/NavigationMenu";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Step1", "Step2", "Step3", "Step4", "Step5"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1></Step1>;
    case 1:
      return <Step2></Step2>;
    case 2:
      return <Step3></Step3>;
    case 3:
      return <Step4></Step4>;
    case 4:
      return <Step5></Step5>;
  }
}

export default function Request() {
  const [activeStep, setActiveStep] = useContext(RegistrationStepContext);
  const [request, setRequest] = useContext(RequestContext);

  const classes = useStyles();

  const [skipped, setSkipped] = React.useState(new Set());
  const [progress, setProgress] = React.useState(0);
  const steps = getSteps();
  const myForm = React.useRef(null);
  const history = useHistory();

  useEffect(() => {
    document.title = "Consultus | Request";
    // to report page view
    ReactGa.pageview("/request");
  }, []);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = (e) => {
    let newState = Object.assign({}, request);
    newState.error = false;
    setRequest(newState);
    e.preventDefault();
    let newSkipped = skipped;
    if (!myForm.current.checkValidity()) {
      console.log("non valido");
      let newState = Object.assign({}, request);
      newState.error = true;
      setRequest(newState);
      return;
    }
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setProgress((activeStep) => activeStep + 80);
    setSkipped(newSkipped);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setProgress((activeStep) => activeStep - 80);
  };
  /*  const sendEmail = () => {
    window.Email.send({
      SecureToken: "5138ee51-b43a-4a8d-a83f-e91f58306377",
      To: request.email,
      From: "giovannibiancia@gmail.com",
      Subject: "Grazie per la richiesta",
      Body: "Un nostro consulente risponderà il prima possibile",
    }).then((message) => alert(message));
  };
 */

  const sendRequest = (e) => {
    /*     */
    e.preventDefault();
    history.push("/profilo");
    console.log("fine richiesta");
  };
  return (
    <div>
      <NavigationMenu></NavigationMenu>
      <Helmet>
        <title>Cunsultus | Consulente finanziario | Inizia Ora</title>
        <meta name="description" content="Affidati a dei professionisti" />
      </Helmet>
      <Container>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <form ref={myForm}>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Hai completato la richiesta, ti risponderemo il prima possibile
                sulla tua email
              </Typography>
            </div>
          ) : (
            <div className="col-12">
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
            </div>
          )}

          <LinearProgress variant="determinate" value={activeStep * 25} />
          <div className=" bottomBar section ">
            <button
              disabled={activeStep === 0}
              onClick={handleBack}
              className="button button-lg button-secondary wow mr-3"
              style={{
                paddingTop: 0,
                paddingBottom: 0,
                height: 53,
                marginTop: 30,
                border: "none",
              }}
            >
              Back
            </button>

            {activeStep === steps.length - 1 ? (
              <button
                variant="contained"
                color="primary"
                className="button button-lg  button-primary  wow fadeIn"
                onClick={
                  activeStep === steps.length - 1 ? sendRequest : handleNext
                }
              >
                Scopri
              </button>
            ) : (
              <button
                variant="contained"
                color="primary"
                onClick={handleNext}
                type="submit"
                className="button button-lg  button-primary  wow fadeIn"
                onClick={
                  activeStep === steps.length - 1 ? sendRequest : handleNext
                }
              >
                Next
              </button>
            )}
          </div>
        </form>
      </Container>
    </div>
  );
}
