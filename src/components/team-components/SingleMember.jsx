import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';
import { sectionData } from './../../data/section.json';
import businessman from '../../img/businessman.png'

const SingleMemberInfo = () => {
    let data = sectionData.teamDetails;
    const auth = useAuthentication()


    return (
        <>
            <div className="team-inner inner-shadow wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                <img src={auth.loggedIn.photoURL? auth.loggedIn.photoURL: businessman} className="img-fluid"  style={{maxHeight:300, objectFit:'contain'}}alt="Team" />
                <div className="fig-detail text-center">
                    <h3>{auth.loggedIn.displayName}</h3>
                    <p>{auth.loggedIn.email}</p>
                    <div className="social">
                        <ul className="d-flex justify-content-center">
                        <li>
                                    <Link to={data.memberInfo.socile.facebook}><i className="fab fa-facebook-f"></i></Link>
                                </li>

                            <li>
                                <Link to={data.memberInfo.socile.twitter}><i className="fab fa-twitter"></i></Link>
                            </li>
                            <li>
                                <Link to={data.memberInfo.socile.insta}><i className="fab fa-instagram"></i></Link>
                            </li>
                            <li>
                                <Link to={data.memberInfo.socile.linkdin}><i className="fab fa-linkedin-in"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="team-inner inner-shadow wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                <div className="single-item mt-md-30 personal-info">
                    <div className="item-title">
                        <h4>{data.personalInfo.title}</h4>
                    </div>
                    <ul>
                        {data.personalInfo.singleInfo.map((item, i)=>{

                            return (
                                <li key={i}>
                                <p><span>{item.name}</span>{item.no}</p>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SingleMemberInfo;
