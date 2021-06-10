import { Divider, TextField } from "@material-ui/core";
import React, { Component, useContext, useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import wallet from "../svg/wallet.svg";
import { useHistory } from "react-router-dom";
import firebase from "../firebase.js";
import CloseIcon from "@material-ui/icons/Close";
import { useAuthentication } from "../hooks/useAuthentication";

export default function ButtonConsultant(props) {
  const history = useHistory();
  const auth = useAuthentication();
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    var user = firebase.auth().currentUser;
    if (user) {
      history.push("/registrazione-consulente");
    } else {
      /* ; */
    }
  }

  return (
    <div className="mt-3">
      <button className="btn-style" onClick={handleClick}>
        <span>consulente</span>
      </button>
    </div>
  );
}
