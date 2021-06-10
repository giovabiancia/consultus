import React from 'react';
import { sectionData } from './../../data/section.json';
import Forms from '../global-components/Forms';


const Contact = () => {
    let data = sectionData.contact;
    return (
        <>
            {/* <!-- start contact area --> */}
    <section className="contact p-120">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="section-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <h6>{data.inputInfo.subtitle}</h6>
                        <h2><span>{data.inputInfo.title}</span></h2>
                    </div>
                    <Forms />
                </div>
                <div className="col-lg-6 order-lg-last order-first">
                    <div className="image wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <img src="assets/images/home2/contact/contact.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end contact area --> */}
            
        </>
    );
}

export default Contact;
