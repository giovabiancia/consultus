import React, { useContext } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Select, TextField } from "@material-ui/core";
import { RequestContext } from "../context/RequestContext";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import InputAdornment from "@material-ui/core/InputAdornment";
import NumberFormat from "react-number-format";
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";

export default function Step3() {
  const [request, setRequest] = useContext(RequestContext);

  const handleInvestimento = (value) => {
    let newState = Object.assign({}, request);
    newState.investimento = value.target.value;
    newState.importoV = true;
    setRequest(newState);
  };
  const handleImporto = (value) => {
    let newState = Object.assign({}, request);
    newState.importo = value.target.value;

    setRequest(newState);
  };
  const handleImportoFinanziamento = (value) => {
    let newState = Object.assign({}, request);
    newState.importoFinanziamento = value.target.value;

    setRequest(newState);
  };
  const handlePortafoglio = (value) => {
    let newState = Object.assign({}, request);
    newState.portafoglio = value.target.value;
    setRequest(newState);
  };
  const handleFondoPensione = (value) => {
    let newState = Object.assign({}, request);
    newState.fondoPensione = value.target.value;
    setRequest(newState);
  };

  return (
    <Container>
      <Row>
        {request.migliorareInvestimento && (
          <Col className="center mt-4 center" sm="12">
            <h3>Quale l' è l' entità del tuo portafoglio</h3>
            <TextField
              value={request.portafoglio}
              onChange={handlePortafoglio}
              type="number"
              variant="outlined"
              style={{ width: "80%", textAlign: "center" }}
              className="mt-3"
            ></TextField>
          </Col>
        )}
        {request.investire || request.risparmiare ? (
          <Row style={{ width: "100%" }}>
            <Col className="center mt-4 mb-4 center" sm="12">
              <h3>Con quale frequenza vorresti investire</h3>
              <Select
                native
                variant="outlined"
                value={request.investimento}
                onChange={(value) => handleInvestimento(value)}
                style={{ width: "80%", textAlign: "center" }}
                className="mt-3"
                required
                error={
                  request.investimento == ""
                    ? request.error
                      ? true
                      : false
                    : null
                }
                helperText={
                  request.investimento == ""
                    ? request.error
                      ? "Required"
                      : null
                    : null
                }
              >
                <option aria-label="None" value="" />
                <option value={"Singola operazione"}>Singola operazione</option>
                <option value={"Mensile"}>Mensile</option>
                <option value={"Trimestrale"}>Trimestrale</option>
                <option value={"Annuale"}>Annuale</option>
              </Select>
            </Col>
            <Col className="center">
              <h3>Quale importo vorresti investire ?</h3>
              <FormControl fullWidth variant="outlined" className="mt-4 ">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>

                <OutlinedInput
                  label="Money"
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">€</InputAdornment>
                  }
                  value={request.importo}
                  onChange={handleImporto}
                  labelWidth={60}
                  required
                  error={
                    request.importo == ""
                      ? request.error
                        ? true
                        : false
                      : null
                  }
                  helperText={
                    request.importo == ""
                      ? request.error
                        ? "Required"
                        : null
                      : null
                  }
                />
              </FormControl>
            </Col>
          </Row>
        ) : null}

        {request.mutuo || request.finanziamento ? (
          <Col className=" mt-4 mb-4 center" sm="12">
            <h3>Quale è l'importo del finanziamento desiderato ? </h3>

            <FormControl fullWidth variant="outlined" className="mt-4 ">
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>

              <OutlinedInput
                label="Money"
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">€</InputAdornment>
                }
                value={request.importoFinanziamento}
                onChange={handleImportoFinanziamento}
                required
                error={
                  request.importoFinanziamento == ""
                    ? request.error
                      ? true
                      : false
                    : null
                }
                helperText={
                  request.importoFinanziamento == ""
                    ? request.error
                      ? "Required"
                      : null
                    : null
                }
                labelWidth={60}
              />
            </FormControl>
          </Col>
        ) : null}
        {request.pensione ? (
          <Col className="center mt-4 mb-4 center" sm="12">
            <h3>Conosci i vantaggi di un fondo pensione? </h3>

            <Select
              native
              variant="outlined"
              value={request.fondoPensione}
              onChange={(value) => handleFondoPensione(value)}
              style={{ width: "80%", textAlign: "center" }}
              required
              error={
                request.fondoPensione == ""
                  ? request.error
                    ? true
                    : false
                  : null
              }
              helperText={
                request.fondoPensione == ""
                  ? request.error
                    ? "Required"
                    : null
                  : null
              }
              className="mt-3"
            >
              <option aria-label="None" value="" />
              <option value={"Sì"}>Sì</option>
              <option value={"No"}>No</option>
              <option value={"Approssimativamente"}>Approssimativamente</option>
            </Select>
          </Col>
        ) : null}
        <Col style={{ marginBottom: 200 }}></Col>
      </Row>
    </Container>
  );
}
