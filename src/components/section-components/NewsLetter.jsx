import React,{useState} from 'react';
import { sectionData } from './../../data/section.json';


const NewsLetter = () => {
    let data = sectionData.newsletter
    let publicUrl = process.env.PUBLIC_URL+'/'
    const [inputEmail, setInputEmail]= useState("")
    return (
        <>
        {/* <!-- start newsletter area --> */}
        <section className="newsletter" style={{background:`url(${publicUrl + data.background})`}} >
            <div className="overlay p-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <h2><span>{data.title}</span></h2>
                            </div>
                            <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
                               {data.content}
                            </p>
                            <form action="#" className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <label htmlFor="email" className="m-0">
                                    <input type="email" placeholder="Enter your email" id="email" className="input-email" onChange={(e)=>{setInputEmail(e.target.value)}} value={inputEmail}/>
                                </label>
                                <button type="submit" className="btn-style">
                                    <span>subscribe</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end newsletter area --> */}
        </>
    );
}

export default NewsLetter;
