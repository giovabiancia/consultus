import React, { useState, Component, useContext } from "react";
import HeaderV3 from "../components/section-components/Header-v4";
import Layouts from "../components/global-components/Layouts";
import { sectionData } from "../data/section.json";
import AboutV2 from "../components/section-components/About-v2";
import Modifica from "../components/section-components/Modifica";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import {
  convertToRaw,
  EditorState,
  createFromBlockArray,
  convertFromHTML,
  ContentState,
} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { TextField, Divider } from "@material-ui/core";
import { stateToHTML } from "draft-js-export-html";
import { draftToHtml } from "draftjs-to-html";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import firebase from "../firebase";
import { storage } from "../firebase";

import LinearProgress from "@material-ui/core/LinearProgress";
import { ProfileContext } from "../context/ProfileContext";
import { useAuthentication } from "../hooks/useAuthentication";
export default function ModificaArticolo(props) {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML(props.location.state.contenuto)
      )
    )
  );
  const [html, setHtml] = useState(props.location.state.contenuto);
  const [titolo, setTitolo] = useState(props.location.state.nome);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState();
  const [error, setError] = useState(false);
  const [fotoURL, setFotoUrl] = useState(props.location.state.immagine);
  const [profilo, setProfilo] = useContext(ProfileContext);
  const auth = useAuthentication();

  console.log(props.location.state);

  const onEditorStateChange = (e) => {
    setEditorState(e);

    let htmls = stateToHTML(e.getCurrentContent());
    setHtml(htmls);
  };

  const handleSave = (e) => {
    if (titolo !== "" && html !== "" && file !== null) {
      // carico la foto

      const uid = firebase.auth().currentUser.uid;
      var db = firebase.firestore();
      db.collection("blog").doc(props.location.state.id).update({
        nome: titolo,
        contenuto: html,
        immagineConsulente: auth.loggedIn.photoURL,
        nomeConsulente: auth.loggedIn.displayName,
        bancaConsulente: profilo.banca,
        instagramConsulente: profilo.instagram,
        facebookConsulente: profilo.facebook,
        linkedinConsulente: profilo.linkedin,
        specializzazioneConsulente: profilo.specializzazione,
        immagine: fotoURL,
        idConsulente: profilo.uid,
      });

      alert("salvataggio effettuato");
    } else if (html == "") {
      alert("Inserisci un corpo");
    } else {
      alert("Completa tutti i campi");
    }
    setError(false);
  };
  function handleUpload(e) {
    console.log(file);
    e.preventDefault();
    if (titolo == "") {
      setError(true);
    } else {
      var user = firebase.auth().currentUser;
      const ref = storage.ref("blog/" + titolo + "/" + file.name);
      const uploadTask = ref.put(file);

      uploadTask.on("state_changed", (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setProgress(progress);

        ref
          .getDownloadURL()
          .then((url) => {
            setFotoUrl(url);
          })
          .catch((error) => {
            alert(error.message);
          });
      });
    }

    // Get current username
  }

  let data = sectionData.sectionTitle;
  return (
    <>
      <Layouts pageTitle="Team Details">
        <HeaderV3 background={data.teamDetails.background} />
        <section className="about p-120 index2 ">
          <Container fluid>
            <Row>
              <Col className="flex-start" md="4">
                <TextField
                  className="mt-4"
                  variant="outlined"
                  label="titolo articolo"
                  style={{ width: "80%" }}
                  value={titolo}
                  error={error}
                  InputProps={{
                    style: {
                      fontSize: "25px",
                    },
                  }}
                  fontSize={30}
                  onChange={(e) => setTitolo(e.target.value)}
                ></TextField>
                <div className="mt-4">
                  <h5>Carica Immagine articolo</h5>
                  <img
                    className="img-fluid"
                    src={fotoURL}
                    value={file}
                    style={{
                      border: "1px solid lightgray",
                      margin: 10,
                      maxWidth: 300,
                      maxHeight: 300,
                      objectFit: "cover",
                    }}
                  ></img>
                  <br></br>
                  <input
                    type="file"
                    className="mt-3"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={(e) => setFile(e.target.files[0])}
                  ></input>{" "}
                  <br></br>
                  <LinearProgress
                    className="mt-3"
                    variant="determinate"
                    value={progress}
                  />
                </div>

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
              <Col md="8">
                <div className="mb-4" />

                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorStateChange}
                />
              </Col>
            </Row>
            <Row></Row>
            <div className=" bottomBar section ">
              <button
                className="button button-primary ml-4"
                onClick={handleSave}
              >
                {" "}
                salva
              </button>
            </div>
          </Container>
        </section>

        {/*   <Team /> */}
        {/*     <Connect />
        <Footer /> */}
      </Layouts>
    </>
  );
}
