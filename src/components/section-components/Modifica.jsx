import React, {useContext, useState} from 'react';
import {sectionData} from './../../data/section.json'
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Col, Row, Container, Button } from "react-bootstrap";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Checkbox from "@material-ui/core/Checkbox";
import { Avatar, Select, TextField } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ProfileContext } from '../../context/ProfileContext';
import { useEffect } from 'react';
import MapField from './MapField';
import { useAuthentication } from '../../hooks/useAuthentication';
import firebase from '../../firebase'
import {storage} from '../../firebase'
import CircularProgress from "@material-ui/core/CircularProgress";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";



const checkedIcon = <CheckBoxIcon fontSize="small" />;
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;

const Modifica = () => {
    let data = sectionData.about;
    const [profilo, setProfilo] = useContext(ProfileContext);
    const auth = useAuthentication()

    const [nome, setNome] = useState(profilo.nome)
    const [cognome, setCognome] = useState(profilo.cognome)
    const [anni, setAnni] = useState(profilo.anni)
    const [email, setEmail] = useState(profilo.email)
    const [esperienza, setEsperienza] = useState(profilo.esperienza)
    const [specializzazione, setSpecializzazione] = useState(profilo.specializzazione)
    const [patrimonio, setPatrimonio] = useState(profilo.patrimonio)
    const [banca, setBanca] = useState(profilo.banca)
    const [competenze, setCompetenze] = useState(profilo.competenze)
    const [titoloStudio, setTitoloStudio] = useState(profilo.titoloStudio)
    const [facebook, setFacebook] = useState(profilo.facebook)
    const [instagram, setInstagram] = useState(profilo.instagram)
    const [linkedin, setLinkedin] = useState(profilo.linkedin)
    const [twitter, setTwitter] = useState(profilo.twitter)
    const [about, setAbout] = useState(profilo.about)
    const [indirizzo, setIndirizzo] = useState(profilo.indirizzo)
    const [file, setFile] = useState()
    const [fotoUrl, setFotoUrl] = useState(profilo.foto)
    const [progress, setProgress] = useState(0)

    const sendRequest = (e) => {
        /*     */
        e.preventDefault();

        let newConsultant = {

          nome: nome,
          cognome: cognome,
          foto: auth.loggedIn.photoURL,
          credit: [],
          email: email,
          anni: anni,
          patrimonio: patrimonio,
          titoloStudio: titoloStudio,
          banca: banca,
          esperienza: esperienza,
          specializzazione: specializzazione,
          competenze: competenze,
          about: about,
          facebook: facebook,
          instagram: instagram,
          linkedin: linkedin,
          twitter: twitter,
          indirizzo: indirizzo,


        };

        var db = firebase.firestore();

        db.collection("consulenti").doc(profilo.id).update(newConsultant).then((e)=>{
            alert("Modifica effettuata");

        }).catch((e)=>{
            alert(e);
        })



      };
      function handleChange(e) {

       setFile(e.target.files[0])

      }
      function handleUpload(e) {
        e.preventDefault();
        // Get current username
        var user = firebase.auth().currentUser;

        // Create a Storage Ref w/ username
        var ref = firebase.storage().ref(user.displayName + '/profilePicture/' + file.name);

        const uploadTask = ref.put(file);


        uploadTask.on("state_changed", (snapshot) => {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgress(progress);

          ref.getDownloadURL().then((url) => {

            setFile(null)
            setFotoUrl(url)
            const user = firebase.auth().currentUser;
            var db = firebase.firestore();
            db.collection("consulenti").doc(profilo.id).update({foto:url}).then((e)=>{


            }).catch((e)=>{
                alert(e);
            })

            user.updateProfile({
            photoURL: url
            }).then(() => {
            // Update successful
            // ...
            }).catch((error) => {
            // An error occurred
            alert(error)
            // ...
            });

          });
        });
      }



    return (
        <>
            {/* <!-- start about area --> */}
            <section className="about p-120 index2">
                <div className="container">
                    <Row>
                        <Col className="center">
                            <Avatar size="large" variant="rounded" style={{width:100, height: 100
                            }} src={auth.loggedIn.photoURL}></Avatar>
                            <input type="file"  accept="image/png, image/gif, image/jpeg" className=" mt-3" onChange={handleChange} >

                            </input>
                            <CircularProgress variant="determinate" value={progress} />
                            {file != null ? (
                                <Button
                                className="mt-4"
                                startIcon={<CloudUploadIcon />}
                                color="primary"
                                onClick={handleUpload}
                                >
                                Upload Now
                                </Button>
                            ) : null}




                        </Col>
                    </Row>

                    <div className="row align-items-center">

                        <div className="col-md-3 col-sm-12">

                                    <h5>Nome</h5>
                                    <TextField variant="outlined" className="mt-2" value={nome} onChange={(e)=>setNome(e.target.value)}></TextField>
                        </div>

                        <div className="col-md-3 col-sm-12">


                                    <h5>Cognome</h5>
                                    <TextField variant="outlined" className="mt-2" value={cognome} onChange={(e)=>setCognome(e.target.value)}></TextField>

                        </div>
                        <div className="col-md-3 col-sm-12">


                                    <h5>Età</h5>
                                    <TextField variant="outlined" className="mt-2" value={anni} onChange={(e)=>setAnni(e.target.value)}></TextField>

                        </div>
                        <div className="col-md-3 col-sm-12">


                                    <h5>Email</h5>
                                    <TextField variant="outlined" className="mt-2" value={email} onChange={(e)=>setEmail(e.target.value)}></TextField>

                        </div>
                        </div>

                    <Row>




                        <div className="col-md-4 col-sm-12 mt-4 ">
                            <h5>Quanti anni hai di esperienza ?</h5>
                            <TextField
                            value={esperienza} onChange={(e)=>setEsperienza(e.target.value)}

                                type="number"
                                variant="outlined"
                                style={{ textAlign: "center" }}
                                required
                                className="mt-3"
                            ></TextField>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-4 ">
                            <h5>Quale è la tua specializzazione</h5>
                        <Select
                            native
                            variant="outlined"
                            value={specializzazione} onChange={(e)=>setSpecializzazione(e.target.value)}

                            style={{  textAlign: "center" }}
                            className="mt-3"
                            required>

                            <option aria-label="None" value="" />
                            <option value={"Assicurativo"}>Assicurativo</option>
                            <option value={"Assicurativo finanziario"}>
                            Assicurativo finanziario
                            </option>
                            <option value={"Finanziario"}>Finanziario</option>
                            <option value={"Pianificazione Pensionistica"}>
                            Pianificazione Pensionistica
                            </option>
                            <option value={"Credito"}>Credito</option>
                            <option value={"Gestione Patrimoniale"}>
                            Gestione Patrimoniale
                            </option>
                        </Select>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-4 ">
                        <h5>Patrimonio gestito ?</h5>

                        <Select
                        native
                        className=" center mt-4"
                        variant="outlined"
                        style={{ textAlign: "center" }}
                        value={patrimonio} onChange={(e)=>setPatrimonio(e.target.value)}

                        required

                        >
                        <option aria-label="None" value="" />

                        <option value={"8.000-16.000"}>Tra 8.000 e 16.000 euro</option>
                        <option value={"16.000-32.000"}>Tra 16.000 e 32.000 euro</option>
                        <option value={"32.000 - 64.000"}>Tra 32.000 e 64.000 euro</option>
                        <option value={"64.000 - 120000"}>Tra 64.000 e 120.000 euro</option>
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
                        <option value={"2.000.000 - 10.000.000"}>
                            Tra 2.000.000 e 10.000.000 euro
                        </option>
                        <option value={"10.000.000 - 50.000.000"}>
                            Tra 10.000.000 e 50.000.000 euro
                        </option>
                        <option value={"10.000.000 - 50.000.000"}>
                            Tra 50.000.000 e 100.000.000 euro
                        </option>
                        <option value={"Oltre i 100.000.000"}>
                            Oltre i 100.000.000 euro
                        </option>
                        </Select>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-md-4 col-sm-12">


                        <h5>Intermediario</h5>
                        <Autocomplete
                            id="free-solo-demo"
                            options={banche.map((option) => option)}
                            freeSolo
                            value={banca} onChange={(e)=>setBanca(e.target.value)}

                            renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Inserisci l' intermediario per cui lavori"
                                margin="normal"
                                variant="outlined"
                            />
                            )}
                        />

                        </div>
                        <Col className="mt-4  center" lg="6" sm="12">
                        <h5 className="mb-4 ">Le tue principali competenze</h5>
                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={top100Films}
                            value={competenze}
                            onChange={(e, value)=>setCompetenze(value)}
                            disableCloseOnSelect

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
                        <Row>
                        <Col className="mt-4  " md="4" sm="12">
                            <h5 className="mb-4  ">Zona di operatività</h5>
                            {/* <MapField></MapField> */}
                          {/*   <MapField></MapField> */}
                        </Col>
                        <Col className="mt-4  " md="4" sm="12">
                            <h5 className="mb-4  ">Titolo di studio</h5>
                        <Select
                            native
                            value={titoloStudio} onChange={(e)=>setTitoloStudio(e.target.value)}
                            variant="outlined"
                            required

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
</Row>
<Row>
                        <Col className=" center mt-4" md="3" sm="12">
          <TextField
            id="input-with-icon-textfield"
            label="Facebook"
            value={facebook} onChange={(e)=>setFacebook(e.target.value)}

            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FacebookIcon />
                </InputAdornment>
              ),
            }}
          />
        </Col>
                        <Col className=" center mt-4" md="3" sm="12">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Instagram"
                            variant="outlined"
                            value={instagram} onChange={(e)=>setInstagram(e.target.value)}

                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <InstagramIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        </Col>
                        <Col className=" center mt-4" md="3" sm="12">
                        <TextField
                            id="input-with-icon-textfield"
                            label="LinkedIn"
                            variant="outlined"
                            value={linkedin} onChange={(e)=>setLinkedin(e.target.value)}

                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <LinkedInIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        </Col>
                        <Col className=" center mt-4 " md="3" sm="12">
          <TextField
            id="input-with-icon-textfield"
            label="Twitter"
            value={twitter} onChange={(e)=>setTwitter(e.target.value)}

            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TwitterIcon />
                </InputAdornment>
              ),
            }}
          />
        </Col>


                    </Row>
                    <Row>
                    <Col className="mt-4 center " md="12" sm="12">
          <h5>Qualcosa su di te e sulla tua esperienza</h5>
          <TextField
             value={about} onChange={(e)=>setAbout(e.target.value)}
            type="text"
            multiline
            rows={5}
            variant="outlined"
            style={{ width: "80%", textAlign: "center" }}
            required
            className="mt-3"
          ></TextField>
        </Col>
                    </Row>
                    <Row>
                        <Col className="center">
                        <button className="btn-style" >
                    <span onClick={sendRequest}>Salva Modifiche</span>
                    </button>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* <!-- end about area --> */}
        </>
    );
}

