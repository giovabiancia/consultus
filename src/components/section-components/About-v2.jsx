import React from 'react';
import {sectionData} from './../../data/section.json'

const AboutV2 = () => {
    let data = sectionData.about;
    return (
        <>
            {/* <!-- start about area --> */}
            <section className="about p-120 index2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="all-img wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="bg bg1">
                                    <img src={data.image4} className="img-fluid" alt="About " />
                                </div>
                                <div className="bg bg2">
                                    <img src={data.image5} className="img-fluid" alt="About " />
                                </div>
                                <div className="shape"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <h6>{data.subtitle}</h6>
                                <h2><span>{data.title}</span></h2>
                            </div>
                            <div className="text-part wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <p>
                                   {data.content}
                                </p>
                                <ul>{data.metaList.map((item, i)=>{
                                            return (
                                                <li key={i}>
                                            <i className="fas fa-check"></i>{item.itemContent}
                                        </li>
                                            )
                                        })}
                                </ul>
                            </div>
                            <div className="author d-flex align-items-center wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="image">
                                    <img src={data.ceoImage} className="img-fluid" alt="Person" />
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
                    </div>
                </div>
            </section>
            {/* <!-- end about area --> */}
        </>
    );
}

export default AboutV2;
