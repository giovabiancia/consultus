import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';
import { sectionData } from './../../data/section.json';
import businessman from '../../img/businessman.png'
import CloseIcon from "@material-ui/icons/Close";
import { Col, Modal, Row } from "react-bootstrap";

const SingleMemberInfov2 = (props) => {
    const [lgShow, setLgShow] = useState(false);
    const history = useHistory();

    let data = sectionData.teamDetails;

    function handleClick() {


                 history.push("/modifica-profilo")

      }
    function handleClicks() {


          setLgShow(true)

      }




    return (
        <>
            <div className="team-inner inner-shadow " data-wow-duration="1.5s" data-wow-delay=".3s">
                <img src={props.profilo.foto? props.profilo.foto: businessman} className="img-fluid"  style={{maxHeight:300, objectFit:'contain'}}alt="Team" />
                <div className="fig-detail text-center">
                    <h3>{props.profilo? props.profilo.nome: null}</h3>
                    <p>{props.profilo? props.profilo.email : null}</p>
                    <div className="social">
                        <ul className="d-flex justify-content-center">
                        <li>
                                    <Link to={props.profilo.facebook}><i className="fab fa-facebook-f"></i></Link>
                                </li>

                            <li>
                                <Link to={props.profilo.twitter}><i className="fab fa-twitter"></i></Link>
                            </li>
                            <li>
                                <Link to={props.profilo.instagram}><i className="fab fa-instagram"></i></Link>
                            </li>
                            <li>
                                <Link to={props.profilo.linkedin}><i className="fab fa-linkedin-in"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="team-inner inner-shadow wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
            <div className="single-item mt-md-30 personal-info center">

                    <button className="btn-style" onClick={handleClicks}>
                    <span>Invia richiesta</span>
                    </button>

                </div>


            </div>
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
                <p>Il consulente riceverà i dati della richiesta compilata nel step by step e ti contatterà in privato  </p>


                <button className="btn-style mt-3" >
                  <span>Invia</span>
                </button>

              </Col>
            </Row>
          </div>
        </Modal>
        </>
    );
}

export default SingleMemberInfov2;
