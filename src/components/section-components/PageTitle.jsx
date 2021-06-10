import React from 'react';
import { Link } from 'react-router-dom';



const PageTitle = (props) => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
             <section className="banner" style={{background:`url(${publicUrl + props.background})`}}>
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="banner-text text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                        <h1>{props.title}</h1>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link to="/home">Home</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    {props.pageName}
                                                </li>
                                            </ol>
                                        </nav>
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
        </>
    );
}

export default PageTitle;
