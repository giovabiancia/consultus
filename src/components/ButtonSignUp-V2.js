import { Divider, TextField } from "@material-ui/core";
import React, { Component, useContext, useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import wallet from "../svg/wallet.svg";
import { useHistory } from "react-router-dom";
import firebase from "../firebase.js";
import CloseIcon from "@material-ui/icons/Close";
import { useAuthentication } from "../hooks/useAuthentication";
import ModalIscriviti from "./ModalIscriviti";

export default function ButtonSignUp(props) {
  const history = useHistory();
  const auth = useAuthentication();
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [lg2Show, setLg2Show] = useState(false);
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    if (auth.loggedIn) {
      setLg2Show(true);
    } else {
      setLgShow(true);
    }

    /* if (user) {
      history.push("/request");
    } else {
      setLgShow(true);
    } */
  }

  const goToRequest = () => {
    history.push("/request");
  };
  return (
    <div>
      {auth.loggedIn ? (
        <button className="btn-style" onClick={goToRequest}>
          <span>Inizia Richiesta</span>
        </button>
      ) : (
        <ModalIscriviti></ModalIscriviti>
      )}
    </div>
  );
}
