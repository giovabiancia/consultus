import React,{useState} from 'react';
import {sectionData} from './../../data/section.json'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CountV2 = () => {
    let data = sectionData.countV2
    let publicUrl = process.env.PUBLIC_URL+'/'

    const [didViewCountUp, setDidViewCountUp] = useState(false)

   const onVisibilityChange = isVisible => {
        if (isVisible) {
            setDidViewCountUp(true)
        }
    }
    return (
        <>
            {/* <!-- start count area --> */}
            <section className="count index2">
                <div className="container">
                    <div className="bg wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <div className="overlay p-100"  style={{background:`url(${publicUrl + data.background})`, backgroundSize:"cover"}}>
                            <div className="row">
                                {data.singleCount.map((item, i)=>{
                                    return (
                                        <div className="col-lg-3 col-md-6" key={i}>
                                            <div className="item">
                                                <div className="icon">
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className="text">
                                                    <VisibilitySensor onChange={onVisibilityChange} offset={{top:10}} delayedCall>
                                                        <CountUp className="counter" end={didViewCountUp ? item.numbar : 0} />
                                                    </VisibilitySensor>
                                                    <h6>{item.title}</h6>
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
            {/* <!-- end count area --> */}
        </>
    );
}

export default CountV2;