export default Modifica;

var banche = [
    "Autonomo",
    "24hAssistence",
    "Adir Assicurazioni Roma",
    "Admiral Insurance",
    "AIG Direct",
    "Ala Assicurazioni",
    "Alleanza Assicurazioni",
    "Allianz",
    "Allianz Direct",
    "Alliance Global Assistance",
    "Amissima Assicurazioni",
    "AmTrust",
    "ARAG Assicurazioni",
    "Arca Assicurazioni",
    "Ariscom",
    "Assicuratrice Milanese",
    "Assimoco Assicurazioni",
    "Assistenza Casa",
    "Assur'O'Poil",
    "Augusta Assicurazioni",
    "Aurora Assicurazioni",
    "Aviva",
    "Axa Assicurazioni",
    "Axa Assistance",
    "Axieme",
    "BCC Assicurazioni",
    "Ben Assicura",
    "Bene Assicurazioni",
    "Cattolica Assicurazioni",
    "CF Assicurazioni",
    "Columbus Assicurazioni",
    "ConTe.it",
    "Coverwise",
    "Credemassicurazioni",
    "Credìt Agricole Assicurazioni",
    "Dallbogg assicurazioni",
    "Darag",
    "Das Assicurazioni",
    "ERV Italia",
    "Europ Assistance",
    "Eurovita assicurazioni",
    "Fata assicurazioni",
    "Fideuram assicurazioni",
    "Generali Italia",
    "Genetrel",
    "Genetrellife",
    "GenialClick",
    "GenialLife",
    "GlobalAssistance",
    "Groupama",
    "HDI Assicurazioni",
    "Helvetia Assicurazioni",
    "Holins",
    "IMA Italia Assistance",
    "Intesa Sanpaolo Assicura",
    "Intesa Sanpaolo RBM Assicura",
    "Italiana Assicurazioni",
    "Itas Assicurazioni",
    "Linear Assicurazioni",
    "Lloyd's",
    "MetLife",
    "Nationale Suisse",
    "Net Insurance Life",
    "Nobis Assicurazioni",
    "Old Mutual Wealth Italy",
    "Poste assicura",
    "Prima.it",
    "Quixa",
    "Reale Mutua Assicurazioni",
    "Royal Sun Assicurazioni",
    "Sara Assicurazioni",
    "Systema Compagnia Assicurazioni",
    "Tokio Marine HCC",
    "Toro Assicurazioni",
    "Tua Assicurazioni",
    "UBI assicurazioni",
    "UCA assicurazioni",
    "UnipolSai Assicurazioni",
    "UNIQA Assicurazioni",
    "VAlpiave assicurazioni",
    "Vera Assicurazioni",
    "Verte Assicurazioni",
    "Vite Assicurazioni",
    "Vittoria Assicurazioni",
    "ViteSicure",
    "Yolo Assicurazioni",
    "Zurich",
    "Zurich Connect",

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