import React from 'react';
import { Link } from 'react-router-dom';

const PageTitle = (props) =>{
    let publicUrl = process.env.PUBLIC_URL+'/'
    return(
        <>
            {/* <!--================= page title =================--> */}
            <section className="page-title mb-120" style={{background:`url(${publicUrl + props.background})`}}>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    {/* <!--================= page title inner=================--> */}
                    <div className="page-title-inner">
                    <h1
                        className="wow fadeInUp"
                        data-wow-delay="0.2s"
                        data-wow-duration="1.5s"
                    >
                        {props.pageTitle}
                    </h1>
                    <ul
                        className="page-routes wow fadeInUp"
                        data-wow-delay="0.4s"
                        data-wow-duration="1.5s"
                    >
                        <li><Link to="/">Home</Link></li>
                        <li>{props.pageName}</li>
                    </ul>
                    </div>
                    {/* <!--================= End of page title inner =================--> */}
                </div>
                </div>
            </div>
            </section>
            {/* <!--================= End of page title =================--> */}
        </>
    )
}

export default PageTitle;