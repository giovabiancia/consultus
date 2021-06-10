import React from 'react';
import SectionTitle from '../global-components/SectionTitle';
import {sectionData} from './../../data/section.json'
import {Link} from 'react-router-dom'

const News = () => {
    let data = sectionData.news;   
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
            {/* <!-- start blog area --> */}
            <section className="blog p-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                        <SectionTitle subtitle ={data.sectionHeading.subtitle} title={data.sectionHeading.title} titleContent={data.sectionHeading.content}/>
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="item item-big wow fadeInRight" style={{background:`url(${publicUrl}assets/images/home1/blog/blog1.jpg)`}} data-wow-duration="1.5s" data-wow-delay=".4s">
                                        <div className="overlay">
                                            <div className="time d-flex align-items-center">
                                                <i className="fas fa-calendar-alt"></i>
                                                <span>August 10, 2020</span>
                                            </div>
                                            <div className="title">
                                                <Link to="/blog-details">Great Business Solutions and Expert Openion for Clients
                                                </Link>
                                            </div>
                                            <div className="more">
                                                <Link to="/blog-details">read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-12 mt-md-20">
                                            <div className="item wow fadeInLeft" style={{background:`url(${publicUrl}assets/images/home1/blog/blog2.jpg)`}}  data-wow-duration="1.5s" data-wow-delay=".4s">
                                                <div className="overlay">
                                                    <div className="time d-flex align-items-center">
                                                        <i className="fas fa-calendar-alt"></i>
                                                        <span>July 30, 2020</span>
                                                    </div>
                                                    <div className="title">
                                                        <Link to="/blog-details">English for Science, Techs & Engineering</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mt-20">
                                            <div className="item wow fadeInLeft" style={{background:`url(${publicUrl}assets/images/home1/blog/blog3.jpg)`}}  data-wow-duration="1.5s" data-wow-delay=".4s">
                                                <div className="overlay">
                                                    <div className="time d-flex align-items-center">
                                                        <i className="fas fa-calendar-alt"></i>
                                                        <span>june 15, 2020</span>
                                                    </div>
                                                    <div className="title">
                                                        <Link to="/blog-details">Conference, Events and Hospitality Book
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mt-20">
                                            <div className="item wow fadeInLeft" style={{background:`url(${publicUrl}assets/images/home1/blog/blog4.jpg)`}}  data-wow-duration="1.5s" data-wow-delay=".4s">
                                                <div className="overlay">
                                                    <div className="time d-flex align-items-center">
                                                        <i className="fas fa-calendar-alt"></i>
                                                        <span>may 09, 2020</span>
                                                    </div>
                                                    <div className="title">
                                                        <Link to="/blog-details">Conference, Events and Book for Business
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end blog area --> */}
        </>
    );
}

export default News;
