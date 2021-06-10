 import React from 'react';
 import SectionTitle from '../global-components/SectionTitle';
import {sectionData} from './../../data/section.json'
import {Link} from 'react-router-dom'

 const Team = () => {
    let data = sectionData.team;
     return (
         <div>
                 {/* <!-- start team area --> */}
                <section className={`team p-120 ${window.location.pathname === "/team" ? "team-page" : 3}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                            <SectionTitle subtitle ={data.sectionHeading.subtitle} title={data.sectionHeading.title} titleContent={data.sectionHeading.content}/>
                            </div>
                            <div className="col-lg-12">
                                <div className="row justify-content-center">
                       
                                    {data.member.slice(0, (window.location.pathname === "/team" ? 6 : 3) ).map((item, i)=>{
                                        return (
                                            <div className={`col-lg-4 col-md-6 wow  ${item.animation}`} data-wow-duration="1.5s" data-wow-delay=".4s" key={i}>
                                                <div className="item">
                                                    <div className="image">
                                                        <img src={item.image} className="img-fluid" alt="Team Member" />
                                                        <div className="overlay">
                                                            <ul className="d-flex justify-content-center">
                                                                <li>
                                                                    <Link to={item.facebookLink}><i className="fab fa-facebook-f"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link to={item.twitterLink}><i className="fab fa-twitter"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link to={item.instagramLink}><i className="fab fa-instagram"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link to={item.linkdinLink}><i className="fab fa-linkedin-in"></i></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="shape">
                                                        <div className="text">
                                                            <Link to="/team-details">{item.name}</Link>
                                                            <span>{item.designation}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end team area --> */}
         </div>
     );
 }
 
 export default Team;
 