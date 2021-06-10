import React from 'react';
import {sectionData} from './../../data/section.json'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Count = () => {
    let data = sectionData.count;
    return (
        <div>
            {/* <!-- start count area --> */}
            <section className="count pt-90 bg-blue">
                <div className="container">
                    <div className="row">
                        {
                            data.singleCount.map((item, i)=>{
                                return (
                                    <div className="col-lg-3 col-md-6" key={i}>
                                        <div className={`count-item text-center wow ${item.animation}`} data-wow-duration="1.5s" data-wow-delay={item.animationDelay}>
                                            <div className="circle">
                                                
                                                    <CircularProgressbar value={item.percent} text={`${item.percent}%`} />
                                               
                                                <h5>{item.title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* <!-- end count area --> */}
        </div>
    );
}

export default Count;
