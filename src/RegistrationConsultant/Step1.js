import React, { useContext, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import IconButton from "@material-ui/core/IconButton";

import { ConsultantContext } from "../context/ConsultantContext";
import { Select, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

import Box from "@material-ui/core/Box";
import FileUploader from "react-firebase-file-uploader";

export default function Step1() {
  const [request, setRequest] = useContext(ConsultantContext);

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
            <h5>Nome</h5>
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
            <h5>Cognome</h5>
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
            <h5>Email</h5>
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
            <h5>Quanti anni hai ?</h5>
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
      </Container>
    </div>
  );
}
