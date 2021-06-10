import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../global-components/SectionTitle';
import {sectionData} from './../../data/section.json'

const Service = () => {
    let data = sectionData.service;
    return (
        <div>
                {/* <!-- start service area --> */}
                <section className={`service pt-120 pb-90 ${window.location.pathname !== '/about' ? "bg-blue": " "}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                            <SectionTitle subtitle ={data.serviceSectionHeading.subtitle} title={data.serviceSectionHeading.title} titleContent={data.serviceSectionHeading.content}/>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    {data.singleService.map((item, i)=>{
                                       return <div className="col-lg-4 col-md-6" key={i}>
                                        <div className= {`item wow  ${item.animation}`} data-wow-duration="1.5s" data-wow-delay=".4s">
                                            <div className="img-part">
                                                <img src={item.image} className="img-fluid" alt="Service Img" />
                                            </div>
                                            <div className="content">
                                                <div className="icon">
                                                    <i className={item.icon}></i>
                                                </div>
                                                <h4>{item.title}</h4>
                                                <p>
                                                    {item.content}
                                                </p>
                                                <Link to="/service-details">View Details <i className="fas fa-long-arrow-alt-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end service area --> */}
        </div>
    );
}

export default Service;
