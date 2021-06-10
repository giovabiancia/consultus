import React from 'react';
import { Link } from 'react-router-dom';
import {sectionData} from './../../data/section.json'

const Connect = () => {
let data = sectionData.connect;

    return (
        <>
            {/* <!-- start connect area --> */}
            <section className={`connect ${window.location.pathname === '/' || window.location.pathname === "/home-v2" || window.location.pathname === '/service' || window.location.pathname === '/project' || window.location.pathname === '/team' || window.location.pathname === "/team-details" || window.location.pathname === "/pricing" ? " ": "pt-120"}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="row">
                                    <div className="col-lg-9 col-md-8">
                                        <div className="section-title">
                                            <h2><span>{data.title}</span></h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 text-right mt-sm-30 btn-part">
                                        <Link to="/contact" className="btn-style"><span>{data.buttonName}</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end connect area --> */}
        </>
    );
}

export default Connect;
