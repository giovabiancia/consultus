import React from 'react';
import { Link } from 'react-router-dom';
import NavigationMenuV2 from '../global-components/NavigationMenu-v2';
import { sectionData } from './../../data/section.json';

const ErrorInner = () => {
    let data = sectionData.sectionTitle;
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
                {/* <!-- start header area --> */}
    <header className="index2 about-page error-page">
        {/* <!-- start banner area --> */}
        <section className="banner" style={{background:`url(${publicUrl + data.error.background})`, backgroundSize: "cover"}}>
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="banner-text text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <h1>404</h1>
                                <h3>page not found</h3>
                                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                                <Link to="/" className="btn-style"><span>Go to home</span></Link>
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
            </div>
        </section>
        {/* <!-- end banner area --> */}
    </header>
    {/* <!-- end header area --> */}
</>
    );
}

export default ErrorInner;
