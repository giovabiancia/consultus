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

                    <div className="row justify-content-center">

                                <div className="col-lg-4 col-md-6" >
                                    <div className="item text-center wow"  data-wow-duration="1.5s" data-wow-delay=".3s">
                                        <span className="adv">Basic</span>
                                        {/* <div className="image">
                                            <img src={item.image} className="img-fluid" alt="Price bg" />
                                        </div> */}
                                        <h3>€10 / Mese</h3>
                                        <ul>
                                           <li>Ottieni più clienti</li>

                                        </ul>
                                        <Link to="/pricing" className="btn-style"><span>Acquista subito</span></Link>
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
