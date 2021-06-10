import React from 'react';
import Forms from '../global-components/Forms';
import { sectionData } from './../../data/section.json';

const ContactInner = () => {
    let data = sectionData.contact;
    return (
        <>
            {/* <!-- start contact area --> */}
            <section className="p-120 contact-page">
                <div className="container contact">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <h2><span>{data.inputInfo.title}</span></h2>
                            </div>
                            <Forms />
                            
                        </div>
                        <div className="col-lg-6">
                            <div className="right-part mt-md-60">
                                <div className="section-title wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".3s">
                                    <h2><span>{data.getAdvice.title}</span></h2>
                                </div>
                                <ul>
                                    {data.getAdvice.address.map((item,i)=>{
                                    return <li key={i} className="media wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".3s">
                                        <div className="icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="text">
                                            <h4>{item.title}</h4>
                                            <p>{item.contentOne}</p>
                                            <p>{item.contentTwo}</p>
                                        </div>
                                    </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end contact area --> */}

        </>
    );
}

export default ContactInner;
