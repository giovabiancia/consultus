import { Divider, TextField } from "@material-ui/core";
import React, { Component, useContext, useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import wallet from "../svg/wallet.svg";
import { useHistory } from "react-router-dom";
import firebase from "../firebase.js";
import CloseIcon from "@material-ui/icons/Close";
import { useAuthentication } from "../hooks/useAuthentication";
import { ProfileContext } from "../context/ProfileContext";

export default function ButtonConsultant(props) {
  const history = useHistory();
  const auth = useAuthentication();
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilo, setProfilo] = useContext(ProfileContext);

  function handleClick() {
    var user = firebase.auth().currentUser;

    if (user) {
      history.push("/registrazione-consulente");
    } else {
      setLgShow(true);

      /* ; */
    }
  }
  const checkValues = () => {
    if (name == "") {
      setErrorName(true);
    } else {
      auth.signUpEmail(name, email, password);
    }
  };

  return (
    <div>
      {profilo ? null : (
        <div className="mt-3">
          <button className="btn-style" onClick={handleClick}>
            <span>consulente</span>
          </button>
        </div>
      )}
      {auth.loggedIn ? null : (
        <Modal size="sm" show={lgShow} onHide={() => setLgShow(false)}>
          <div className="container" style={{ padding: 30 }}>
            <Row>
              <CloseIcon
                style={{ position: "absolute", top: 13, cursor: "pointer" }}
                onClick={() => setLgShow(false)}
              ></CloseIcon>
              {/* <Col md="6" lg="6" className="noMobile center">
                <img src={wallet}></img>
              </Col> */}

              <Col className="center">
                <h3 className="mb-3">Iscriviti e Inizia Gratis !</h3>
                <button
                  class="btn btn-lg btn-google btn-block text-uppercase mt-4"
                  type="submit"
                  style={{ fontSize: 15 }}
                  onClick={auth.login}
                >
                  <i class="fab fa-google mr-2"></i> Iscriviti con Google
                </button>
                <button
                  class="btn btn-lg btn-facebook btn-block text-uppercase mb-4"
                  type="submit"
                  style={{ fontSize: 15 }}
                  onClick={auth.fbLogin}
                >
                  <i class="fab fa-facebook-f mr-2"></i> Iscriviti con Facebook
                </button>
                <TextField
                  variant="outlined"
                  placeholder="Nome"
                  error={name == "" ? (errorName ? true : false) : null}
                  helperText={
                    name == "" ? (errorName ? "Required" : null) : null
                  }
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: "90%", padding: 10 }}
                ></TextField>
                <TextField
                  variant="outlined"
                  placeholder="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "90%", padding: 10 }}
                ></TextField>
                <TextField
                  variant="outlined"
                  placeholder="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: "90%", padding: 10 }}
                ></TextField>
                <button className="btn-style mt-3" onClick={checkValues}>
                  <span>Iscriviti</span>
                </button>
                <Divider></Divider>
              </Col>
            </Row>
          </div>
        </Modal>
      )}
    </div>
  );
}
