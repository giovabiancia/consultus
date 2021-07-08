import React from 'react';
import {sectionData} from './../../data/section.json'
import expert from '../../img/svg/expert.svg'
import investing from '../../img/svg/investing.svg'
import location from '../../img/svg/location.svg'
import mobile from '../../img/svg/mobile.svg'
import pitch from '../../img/svg/pitch.svg'
import profile from '../../img/svg/profile.svg'

const About = () => {
    let data = sectionData.about;
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <div>
                {/* <!-- start about area --> */}
                <section className="about p-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="section-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                    <h6>{data.subtitle}</h6>
                                    <h2><span>{data.title}</span></h2>
                                </div>
                                <div className="text-part wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
                                    <p>
                                       {data.content}
                                    </p>
                                    <ul>
                                        {data.metaList.map((item, i)=>{
                                            return (
                                                <li key={i}>
                                            <i className="fas fa-check"></i>{item.itemContent}
                                        </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="author d-flex align-items-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
                                    <div className="image">
                                        <img src={data.ceoImage} className="img-fluid" style={{objectFit:'cover'}} alt="Person" />
                                    </div>
                                    <div className="name">
                                        <h6>{data.ceoName}</h6>
                                        <p>{data.ceoDesignation}</p>
                                    </div>
                                    <div className="sign">
                                        <img src={data.ceoSign} className="img-fluid" alt="Signature" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="all-img mt-xs-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
                                    <div className="bg bg1">
                                        <img src={mobile} className="img-fluid" alt="About" />
                                    </div>
                                    <div className="bg bg2">
                                        <img src={data.ceoSign} className="img-fluid" alt="About" />
                                    </div>
                                    <div className="bg3" style={{background:`url(${data.ceoSign})`,backgroundPosition: "54%"}}>
                                        <span>{data.experienceYears}</span>
                                        <h3>{data.experience}</h3>
                                    </div>
                                    <div className="shape">
                                        <div className="inner"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end about area --> */}
        </div>
    );
}

export default About;
