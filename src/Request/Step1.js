import React, { useContext } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { RequestContext } from "../context/RequestContext";

import { Select, TextField } from "@material-ui/core";
import Map from "./Map/Map";

export default function Step1() {
  const [request, setRequest] = useContext(RequestContext);

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
          <Col md="6" sm="12" className="mt-4 center">
            <h3>Quale è la tua professione ?</h3>
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
          </Col>
          {/*  <Map></Map> */}
        </Row>
      </Container>
    </div>
  );
}