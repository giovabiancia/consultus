import React, { useContext } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import buffet from "../img/warren.png";

import { RequestContext } from "../context/RequestContext";

import { Select, TextField } from "@material-ui/core";

export default function Step5() {
  const [request, setRequest] = useContext(RequestContext);

  return (
    <Container>
      <Row>
        <Col md="12" lg="6">
          <h3>
            Stiamo preparando la lista dei migliori consulenti più adatti a
            te...
          </h3>
        </Col>
        <Col md="12" lg="6">
          <cite>“Il rischio nasce dal non sapere cosa stai facendo.”</cite>
          <img src={buffet}></img>
        </Col>
      </Row>
    </Container>
  );
}
