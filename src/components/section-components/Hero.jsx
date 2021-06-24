import React,{ useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { Link } from 'react-router-dom';
import ButtonSignUp from '../ButtonSignUp';
import ButtonConsultant from '../ButtonConsultant';
import { sectionData } from './../../data/section.json';

function Hero (props){
    const [isOpen, setOpen] = useState(false)
    let data = sectionData.banner;
    let publicUrl = process.env.PUBLIC_URL+'/'
    return(
        <>
        {/* <!-- start banner area --> */}
        <section className="banner" style={{background:`url(${publicUrl + data.background})`,backgroundSize: "cover"}}>
            <div id="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="banner-text wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            {/* <p>{data.subtitle}</p> */}
                            <h1>{data.title}</h1>
                            <p>
                                {data.content}
                            </p>
                            <ul className="d-flex">
                                <li>
                                    {/* <Link to="/about" className="btn-style"><span>about us hei </span></Link> */}
                                    <ButtonSignUp></ButtonSignUp>
                                    <ButtonConsultant></ButtonConsultant>

                                </li>
                                <li>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="LCmsrVOXzZc" onClose={() => setOpen(false)} />
                                     <Link to="#!" className="special-btn d-flex align-items-center" onClick={()=>{setOpen(true)}}>
                                        <div className="vid-btn">
                                            <span className="btn-inner"><i className="fas fa-play"></i></span>
                                        </div>
                                        How we work
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
                <span className="line line4"></span>
            </div>
        </section>
        {/* <!-- end banner area --> */}

        </>

    )
}

export default Hero;