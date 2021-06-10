import React, { useContext } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Select, TextField } from "@material-ui/core";
import { RequestContext } from "../context/RequestContext";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import HomeIcon from "@material-ui/icons/Home";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
export default function Step2() {
  const [request, setRequest] = useContext(RequestContext);

  const handleInvestire = (value) => {
    let newState = Object.assign({}, request);
    if (request.investire == false) {
      newState.investire = true;
    } else {
      newState.investire = false;
    }
    setRequest(newState);
  };
  const handleRisparmiare = (value) => {
    let newState = Object.assign({}, request);
    if (request.risparmiare == false) {
      newState.risparmiare = true;
    } else {
      newState.risparmiare = false;
    }
    setRequest(newState);
  };
  const handleMutuo = (value) => {
    let newState = Object.assign({}, request);
    if (request.mutuo == false) {
      newState.mutuo = true;
    } else {
      newState.mutuo = false;
    }
    setRequest(newState);
  };
  const handleFinanziamento = (value) => {
    let newState = Object.assign({}, request);
    if (request.finanziamento == false) {
      newState.finanziamento = true;
    } else {
      newState.finanziamento = false;
    }
    setRequest(newState);
  };
  const handleMigliorareInvestimento = (value) => {
    let newState = Object.assign({}, request);
    if (request.migliorareInvestimento == false) {
      newState.migliorareInvestimento = true;
    } else {
      newState.migliorareInvestimento = false;
    }
    setRequest(newState);
  };
  const handlePensione = (value) => {
    let newState = Object.assign({}, request);
    if (request.pensione == false) {
      newState.pensione = true;
    } else {
      newState.pensione = false;
    }
    setRequest(newState);
  };

  return (
    <Container>
      <Row>
        <Col className="center">
          <h3>Quale è il tuo obiettivo ?</h3>
        </Col>
      </Row>
      <Row>
        <Col sm="6" className="mt-4 center" style={{ flexDirection: "row" }}>
          <div className="ml-4 mr-4">
            <FormControlLabel
              control={
                <Checkbox
                  style={{ cursor: "pointer" }}
                  icon={<MonetizationOnIcon />}
                  checkedIcon={<MonetizationOnIcon fontSize="large" />}
                  checked={request.investire}
                  onChange={handleInvestire}
                  name="checkedI"
                />
              }
              label="Investire i miei soldi"
            />
          </div>
        </Col>
        <Col sm="6" className="mt-4 center" style={{ flexDirection: "row" }}>
          <div className="ml-4 mr-4">
            <FormControlLabel
              control={
                <Checkbox
                  style={{ cursor: "pointer" }}
                  icon={<AccountBalanceWalletIcon />}
                  checked={request.risparmiare}
                  onChange={handleRisparmiare}
                  checkedIcon={<AccountBalanceWalletIcon fontSize="large" />}
                  name="checkedI"
                />
              }
              label="Risparmiare per obiettivi futuri"
            />
          </div>
        </Col>
        <Col sm="6" className="mt-4 center" style={{ flexDirection: "row" }}>
          <div className="ml-4 mr-4">
            <FormControlLabel
              control={
                <Checkbox
                  style={{ cursor: "pointer" }}
                  icon={<HomeIcon />}
                  checked={request.mutuo}
                  onChange={handleMutuo}
                  checkedIcon={<HomeIcon fontSize="large" />}
                  name="checkedI"
                />
              }
              label="Ottenere un mutuo"
            />
          </div>
        </Col>
        <Col sm="6" className="mt-4 center" style={{ flexDirection: "row" }}>
          <div className="ml-4 mr-4">
            <FormControlLabel
              control={
                <Checkbox
                  style={{ cursor: "pointer" }}
                  icon={<AccountBalanceIcon />}
                  onChange={handleFinanziamento}
                  checkedIcon={<AccountBalanceIcon fontSize="large" />}
                  checked={request.finanziamento}
                  name="checkedI"
                />
              }
              label="Ottenere un finanziamento"
            />
          </div>
        </Col>
        <Col sm="6" className="mt-4 center" style={{ flexDirection: "row" }}>
          <div className="ml-4 mr-4">
            <FormControlLabel
              control={
                <Checkbox
                  style={{ cursor: "pointer" }}
                  icon={<TrendingUpIcon />}
                  checkedIcon={<TrendingUpIcon fontSize="large" />}
                  checked={request.migliorareInvestimento}
                  onChange={handleMigliorareInvestimento}
                  name="checkedI"
                />
              }
              label="Migliorare i miei investimenti"
            />
          </div>
        </Col>
        <Col sm="6" className="mt-4 center" style={{ flexDirection: "row" }}>
          <div className="ml-4 mr-4">
            <FormControlLabel
              control={
                <Checkbox
                  style={{ cursor: "pointer" }}
                  icon={<DirectionsWalkIcon />}
                  checkedIcon={<DirectionsWalkIcon fontSize="large" />}
                  checked={request.pensione}
                  onChange={handlePensione}
                  name="checkedI"
                />
              }
              label="Integrare la mia pensione"
            />
          </div>
        </Col>
        <Col style={{ marginBottom: 200 }}></Col>
      </Row>
    </Container>
  );
}
