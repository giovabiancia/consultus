import React, { useContext, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

import { loadStripe } from "@stripe/stripe-js";

import firebase from "./../firebase";
import { useAuthentication } from "../hooks/useAuthentication";
import Pricing from "../components/section-components/Pricing";

export default function Step6() {
  const auth = useAuthentication();
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Row>
        <Col>
          <section className="pricing pt-120 pb-90">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="item text-center wow"
                    data-wow-duration="1.5s"
                    data-wow-delay=".3s"
                  >
                    <span className="adv">Basic</span>
                    {/* <div className="image">
                                            <img src={item.image} className="img-fluid" alt="Price bg" />
                                        </div> */}
                    <h3>€10 / Mese</h3>
                    <ul>
                      <li>Ottieni più clienti</li>
                      <li>Migliora la tua visibilità</li>
                      <li>Investi sulla tua professione</li>
                    </ul>
                    {/*  <a
                      className="btn-style"
                      style={{ cursor: "pointer" }}
                      onClick={sendToCheckOut}
                    >
                      <span>Acquista subito</span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
}
