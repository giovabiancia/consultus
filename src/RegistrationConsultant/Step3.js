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
  const handleCitta = (value) => {
    let newState = Object.assign({}, request);
    newState.zonaOperativa = value;
    setRequest(newState);
  };
  return (
    <Container>
      <Row>
        <Col className="mt-4  " md="12" sm="12">
          <h5 className="mb-4 center ">Zona di operatività</h5>
          {/* <MapField></MapField> */}
          <Autocomplete
            id="combo-box-demo"
            options={citta}
            getOptionLabel={(option) => option.title}
            style={{ padding: 0, width: "100%" }}
            className="ml-2 "
            variant="outlined"
            onChange={(e, value) => handleCitta(value)}
            renderInput={(params) => (
              <TextField
                variant="outlined"
                {...params}
                label="Provincia"
                style={{ padding: 0 }}
              />
            )}
          />
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
            style={{ width: "100%" }}
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

const citta = [
  { title: "Agrigento" },
  { title: "Alessandria" },
  { title: "Ancona" },
  { title: "Aosta" },
  { title: "Arezzo" },
  { title: "Ascoli Piceno" },
  { title: "Asti" },
  { title: "Avellino" },
  { title: "Bari" },
  { title: "Barletta-Andria-Trani" },
  { title: "Belluno" },
  { title: "Benevento" },
  { title: "Bergamo" },
  { title: "Biella" },
  { title: "Bologna" },
  { title: "Bolzano" },
  { title: "Brescia" },
  { title: "Brindisi" },
  { title: "Cagliari" },
  { title: "Caltanissetta" },
  { title: "Campobasso" },
  { title: "Carbonia-Iglesias" },
  { title: "Caserta" },
  { title: "Catania" },
  { title: "Catanzaro" },
  { title: "Chieti" },
  { title: "Como" },
  { title: "Cosenza" },
  { title: "Cremona" },
  { title: "Crotone" },
  { title: "Cuneo" },
  { title: "Enna" },
  { title: "Fermo" },
  { title: "Ferrara" },
  { title: "Firenze" },
  { title: "Foggia" },
  { title: "Forlì-Cesena" },
  { title: "Frosinone" },
  { title: "Genova" },
  { title: "Gorizia" },
  { title: "Grosseto" },
  { title: "Imperia" },
  { title: "Isernia" },
  { title: "La Spezia" },
  { title: "L Aquila" },
  { title: "Latina" },
  { title: "Lecce" },
  { title: "Lecco" },
  { title: "Livorno" },
  { title: "Lodi" },
  { title: "Lucca" },
  { title: "Macerata" },
  { title: "Mantova" },
  { title: "Massa-Carrara" },
  { title: "Matera" },
  { title: "Messina" },
  { title: "Milano" },
  { title: "Modena" },
  { title: "Monza e della Brianza" },
  { title: "Napoli" },
  { title: "Novara" },
  { title: "Nuoro" },
  { title: "Olbia-Tempio" },
  { title: "Oristano" },
  { title: "Padova" },
  { title: "Palermo" },
  { title: "Parma" },
  { title: "Pavia" },
  { title: "Perugia" },
  { title: "Pesaro e Urbino" },
  { title: "Pescara" },
  { title: "Piacenza" },
  { title: "Pisa" },
  { title: "Pistoia" },
  { title: "Pordenone" },
  { title: "Potenza" },
  { title: "Prato" },
  { title: "Ragusa" },
  { title: "Ravenna" },
  { title: "Reggio Calabria" },
  { title: "Reggio Emilia" },
  { title: "Rieti" },
  { title: "Rimini" },
  { title: "Roma" },
  { title: "Rovigo" },
  { title: "Salerno" },
  { title: "Medio Campidano" },
  { title: "Sassari" },
  { title: "Savona" },
  { title: "Siena" },
  { title: "Siracusa" },
  { title: "Sondrio" },
  { title: "Taranto" },
  { title: "Teramo" },
  { title: "Terni" },
  { title: "Torino" },
  { title: "Ogliastra" },
  { title: "Trapani" },
  { title: "Trento" },
  { title: "Treviso" },
  { title: "Trieste" },
  { title: "Udine" },
  { title: "Varese" },
  { title: "Venezia" },
  { title: "Verbano-Cusio-Ossola" },
  { title: "Vercelli" },
  { title: "Verona" },
  { title: "Vibo Valentia" },
  { title: "Vicenza" },
  { title: "Viterbo" },
];
