import React, { useContext } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { RequestContext } from "../context/RequestContext";

import { Select, TextField } from "@material-ui/core";

export default function Step4() {
  const [request, setRequest] = useContext(RequestContext);

  const handleArcoTemporale = (value) => {
    let newState = Object.assign({}, request);
    newState.arcoTemporale = value.target.value;
    setRequest(newState);
  };
  const handleRischio = (value) => {
    let newState = Object.assign({}, request);
    newState.rischio = value.target.value;
    setRequest(newState);
  };
  const marks = [
    {
      value: 0,
      label: "bassa",
    },
    {
      value: 25,
      label: "medio bassa",
    },
    {
      value: 50,
      label: "media",
    },
    {
      value: 75,
      label: "medio alta",
    },
    {
      value: 100,
      label: "alta",
    },
  ];
  function valuetext(value) {
    return ``;
  }

  return (
    <div>
      <Container>
        <Row>
          <Col md="12" sm="12" className="mt-4 center">
            <h3>Quale è il tuo orizzonte temporale ? </h3>

            <Select
              native
              variant="outlined"
              value={request.arcoTemporale}
              onChange={(value) => handleArcoTemporale(value)}
              style={{ width: "80%", textAlign: "center" }}
              className="mt-3"
              required
              error={
                request.arcoTemporale == ""
                  ? request.error
                    ? true
                    : false
                  : null
              }
              helperText={
                request.arcoTemporale == ""
                  ? request.error
                    ? "Required"
                    : null
                  : null
              }
            >
              <option aria-label="None" value="" />
              <option value={"Breve"}>da 1 a 5 anni</option>
              <option value={"Medio"}>da 5 a 10</option>
              <option value={"Lungo"}>più di 10</option>
            </Select>
          </Col>
          <Col md="12" sm="12" className="mt-4 center">
            <h3 className="mb-4">Quale è la tua prepenzione al rischio?</h3>
            <Slider
              defaultValue={request.rischio}
              aria-labelledby="discrete-slider-always"
              step={25}
              marks={marks}
              onChange={handleRischio}
              valueLabelDisplay="auto"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
