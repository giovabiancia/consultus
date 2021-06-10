import React, { useContext } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Select, TextField } from "@material-ui/core";
import { RequestContext } from "../context/RequestContext";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { ConsultantContext } from "../context/ConsultantContext";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import HomeIcon from "@material-ui/icons/Home";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Autocomplete from "@material-ui/lab/Autocomplete";
export default function Step2() {
  const [request, setRequest] = useContext(ConsultantContext);

  const handleInvestire = (value) => {
    let newState = Object.assign({}, request);
    if (request.investire == false) {
      newState.investire = true;
    } else {
      newState.investire = false;
    }
    setRequest(newState);
  };

  return (
    <Row>
      <Col sm="6" className="mt-4 center" style={{ flexDirection: "row" }}>
        <div className="ml-4 mr-4" style={{ height: "100%" }}>
          <h4>Per quale banca lavori ?</h4>
          <Autocomplete
            id="free-solo-demo"
            options={banche.map((option) => option)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Inserisci la banca in cui lavori"
                margin="normal"
                variant="outlined"
              />
            )}
          />
        </div>
      </Col>

      <Col style={{ marginBottom: 200 }}></Col>
    </Row>
  );
}

var banche = [
  "Intesa Sanpaolo",
  "Unicredit",
  "BPER Banca",
  "Banco Bpm",
  "Banca Monte dei Paschi di Siena",
  "Banca Nazionale del Lavoro",
  "Crédit Agricole Italia",
  "Banca Popolare di Sondrio",
  "Credito Emiliano",
  "Banca Carige - Cassa di Risparmio di Genova e Imperia",
  "Banca Piccolo Credito Valtellinese",
  "Banco di Sardegna",
  "Deutsche Bank",
  "Banca Sella",
  "Banca Popolare di Bari",
  "Banco di Desio e della Brianza",
  "BCC di Roma",
  "Compass Banca",
  "Banca Popolare dell Alto Adige",
  "Credit Agricole Friuladria",
  "Intesa Sanpaolo Private Banking",
  "Cassa di Risparmio di Asti",
  "Cassa di Risparmio di Bolzano - Sudtiroler Sparkasse AG",
  "Chebanca!",
  "Banca Popolare Pugliese",
  "Banca Popolare di Puglia e Basilicata",
  "Fideuram - Intesa Sanpaolo Private Banking",
  "Cassa di Risparmio di Biella e Vercelli - Biverbanca",
  "Emil Banca - Credito Cooperativo",
  "La Cassa di Ravenna",
  "Banca Agricola Popolare di Ragusa",
  "Findomestic Banca",
  "Banca Valsabbina",
  "Credito Cooperativo Ravennate Forlivese e Imolese",
  "BCC di Alba Langhe Roero e del Canavese",
  "Banca del Territorio Lombardo Credito Cooperativo",
  "Cassa di Risparmio di Volterra",
  "Banca di Cividale o",
  "Banca Centro-Credito Cooperativo Toscana-Umbria Soc.Cooperativa",
  "Banca di Credito Popolare",
  "Banca Prealpi Sanbiagio Credito Cooperativo",
  "BCC di Brescia",
  "Banca delle Terre Venete Credito Cooperativo ¿ Società Cooperativa",
  "Cassa Padana BCC",
  "BCC Pordenonese e Monsile",
  "Cassa di Risparmio di Fermo",
  "Aletti  C. Banca di Investimento Mobiliare",
  "IBL Istituto Bancario del Lavoro",
  "Banca di Piacenza",
  "Blu BaBanca Centropadana Credito Cooperativo",
  "Banca del Veneto Centrale - Credito Cooperativo",
  "Cassa di Risparmio di Orvieto",
  "BCC di Milano",
  "Banca di Verona e Vicenza - Credito Cooperativo",
  "Rivierabanca - Credito Cooperativo di Rimini e Gradara",
  "Banca della Marca Credito Cooperativo",
  "Banca Generali",
  "Cassa di Risparmio di Cento",
  "Chiantibanca - Credito Cooperativo",
  "La Cassa Rurale - Credito Cooperativo Adamello Giudicarie Valsabbia Pag anella",
  "Banca Cambiano",
  "Cassa di Trento Lavis Mezzocorona e Valle di Cembra - BCC",
  "Banca del Piemonte",
  "Bancater Credito Cooperativo Fvg",
  "Credito Cooperativo di Caravaggio Adda e Cremasco - Cassa Rurale",
  "Banca Patavina Credito Cooperatvo di Sant Elena e Piove di Sacco",
  "Credito Padano BCC",
  "Banca del Fucino",
  "Banca di Imola",
  "Banca Cremasca e Mantovana - Credito Cooperativo",
  "BCC di Venezia Padova e Rovigo - Banca Annia",
  "Cassa Rurale - BCC di Treviglio",
  "Centromarca Banca - Credito Cooperativo di Treviso e Venezia",
  "Primacassa - Credito Cooperativo Fvg",
  "Banca Adria Colli Euganei - Credito Cooperativo",
  "Cassa Rurale Alto Garda - BCC",
  "BCC G. Toniolo di San Cataldo",
  "Allianz Bank Financial Advisors",
  "Banca di Bologna Credito Cooperativo",
  "Banca Credito Coperativo del CileVallo di Diano e Lucania",
  "Banca del Piceno Credito Cooperativo",
  "BCC di Carate Brianza",
  "Banca Ifis",
  "Banca Lazio Nord Credito Cooperativo",
  "Credito Cooperativo Friuli",
  "Banca Malatestiana - Credito Cooperativo",
  "Banco Fiorentino - Mugello Impruneta Signa - Credito Cooperativo",
  "Terre Etrusche e di Maremma C.C.",
  "Banca Centro Emilia - Credito Cooperativo",
  "BCC del Garda - BCC Colli Morenici del Garda",
  "Banca di Caraglio del Cuneese e della Riviera dei Fiori - Credito Coope,rativo",
  "Cassa Rurale ed Artigiana di Cantu BCC",
  "Credito Cooperativo Mediocrati",
  "BCC Bergamasca e Orobica",
  "BCC di Castagneto Carducci",
  "Banca Valdichiana - Credito Cooperativo di Chiusi e Montepulciano",
  "BCC di Cherasco	BCC Campania Centro - Cassa Rurale ed Artigiana",
  "Banca Alto Vicentino - Credito Cooperativo di Schio Pedemonte e Roana",
  "BCC dell Oglio e del Seri",
  "Banca Passadore e C.",
  "Banca Popolare del Cassinat",
  "Banca Popolare Sant Angelo",
  "Banco Marchigiano Credito Cooperativo",
  "Cassa Rurale Val di non - BCC",
  "Romagnabanca Credito Cooperativo Romagna Est e Sala di Cesenatico",
  "Banca Alpi Marittime Credito Cooperativo Carru'",
  "Credito Cooperativo Romagnolo - BCC di Cesena e Gatteo",
  "Banca Cassa di Risparmio di Savigliano",
  "Banca Versilia Lunigiana e Garfagnana - Credito Cooperativo",
  "Cassa Rurale Dolomiti - BCC Società Cooperativa",
  "Friulovest Banca - Credito Cooperativo",
  "Santander Consumer Bank",
  "Banca Centro Lazio Credito Cooperativo",
  "Banca di Pisa e Fornacette Credito Cooperativo",
  "Cassa Rurale Valsugana e Tesino - BCC",
  "IW Bank",
  "Banca Alta Toscana Credito Cooperativo",
  "BCC Agrobresciano",
  "BCC Brianza e Laghi",
  "Banca Popolare Etica",
  "BCC Felsinea - BCC Dal",
  "Cassa Rurale Alta Valsugana - BCC",
  "Credito Cooperativo - Cassa Rurale ed Artigiana del Friuli Venezia Gi",
  "BCC di Casalgrasso e Sant Albano Stura",
  "BCC di Castiglione Messer Raimondo e Pianella",
  "BCC Vicentino - Pojana Maggiore",
  "Banca Euromobiliare",
  "Banca Intermobiliare di Investimenti e Gestioni",
  "Banca Popolare di Fondi",
  "Banca Veronese Credito Cooperativo di Concamarise",
  "BCC di Staranzano e Villesse",
  "BCC la Riscossa di Regalbuto",
  "Banca di Filottrano - Credito Cooperativo di Filottrano e Camerano",
  "Banca Don Rizzo - Credito Cooperativo della Sicilia Occidentale",
  "Banca Monte Pruno - Credito Cooperativo di Fisciano Roscigno e Laurin",
  "Banca Popolare Valconca",
  "Banco di Credito P.Azzoaglio",
  "Bene Banca Credito Cooperativo di Bene Vagienna",
  "ICCREA Banca - Istituto Centrale del Credito Cooperativo",
  "Ing Bank NV",
  "Sanfelice Banca Popolare",
  "Artigiancassa",
  "BCC di Buccino e dei Comuni Cilentani",
  "BCC di Pachino",
  "Banca Patrimoni Sella & C.",
  "Banca Popolare di Lajatico",
  "Cassa di Risparmio di Fossano",
  "Cassa Rurale di Rovereto - BCC",
  "Cassa Rurale ed Artigiana di Binasco - Credito Cooperativo",
  "Cassa Rurale Vallagarina - BCC",
  "Valpolicella Benaco Banca Credito Cooperativo",
  "Banca del Monte di Lucca",
  "BCC Bergamo e Valli",
  "BCC di Busto Garolfo e Buguggiate",
  "BCC di Fano",
  "BCC della Provincia Romana",
  "BCC di Aquara",
  "BCC di Flumeri",
  "BCC Sangro Teatina di Atessa",
  "Cassa Rurale Val di Fiemme - BCC",
  "Vival Banca - BCC di Montecatini Terme Bientina e S. Pietro in Vincio",
  "BCC di Pergola e Corinaldo",
  "BCC Valdostana - Cooperative De Credit Valdotaine",
  "Banca di Pescia e Cascina - Credito Cooperativo",
  "Banca Sicana - Credito Cooperativo di Sommatino Serradifalco e Sambuca di Sicilia",
  "ICCREA Bancaimpresa",
  "MPS Capital Services Banca per le Imprese",
  "BCC del Metauro",
  "BCC di Anagni",
  "BCC di Barlassina",
  "BCC di Triuggio e della Valle del Lambro",
  "Cassa Rurale Val di Sole - BCC",
  "Cereabanca Credito Cooperativo",
  "Zkb ZadružNa KrašKa Banka Trst Gorica Zadruga - Zkb Credito Cooperativo di Trieste e Gorizia Società Cooperativa",
  "Banca della Valsassina Credito Cooperativo",
  "Banca di Ancona e Falconara Marittima Credito Cooperativo",
  "Banca di Anghiari e Stia - Credito Cooperativo",
  "BCC dei Castelli Romani e del Tuscolo",
  "BCC di Pianfei e Rocca de Baldi",
  "BCC di Recanati e Colmurano",
  "Banca di Udine Credito Cooperativo",
  "Banca San Francesco Credito Cooperativo",
  "Cassa Rurale ed Artigiana dell Agro Pontino - BCC",
  "Cassa Rurale ed Artigiana di Borgo San Giacomo - Credito Cooperativo",
  "Cassa Rurale ed Artigiana di Castellana Grotte Credito Cooperativo",
  "BCC dei Colli Albani",
  "BCC di Alberobello e Sammichele di Bari",
  "BCC di Capaccio Paestum e Serino",
  "BCC di San Marco dei Cavoti e del Sannio-Calvi",
  "BCC di San Marzano di San Giuseppe - Taranto",
  "BCC di Spello e Bettona",
  "Cassa Rurale ed Artigiana di Rivarolo Mantovano Credito Cooperativo",
  "Cassa Rurale ed Artigiana di Vestenanova - Credito Cooperativo",
  "Credito Cooperativo Centro Calabria",
  "BCC S. Giuseppe delle Madonie",
  "BCC della Romagna Occidentale",
  "BCC di Borghetto Lodigiano",
  "BCC di Cassano delle Murge e Tol",
];
