import React from 'react';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';

const Footer =()=>{
    let data = sectionData.footer;
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
                {/* <!-- start footer area --> */}
                <footer  style={{background:`url(${publicUrl + data.background})`, backgroundSize: "cover"}}>
                    <div className="overlay">
                        {/* <!-- start footer-top area --> */}
                        <section className="footer-top">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-3 col-md-6">
                                        <div className="title">
                                            <h4>{data.mainFooter.about.title}</h4>
                                        </div>
                                        <p>
                                        {data.mainFooter.about.content}
                                        </p>
                                        <div className="more">
                                            <Link to="/about">read more <i className="flaticon-chevron-1"></i></Link>
                                        </div>
                                        <div className="social">
                                            <ul className="d-flex">
                                                {data.mainFooter.about.social.map((item, i)=>{
                                                    return <li key={i}><Link to={item.idLink}><i className={`fab ${item.icon}`}></i></Link></li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 mt-sm-30">
                                        <div className="title">
                                            <h4>{data.mainFooter.info.title}</h4>
                                        </div>
                                        <div className="info">
                                            <ul>
                                                {data.mainFooter.info.pageLink.map((item, i)=>{
                                                    return <li key={i}><Link to={item.pageLink}>{item.pageName}</Link></li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-6 mt-md-30">
                                        <div className="title">
                                            <h4>{data.mainFooter.services.title}</h4>
                                        </div>
                                        <div className="service-list">
                                            <ul>
                                            {data.mainFooter.services.pageLink.map((item, i)=>{
                                                    return <li key={i}><Link to={item.pageLink}>{item.pageName}</Link></li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 mt-md-30">
                                        <div className="title">
                                            <h4>{data.mainFooter.newsLetter.title}</h4>
                                        </div>
                                        <div className="news">
                                        {data.mainFooter.newsLetter.singleNews.map((item, i)=>{
                                            return <div className="news-item" key={i}>
                                                    <img src={item.image} className="img-fluid" alt="News" />
                                                    <div className="overlay text-center">
                                                        <Link to={item.link}><i className="fas fa-link"></i></Link>
                                                    </div>
                                                </div>
                                                })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- end footer-top area --> */}

                        {/* <!-- start footer-bottom area --> */}
                        <section className="footer-bottom">
                            <div className="container">
                                <div className="footer-bottom-content">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-5">
                                            <div className="copyright">
                                                <p>
                                                    Copyright &copy; {data.footerBottom.copyRightYear} <Link to={data.footerBottom.copyRightLink}>{data.footerBottom.copyRightFrom}</Link>. All Rights
                                                    Reserved
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-7 mt-sm-20">
                                            <div className="footer-menu">
                                                <ul className="d-flex justify-content-end">
                                                    {data.footerBottom.bottomPageLink.map((item, i)=>{
                                                        return <li key={i}><a href={item.pageLink}>{item.pageName}</a></li>
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- end footer-bottom area --> */}
                    </div>
                </footer>
                {/* <!-- end footer area --> */}
        </>
        )
}
export default Footer;