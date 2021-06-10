import React from 'react';
import {sectionData} from './../../data/section.json'
import SectionTitle from '../global-components/SectionTitle';
import { Link } from 'react-router-dom';

const Pricing = () => {
    let data = sectionData.pricing
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
                {/* <!-- start price area --> */}
    <section className="pricing pt-120 pb-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <SectionTitle subtitle ={data.sectionHeading.subtitle} title={data.sectionHeading.title} titleContent={data.sectionHeading.content}/>
                </div>
                <div className="col-lg-12">
                    <div className="row justify-content-center">
                        {data.singlePrice.map((item,i)=>{
                            return (
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className={`item text-center wow ${item.animation}`}  style={{background:`url(${publicUrl + item.background})`, backgroundSize:"cover"}} data-wow-duration="1.5s" data-wow-delay=".3s">
                                        <span className="adv">{item.package}</span>
                                        <div className="image">
                                            <img src={item.image} className="img-fluid" alt="Price bg" />
                                        </div>
                                        <h3>${item.amount} /Month</h3>
                                        <ul>
                                            {item.features.map((item,i)=>{
                                                return (<li key={i}>{item}</li>)
                                            })}
                                        </ul>
                                        <Link to="/pricing" className="btn-style"><span>purchase now</span></Link>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end price area --> */}
        </>
    );
}

export default Pricing;
