import { Divider, TextField } from "@material-ui/core";
import React, { Component, useContext, useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import wallet from "../svg/wallet.svg";
import { useHistory } from "react-router-dom";
import firebase from "../firebase.js";
import CloseIcon from "@material-ui/icons/Close";
import { useAuthentication } from "../hooks/useAuthentication";

export default function ModalLogin(props) {
  const [lgShow, setLgShow] = useState(false);
  const history = useHistory();
  const auth = useAuthentication();
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const checkValues = () => {
    if (email == "") {
      setErrorName(true);
    } else {
      auth.signInEmail(email, password);
    }
  };
  return (
    <>
      <button className={props.class} onClick={() => setLgShow(true)}>
        <span>Accedi</span>
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
              <h3 className="mb-3">Login!</h3>
              <button
                class="btn btn-lg btn-google btn-block text-uppercase mt-4"
                type="submit"
                style={{ fontSize: 15 }}
                onClick={auth.login}
              >
                <i class="fab fa-google mr-2"></i> Login con Google
              </button>
              <button
                class="btn btn-lg btn-facebook btn-block text-uppercase mb-4"
                type="submit"
                style={{ fontSize: 15 }}
                onClick={auth.fbLogin}
              >
                <i class="fab fa-facebook-f mr-2"></i> Login con Facebook
              </button>
              {/*   <TextField
                variant="outlined"
                placeholder="Nome"
                error={name == "" ? (errorName ? true : false) : null}
                helperText={name == "" ? (errorName ? "Required" : null) : null}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "90%", padding: 10 }}
              ></TextField> */}
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
                <span>Login</span>
              </button>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
}
