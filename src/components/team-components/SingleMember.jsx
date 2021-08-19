import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';
import { sectionData } from './../../data/section.json';
import businessman from '../../img/businessman.png'
import CloseIcon from "@material-ui/icons/Close";
import { Col, Modal, Row } from "react-bootstrap";
import ModalRequest from './../ModalRequest';

const SingleMemberInfo = (props) => {
    const [lgShow, setLgShow] = useState(false);
    const history = useHistory();

    let data = sectionData.teamDetails;
    const auth = useAuthentication()
    function handleClick() {


                 history.push("/modifica-profilo")

      }
    function handleClicks() {


          setLgShow(true)

      }
      const consu = ()=>{
        history.push('/registrazione-consulente')
    }
    const logout = ()=>{
        history.push('/')
        auth.logout()
    }




    return (
        <>
            <div className="team-inner inner-shadow wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                <img src={auth.loggedIn.photoURL? auth.loggedIn.photoURL: businessman} className="img-fluid"  style={{maxHeight:300, objectFit:'contain'}}alt="Team" />
                <div className="fig-detail text-center">
                    <h3>{auth.loggedIn? auth.loggedIn.displayName: null}</h3>
                    <p>{auth.loggedIn? auth.loggedIn.email : null}</p>
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
            {auth.loggedIn.uid === props.profilo.uid?
            <div className="single-item  personal-info center">

                    <ModalRequest></ModalRequest>


              </div>:null}
                {auth.loggedIn.uid === props.profilo.uid?
                <div className="single-item  personal-info center">

                  <button className="btn-primary btn-lg" onClick={handleClick}>
                  Modifica Profilo
                  </button>
                  <button className="btn-danger mt-3
                  btn-lg" onClick={logout}>
                  <span>Logout</span>
                  </button>

                  </div>:null
                }

            </div>

        </>
    );
}

export default SingleMemberInfo;
