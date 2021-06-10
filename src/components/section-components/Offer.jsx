import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../global-components/SectionTitle';
import {sectionData} from './../../data/section.json'

const Offer = () => {
    let data = sectionData.offer;
    return (
        <>
              {/* <!-- start offer area --> */}
    <section className="offer pt-120 pb-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <SectionTitle subtitle ={data.offerSectionHeading.subtitle} title={data.offerSectionHeading.title} titleContent={data.offerSectionHeading.content}/>
                </div>
                <div className="col-lg-12">
                    <div className="row justify-content-center">
                        {
                            data.singleOffer.map((item, i) =>{
                                return(
                                    <div className="col-lg-4 col-md-6" key={i}>
                                        <div className={`item wow ${item.animation}`} data-wow-duration="1.5s" data-wow-delay={item.animationDelay}>
                                            <div className="icon">
                                                <i className={item.icon}></i>
                                            </div>
                                            <span className="number">0{i + 1}</span>
                                            <h3>{item.title}</h3>
                                            <ul>
                                                {item.features.map((feature, i)=>{
                                                    return <li key={i}>{feature}</li>
                                                })}
                                            </ul>
                                            <Link to="/service" className="btn-style"><span>read more</span></Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end offer area -->   */}
        </>
    );
}

export default Offer;
