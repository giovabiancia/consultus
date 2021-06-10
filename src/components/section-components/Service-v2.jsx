import React from 'react';
import {sectionData} from './../../data/section.json'
import SectionTitle from '../global-components/SectionTitle';
import { Link } from 'react-router-dom';

const ServiceV2 = () => {
    let data = sectionData.serviceV2;
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
                {/* <!-- start offer area --> */}
                <section className="offer pt-120 index2 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                            <SectionTitle subtitle ={data.serviceSectionHeading.subtitle} title={data.serviceSectionHeading.title} titleContent={data.serviceSectionHeading.content}/>
                            </div>
                            <div className="col-lg-12">
                                <div className="row justify-content-center">
                                    {data.singleService.map((item,i)=>{
                                        return (
                                            <div className="col-lg-4 col-md-6" key={i}>
                                                <div className={`item wow  ${item.animation}`} style={{background:`url(${publicUrl + item.image})`}} data-img="assets/images/home2/offer/offer1.jpg" data-wow-duration="1.5s" data-wow-delay=".3s">
                                                    <div className="overlay">
                                                        <div className="icon">
                                                            <i className={item.icon}></i>
                                                        </div>
                                                        <span className="number">0{i+1}</span>
                                                        <h3>{item.title}</h3>
                                                        <ul>
                                                            {item.feature.map((item, i)=>{
                                                                return <li key={i}>{item}</li>
                                                            })}
                                                        </ul>
                                                        <Link to="/service" className="btn-style"><span>read more</span></Link>
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
                {/* <!-- end offer area --> */}
        </>
    );
}

export default ServiceV2;
