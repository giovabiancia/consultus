import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Step1 from "../RegistrationConsultant/Step1";
import Step2 from "../RegistrationConsultant/Step2";
import Step3 from "../RegistrationConsultant/Step3";
import Step4 from "../RegistrationConsultant/Step4";
import Step5 from "../RegistrationConsultant/Step5";
import LinearProgress from "@material-ui/core/LinearProgress";
import ReactGa from "react-ga";
import { Helmet } from "react-helmet";
import firebase from "../firebase";
import { loadStripe } from "@stripe/stripe-js";

import { Container } from "react-bootstrap";
import NavigationMenu from "../components/global-components/NavigationMenu";
import { useHistory } from "react-router";
import { ConsultantStepContext } from "../context/ConsultantStepContext";

import { ConsultantContext } from "../context/ConsultantContext";
import { useAuthentication } from "../hooks/useAuthentication";
import Step6 from "../RegistrationConsultant/Step6";

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
  return ["Step1", "Step2", "Step3", "Step4", "Step5", "Step6"];
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
    case 5:
      return <Step6></Step6>;
  }
}

export default function RegistrationConsultant() {
  const [activeStep, setActiveStep] = useContext(ConsultantStepContext);
  const [request, setRequest] = useContext(ConsultantContext);
  const [loading, setLoading] = useState(false);

  const auth = useAuthentication();

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
    setProgress((activeStep) => activeStep + 60);
    setSkipped(newSkipped);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setProgress((activeStep) => activeStep - 60);
  };
  /*  const sendEmail = () => {
    window.Email.send({
      SecureToken: "5138ee51-b43a-4a8d-a83f-e91f58306377",
      To: request.email,
      From: "giovannibiancia@gmail.com",
      Subject: "Grazie per la richiesta",
      Body: "Un nostro consulente risponder?? il prima possibile",
    }).then((message) => alert(message));
  };
 */

  const sendRequest = (e) => {
    setLoading(true);

    /*     */
    e.preventDefault();

    let newConsultant = {
      attivo: false,
      nome: request.nome,
      cognome: request.cognome,
      foto: auth.loggedIn.photoURL,
      uid: auth.loggedIn.uid,
      credit: [],
      articoli: [],
      views: 0,
      email: request.email,
      certificato: request.certificato,
      anni: request.anni,
      patrimonio: request.patrimonio,
      titoloStudio: request.titoloStudio,
      banca: request.banca,
      esperienza: request.esperienza,
      specializzazione: request.specializzazione,
      competenze: request.competenze,
      about: request.about,
      facebook: request.facebook,
      instagram: request.instagram,
      linkedin: request.linkedin,
      twitter: request.twitter,
      indirizzo: request.indirizzo,
      portafoglio: request.portafoglio,
      fondoPensione: request.fondoPensione,
      rischio: request.rischio,
      fotoURL: request.fotoURL,
      progress: request.progress,
    };
    // CREO IL CONSULENTE
    firebase
      .firestore()
      .collection("consulenti")
      .doc(auth.loggedIn.uid)
      .set(newConsultant)
      .then(function (doc) {
        // CREO LA SESSIONE DI PAGAMENTO
        firebase.default
          .firestore()
          .collection("consulenti")
          .doc(auth.loggedIn.uid)
          .collection("checkout_sessions")
          .add({
            price: "price_1JAyyOLyrGIetcWTlBxvgrgz", // id prezzo stripe price
            success_url: window.location.origin + "/profilo", // pagamento andato bene
            cancel_url: window.location.origin, // pagamento andato male
          })
          .then((docRef) => {
            docRef.onSnapshot(async (snap) => {
              const { error, sessionId } = snap.data();

              if (error) {
                alert(error.message);
              }

              if (sessionId) {
                const stripe = await loadStripe(
                  "pk_live_51JAyOjLyrGIetcWTsyGiWwjkslkJxja7YzPGmaGqqmkGQh1RH7ZxqODA6AylfWR3oegnLn4Ksrqe3E7CGe8J39es00v6aW1Sg6"
                );
                await stripe.redirectToCheckout({ sessionId }).then((e) => {
                  alert(e);
                });
                /*  history.push("/profilo"); */
              }
            });
          });
      })
      .catch((e) => alert("Errore nella richista" + e));
  };

  return (
    <div>
      <NavigationMenu></NavigationMenu>
      <Helmet>
        <title>
          ProntoConsulenti | Consulenti finanziari, assicurativi, fiscali |
          Inizia Ora
        </title>
        <meta name="description" content="Affidati a dei professionisti" />
      </Helmet>
      <Container style={{ height: "100vh" }}>
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
            <div className="col-12">{getStepContent(activeStep)}</div>
          )}

          <LinearProgress variant="determinate" value={activeStep * 20} />
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
                Invia Application
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
      {loading && (
        <div class="preloader">
          <div class="main-circle">
            <div class="green-circle">
              <div class="brown-circle"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
