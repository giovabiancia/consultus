import React from 'react';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';

const ServiceDetailsInner = () => {
    let data = sectionData.serviceDetails
    return (
        <>
            {/* <!-- start service details area --> */}
            <section className="service-detail pt-120">
                <div className="container">
                    <div className="row">
                        {/* <!-- start main content area --> */}
                        <div className="col-lg-8 order-1 order-lg-0">
                            <div className="details-inner">
                                <img src={data.image1} className="img-fluid wow fadeInUp" alt="Service" data-wow-duration="1.5s" data-wow-delay=".3s" />
                                <h3 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.title}</h3>
                                <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content1}</p>
                                <div className="details-bottom wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                    <img src={data.image2} className="img-fluid" alt="Service" />
                                    <p>{data.content2}</p>
                                    <p>{data.content3}</p>
                                    <p>{data.content4}</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end main content area --> */}

                        {/* <!-- start detail sidebar area --> */}
                        <div className="col-lg-4 col-md-8 offset-md-2 col-sm-12 order-0 order-lg-1 offset-lg-0">
                            <div className="single-item wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="item-title all">
                                    <h4>{data.serviceFeature.title}</h4>
                                </div>
                                <ul>
                                    {data.serviceFeature.singleService.map((item,i)=>{
                                        return <li key={i}><Link to={item.serviceLink}><p>{item.serviceName}</p></Link></li>
                                    })}
                                </ul>
                            </div>
                            <div className="single-item time wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="item-title">
                                    <h4>{data.openingHours.title}</h4>
                                </div>
                                <ul>
                                    {data.openingHours.days.map((item, i)=>{
                                        return <li key={i}>
                                                    <p>{item.dayName}</p>
                                                    <p>{item.dayTime}</p>
                                                </li>
                                    })}
                                </ul>
                                <Link to="#">know more<i className="fas fa-arrow-circle-right"></i></Link>
                            </div>
                            <div className="single-item ab wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="item-title">
                                    <h4>{data.aboutUs.title}</h4>
                                </div>
                                <div className="image">
                                    <img src={data.aboutUs.image} className="img-fluid" alt="Service" />
                                </div>
                                <h5>{data.aboutUs.subTitle}</h5>
                                <p>{data.aboutUs.content}</p>
                            </div>
                        </div>
                        {/* <!-- end detail sidebar area --> */}
                    </div>
                </div>
            </section>
            {/* <!-- end service details area --> */}

        </>
    );
}

export default ServiceDetailsInner;
