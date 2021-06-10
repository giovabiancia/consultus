import React from 'react';
import { Link } from 'react-router-dom';
import {sectionData} from './../../data/section.json'


const Partner = () => {
    let data = sectionData.partner;
    return (
        <>
            {/* <!-- start brand area --> */}
            <section className="brand p-100">
                <div className="container">
                    <div className="row">
                        {data.singleParner.map((item, i)=>{
                            return (
                                <div className="col" key={i}>
                                    <div className={`brand-logo text-center wow ${item.animation}`} data-wow-duration="1.5s" data-wow-delay=".3s">
                                        <Link to={item.partnerLink}><img src={item.partnerImage} className="img-fluid" alt="Brand Logo" /></Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            {/* <!-- end brand area --> */}
        </>
    );
}

export default Partner;
