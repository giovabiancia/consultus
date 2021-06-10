import React, { useContext, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { storage } from "../firebase";
import { ConsultantContext } from "../context/ConsultantContext";
import { Select, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

import Box from "@material-ui/core/Box";
import FileUploader from "react-firebase-file-uploader";

export default function Step1() {
  const [request, setRequest] = useContext(ConsultantContext);

  const [progress, setProgress] = useState(0);

  function handleChange(e) {
    let newState = Object.assign({}, request);
    newState.file = e.target.files[0];
    setRequest(newState);
  }

  function handleUpload(e) {
    e.preventDefault();
    const ref = storage.ref(`/consulenti/${request.nome}-${request.cognome}`);
    const uploadTask = ref.put(request.file);

    uploadTask.on("state_changed", (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      let newState = Object.assign({}, request);
      newState.progress = progress;
      setRequest(newState);
      ref.getDownloadURL().then((url) => {
        let newState = Object.assign({}, request);
        newState.file = null;
        newState.fotoURL = url;
        setRequest(newState);
      });
    });
  }

  const handleNome = (value) => {
    let newState = Object.assign({}, request);
    newState.nome = value.target.value;
    setRequest(newState);
  };
  const handleCognome = (value) => {
    let newState = Object.assign({}, request);
    newState.cognome = value.target.value;
    setRequest(newState);
  };
  const handleEmail = (value) => {
    let newState = Object.assign({}, request);
    newState.email = value.target.value;
    setRequest(newState);
  };
  const handleAnni = (value) => {
    let newState = Object.assign({}, request);
    newState.anni = value.target.value;
    setRequest(newState);
  };
  const handleProfessione = (value) => {
    let newState = Object.assign({}, request);
    newState.professione = value.target.value;
    setRequest(newState);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md="6" sm="12" className="mt-4 center">
            <h3>Nome</h3>
            <TextField
              value={request.nome}
              onChange={handleNome}
              variant="outlined"
              style={{ width: "80%", textAlign: "center" }}
              required
              error={request.nome == "" ? (request.error ? true : false) : null}
              helperText={
                request.nome == "" ? (request.error ? "Required" : null) : null
              }
              className="mt-3"
            ></TextField>
          </Col>
          <Col md="6" sm="12" className="mt-4 center">
            <h3>Cognome</h3>
            <TextField
              value={request.cognome}
              onChange={handleCognome}
              variant="outlined"
              style={{ width: "80%", textAlign: "center" }}
              required
              error={
                request.cognome == "" ? (request.error ? true : false) : null
              }
              helperText={
                request.cognome == ""
                  ? request.error
                    ? "Required"
                    : null
                  : null
              }
              className="mt-3"
            ></TextField>
          </Col>
          <Col md="6" sm="12" className="mt-4 center">
            <h3>Email</h3>
            <TextField
              value={request.email}
              onChange={handleEmail}
              variant="outlined"
              style={{ width: "80%", textAlign: "center" }}
              required
              error={
                request.email == "" ? (request.error ? true : false) : null
              }
              helperText={
                request.email == "" ? (request.error ? "Required" : null) : null
              }
              className="mt-3"
            ></TextField>
          </Col>
          <Col md="6" sm="12" className="mt-4 center">
            <h3>Quanti anni hai ?</h3>
            <TextField
              value={request.anni}
              onChange={handleAnni}
              type="number"
              variant="outlined"
              style={{ width: "80%", textAlign: "center" }}
              required
              error={request.anni == "" ? (request.error ? true : false) : null}
              helperText={
                request.anni == "" ? (request.error ? "Required" : null) : null
              }
              className="mt-3"
            ></TextField>
          </Col>
          {request.nome && request.cognome ? (
            <Col className="mt-4 center">
              <h4 className="mt-4 center">
                Carica la tua iscrizione a uno dei seguenti organismi: RUI, OCF,
                OAM
              </h4>
              <small className="mt-4 center">Formato PDF</small>

              <input
                accept="application/pdf"
                id="contained-button-file"
                required
                className="mt-4"
                error={
                  request.file == "" ? (request.error ? true : false) : null
                }
                helperText={
                  request.file == ""
                    ? request.error
                      ? "Required"
                      : null
                    : null
                }
                type="file"
                /*   style={{ display: "none" }} */
                onChange={handleChange}
              ></input>
              {/*   <label htmlFor="contained-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  type="upload"
                  disabled={request.file}
                >
                  <CloudUploadIcon className="m3-3" />
                  Carica
                </IconButton>
              </label> */}

              <CircularProgress
                variant="determinate"
                value={request.progress}
              />
              {request.file != null ? (
                <Button
                  className="mt-4"
                  startIcon={<CloudUploadIcon />}
                  color="primary"
                  onClick={handleUpload}
                >
                  Upload Now
                </Button>
              ) : null}
            </Col>
          ) : null}

          {/*      <Col md="6" sm="12" className="mt-4 center">
            <h3>Professione ?</h3>
            <Select
              native
              variant="outlined"
              value={request.professione}
              onChange={(value) => handleProfessione(value)}
              style={{ width: "80%", textAlign: "center" }}
              className="mt-3"
              required
              error={
                request.professione == ""
                  ? request.error
                    ? true
                    : false
                  : null
              }
              helperText={
                request.professione == ""
                  ? request.error
                    ? "Required"
                    : null
                  : null
              }
            >
              <option aria-label="None" value="" />
              <option value={"Lavoratore dipendente"}>
                Lavoratore dipendente
              </option>
              <option value={"Lavoratore autonomo"}>Lavoratore autonomo</option>
              <option value={"Studente"}>Studente</option>
              <option value={"Disoccupato"}>Disoccupato</option>
              <option value={"Pensionato"}>Pensionato</option>
            </Select>
          </Col> */}
        </Row>
        <Row>
          <Col style={{ marginBottom: 200 }}></Col>
        </Row>
      </Container>
    </div>
  );
}
