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
          <Col className="center mt-4 center " sm="12">
            <h5 className="mb-2">Quale l' è l' entità del tuo portafoglio</h5>

            <Select
              native
              variant="outlined"
              style={{ width: "80%", textAlign: "center" }}
              value={request.portafoglio}
              onChange={(value) => handlePortafoglio(value)}
              required
              error={
                request.portafoglio == ""
                  ? request.error
                    ? true
                    : false
                  : null
              }
              helperText={
                request.portafoglio == ""
                  ? request.error
                    ? "Required"
                    : null
                  : null
              }
            >
              <option aria-label="None" value="" />
              <option value={"0-500"}>Tra 0 e 500 euro</option>
              <option value={"500-1.000"}>Tra 500 e 1.000 euro</option>
              <option value={"1.000- 2.000"}>Tra 1.000 e 2.000 euro</option>
              <option value={"2.000-4.000"}>Tra 2.000 e 4000 euro</option>
              <option value={"4.000-8.000"}>Tra 4.000 e 8000 euro</option>
              <option value={"8.000-16.000"}>Tra 8.000 e 16.000 euro</option>
              <option value={"16.000-32.000"}>Tra 16.000 e 32.000 euro</option>
              <option value={"32.000 - 64.000"}>
                Tra 32.000 e 64.000 euro
              </option>
              <option value={"64.000 - 120000"}>
                Tra 64.000 e 120.000 euro
              </option>
              <option value={"120.000 - 240.000"}>
                Tra 120.000 e 240.000 euro
              </option>
              <option value={"240.000 - 580.000"}>
                Tra 240.000 e 580.000 euro
              </option>
              <option value={"580.000 - 1.000.000"}>
                Tra 580.000 e 1.000.000 euro
              </option>
              <option value={"1.000.000 - 2.000.000"}>
                Tra 1.000.000 e 2.000.000 euro
              </option>
              <option value={"Oltre 2.000.000"}>Oltre 2.000.000 euro</option>
            </Select>
          </Col>
        )}
        {request.investire || request.risparmiare ? (
          <>
            <Col className=" mt-4 mb-4 center" sm="12">
              <h5>Con quale frequenza vorresti investire</h5>
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
                <option value={"in una singola operazione"}>
                  Singola operazione
                </option>
                <option value={"mensilmente"}>Mensilmente</option>
                <option value={"trimestralmente"}>Trimestralmente</option>
                <option value={"annualmente"}>Annualmente</option>
              </Select>
              <h5 className="mb-3 center">
                Quale importo vorresti investire {request.investimento} ?
              </h5>

              <Select
                native
                variant="outlined"
                style={{ width: "80%", textAlign: "center" }}
                value={request.importo}
                onChange={(value) => handleImporto(value)}
                required
                error={
                  request.importo == "" ? (request.error ? true : false) : null
                }
                helperText={
                  request.importo == ""
                    ? request.error
                      ? "Required"
                      : null
                    : null
                }
              >
                <option aria-label="None" value="" />
                <option value={"0-500"}>Tra 0 e 500 euro</option>
                <option value={"500-1.000"}>Tra 500 e 1.000 euro</option>
                <option value={"1.000- 2.000"}>Tra 1.000 e 2.000 euro</option>
                <option value={"2.000-4.000"}>Tra 2.000 e 4000 euro</option>
                <option value={"4.000-8.000"}>Tra 4.000 e 8000 euro</option>
                <option value={"8.000-16.000"}>Tra 8.000 e 16.000 euro</option>
                <option value={"16.000-32.000"}>
                  Tra 16.000 e 32.000 euro
                </option>
                <option value={"32.000 - 64.000"}>
                  Tra 32.000 e 64.000 euro
                </option>
                <option value={"64.000 - 120000"}>
                  Tra 64.000 e 120.000 euro
                </option>
                <option value={"120.000 - 240.000"}>
                  Tra 120.000 e 240.000 euro
                </option>
                <option value={"240.000 - 580.000"}>
                  Tra 240.000 e 580.000 euro
                </option>
                <option value={"580.000 - 1.000.000"}>
                  Tra 580.000 e 1.000.000 euro
                </option>
                <option value={"1.000.000 - 2.000.000"}>
                  Tra 1.000.000 e 2.000.000 euro
                </option>
                <option value={"Oltre 2.000.000"}>Oltre 2.000.000 euro</option>
              </Select>
            </Col>
          </>
        ) : null}

        {request.mutuo || request.finanziamento ? (
          <Col className=" mt-4 mb-4 center" sm="12">
            <h5>Quale è l'importo del finanziamento desiderato ? </h5>

            <Select
              native
              variant="outlined"
              style={{ width: "80%", textAlign: "center" }}
              value={request.importoFinanziamento}
              onChange={(value) => handleImportoFinanziamento(value)}
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
            >
              <option aria-label="None" value="" />
              <option value={"0-500"}>Tra 0 e 500 euro</option>
              <option value={"500-1.000"}>Tra 500 e 1.000 euro</option>
              <option value={"1.000- 2.000"}>Tra 1.000 e 2.000 euro</option>
              <option value={"2.000-4.000"}>Tra 2.000 e 4000 euro</option>
              <option value={"4.000-8.000"}>Tra 4.000 e 8000 euro</option>
              <option value={"8.000-16.000"}>Tra 8.000 e 16.000 euro</option>
              <option value={"16.000-32.000"}>Tra 16.000 e 32.000 euro</option>
              <option value={"32.000 - 64.000"}>
                Tra 32.000 e 64.000 euro
              </option>
              <option value={"64.000 - 120000"}>
                Tra 64.000 e 120.000 euro
              </option>
              <option value={"120.000 - 240.000"}>
                Tra 120.000 e 240.000 euro
              </option>
              <option value={"240.000 - 580.000"}>
                Tra 240.000 e 580.000 euro
              </option>
              <option value={"580.000 - 1.000.000"}>
                Tra 580.000 e 1.000.000 euro
              </option>
              <option value={"1.000.000 - 2.000.000"}>
                Tra 1.000.000 e 2.000.000 euro
              </option>
              <option value={"Oltre 2.000.000"}>Oltre 2.000.000 euro</option>
            </Select>
          </Col>
        ) : null}
        {request.pensione ? (
          <Col className="center mt-4 mb-4 center" sm="12">
            <h5>Conosci i vantaggi di un fondo pensione? </h5>

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
