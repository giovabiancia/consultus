import React, { useContext, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Select, TextField } from "@material-ui/core";
import { storage } from "../../firebase";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { ConsultantContext } from "../../context/ConsultantContext";

export default function UploadCert(props) {
  const [request, setRequest] = useContext(ConsultantContext);

  const [progress, setProgress] = useState(0);
  function handleChange(e) {
    let newState = Object.assign({}, request);
    newState.file = e.target.files[0];
    setRequest(newState);
  }
  function handleUpload(e) {
    e.preventDefault();
    const ref = storage.ref(`/consulenti/${request.nome}-${request.cognome}`);
    const uploadTask = ref.put(request.file);

    uploadTask.on("state_changed", (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      let newState = Object.assign({}, request);
      newState.progress = progress;
      setRequest(newState);
      ref.getDownloadURL().then((url) => {
        let newState = Object.assign({}, request);
        newState.file = null;
        newState.fotoURL = url;
        setRequest(newState);
      });
    });
  }
  return (
    <Col className="center">
      {request.nome && request.cognome ? (
        <div className="mt-4 center">
          <h5 className="mt-4  ">
            Carica la tua iscrizione a uno dei seguenti organismi: RUI, OCF, OAM{" "}
            <small className="mt-4 center">Formato PDF</small>
          </h5>

          <input
            accept="application/pdf"
            id="contained-button-file"
            required
            className="mt-4"
            error={request.file == "" ? (request.error ? true : false) : null}
            helperText={
              request.file == "" ? (request.error ? "Required" : null) : null
            }
            type="file"
            /*   style={{ display: "none" }} */
            onChange={handleChange}
          ></input>
          {/*   <label htmlFor="contained-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  type="upload"
                  disabled={request.file}
                >
                  <CloudUploadIcon className="m3-3" />
                  Carica
                </IconButton>
              </label> */}

          <CircularProgress variant="determinate" value={request.progress} />
          {request.file != null ? (
            <Button
              className="mt-4"
              startIcon={<CloudUploadIcon />}
              color="primary"
              onClick={handleUpload}
            >
              Upload Now
            </Button>
          ) : null}
        </div>
      ) : null}
    </Col>
  );
}
