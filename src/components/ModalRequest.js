import { Divider, TextField } from "@material-ui/core";
import React, { Component, useContext, useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import wallet from "../svg/wallet.svg";
import { useHistory } from "react-router-dom";
import firebase from "../firebase.js";
import CloseIcon from "@material-ui/icons/Close";
import { useAuthentication } from "../hooks/useAuthentication";

export default function ModalRequest() {
  const [lgShow, setLgShow] = useState(false);
  const history = useHistory();
  const auth = useAuthentication();
  function handleClick() {
    history.push("/modifica-profilo");
  }
  function handleClicks() {
    setLgShow(true);
  }
  const consu = () => {
    history.push("/registrazione-consulente");
  };
  const logout = () => {
    history.push("/");
    auth.logout();
  };

  return (
    <>
      <button className="btn button-primary" onClick={handleClicks}>
        <span>Invia richiesta</span>
      </button>
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
              <h3 className="mb-3">Invia il tuo profilo al consulente !</h3>
              <p>
                Il consulente riceverà i dati della richiesta compilata nel step
                by step e ti contatterà in privato{" "}
              </p>

              <button className="btn-style mt-3">
                <span>Invia</span>
              </button>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
}
