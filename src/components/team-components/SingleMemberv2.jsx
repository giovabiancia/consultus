import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';
import { sectionData } from './../../data/section.json';
import businessman from '../../img/businessman.png'
import CloseIcon from "@material-ui/icons/Close";
import { Col, Modal, Row } from "react-bootstrap";
import ButtonSignUp from '../ButtonSignUp';

const SingleMemberInfov2 = (props) => {
    const [lgShow, setLgShow] = useState(false);
    const history = useHistory();
    const auth = useAuthentication();

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

                    {/* <button className="btn-style" onClick={handleClicks}>
                    <span>Invia richiesta</span>
                    </button> */}

                    <ButtonSignUp></ButtonSignUp>


                </div>


            </div>

        </>
    );
}

export default SingleMemberInfov2;
