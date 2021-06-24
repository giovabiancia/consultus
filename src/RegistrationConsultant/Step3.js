import React, { useContext, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Select, TextField } from "@material-ui/core";
import { storage } from "../firebase";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { ConsultantContext } from "../context/ConsultantContext";
import UploadCert from "../components/section-components/UploadCert";
import MapField from "../components/section-components/MapField";
import Chip from "@material-ui/core/Chip";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Step3() {
  const [request, setRequest] = useContext(ConsultantContext);
  const handleTitoloStudio = (value) => {
    let newState = Object.assign({}, request);
    newState.titoloStudio = value.target.value;
    setRequest(newState);
  };
  const handleCompetenze = (value) => {
    let newState = Object.assign({}, request);
    newState.competenze = value;
    setRequest(newState);
  };
  return (
    <Container>
      <Row>
        <Col className="mt-4  " md="12" sm="12">
          <h5 className="mb-4 center ">Zona di operatività</h5>
          {/* <MapField></MapField> */}
        </Col>
        <Col className="mt-4  center" lg="6" sm="12">
          <h5 className="mb-4 center ">Titolo di studio</h5>
          <Select
            native
            variant="outlined"
            value={request.titoloStudio}
            onChange={handleTitoloStudio}
            required
            error={
              request.titoloStudio == "" ? (request.error ? true : false) : null
            }
            helperText={
              request.titoloStudio == ""
                ? request.error
                  ? "Required"
                  : null
                : null
            }
          >
            <option aria-label="None" value="" />

            <option value={"Licenza elementare"}>Licenza elementare</option>
            <option value={"Licenza media"}>Licenza media</option>
            <option
              value={
                "Titolo di istruzione secondaria superiore (scolastica ed extrascolastica) che non permette l’accesso all’università"
              }
            >
              Titolo di istruzione secondaria superiore (scolastica ed
              extrascolastica) che non permette l’accesso all’università
            </option>
            <option
              value={
                "Diploma di istruzione secondaria superiore che permette l’accesso all’università"
              }
            >
              Diploma di istruzione secondaria superiore che permette l’accesso
              all’università
            </option>
            <option value={"Diploma terziario extra-universitario"}>
              Diploma terziario extra-universitario
            </option>
            <option value={"il Diploma universitario"}>
              il Diploma universitario
            </option>
            <option value={"Laurea di primo livello"}>
              Laurea di primo livello
            </option>
            <option value={"Diploma di laurea"}>Diploma di laurea</option>
            <option value={"Laurea specialistica a ciclo unico"}>
              Laurea specialistica a ciclo unico
            </option>
            <option value={"Laurea specialistica"}>Laurea specialistica</option>
            <option value={"Master universitario di primo livello"}>
              Master universitario di primo livello
            </option>
            <option value={"Master universitario di secondo livello"}>
              Master universitario di secondo livello
            </option>
            <option value={"Diploma di specializzazione"}>
              Diploma di specializzazione
            </option>
            <option value={"Titolo di dottore di ricerca"}>
              Titolo di dottore di ricerca
            </option>
          </Select>
        </Col>
        <Col className="mt-4  center" lg="6" sm="12">
          <h5 className="mb-4 center ">Le tue principali competenze</h5>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={top100Films}
            value={request.competenze}
            disableCloseOnSelect
            onChange={(e, value) => handleCompetenze(value)}
            getOptionLabel={(option) => option.title}
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </React.Fragment>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Competenze"
                placeholder="Competenze"
              />
            )}
          />
        </Col>
      </Row>
    </Container>
  );
}
const top100Films = [
  { title: "Trading Online", year: 1994 },
  { title: "Analisi Strumenti finanziari", year: 1972 },
  { title: "Gestione patrimoniale", year: 1974 },
  { title: "Pianificazione finanziaria", year: 2008 },
  { title: "Ottimizzazione portafoglio di investimento", year: 1957 },
  { title: "Consulenza Assicurativa", year: 1993 },
  { title: "Pianificazione Pensionistica", year: 1994 },
  { title: "Consulenza sul credito", year: 2003 },
  { title: "Gestione del rischio finanziaro", year: 1966 },
  { title: "Asset allocation", year: 1999 },
];
