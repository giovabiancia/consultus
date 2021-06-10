import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {sectionData} from './../../data/section.json'
import SideBar from './SideBar';

const BlogDetails = () => {
    let data = sectionData.blogDetails;

    const [repName, setRepName] = useState("");
    const [repEmail, setRepEmail] = useState("");
    const [repComment, setRepComment] = useState("");
    return (
        <>
            {/* <!-- start blog details area --> */}
            <section className="blog-detail pt-120">
        <div className="container">
            <div className="row">
                {/* <!-- start blog detail inner --> */}
                <div className="col-lg-8 order-1 order-lg-0">
                    <div className="detail-inner">
                        <img src={data.image} className="img-fluid wow fadeInUp" alt="Single Blog" data-wow-duration="1.5s" data-wow-delay=".3s" />
                        <h3 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.title}</h3>
                        <div className="blog-meta media align-items-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                            <div className="author media align-items-center">
                                <img src={data.authorImage} className="img-fluid" alt="Author" />
                                <p>By: {data.authorName}</p>
                            </div>
                            <ul className="meta-list media">
                                <li className="d-flex align-items-center">
                                    <i className="fas fa-calendar-alt"></i>
                                    <p>{data.publishDate}</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="far fa-comment"></i>
                                    <p>Comments: {data.commentCount}</p>
                                </li>
                            </ul>
                        </div>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content1}</p>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content2}</p>
                        <blockquote className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                            <div className="icon">
                                <i className="flaticon-quotation"></i>
                            </div>
                            <p>{data.quteContent}</p>
                        </blockquote>
                        <h4 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.subTitle}</h4>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content3}</p>
                        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{data.content4}</p>
                        <div className="share-blog media wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                            <span>share:</span>
                            <div className="media-body">
                                <ul className="social d-flex">
                   
                                    {data.socialShare.map((item, i)=>{
                                        return <li key={i}><Link to={item.link}><i className={item.icon}></i></Link></li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        {/* <!-- start comment area --> */}
                        <div className="comments">
                            <h3 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">3 comments</h3>
                            {/* <!-- start comment list --> */}
                            <ul className="comment-list">
                                {/* <!-- single comment --> */}
                                <li className="single-comment wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                    <img src="assets/images/blog-detail/reply1.png" className="img-fluid" alt="Reply" />
                                    <div className="comment-body">
                                        <div className="comment-author d-flex align-items-center justify-content-between">
                                            <ul className="d-flex align-items-center">
                                                <li>Diego Fou</li>
                                                <li>jan 06 2020</li>
                                            </ul>
                                            <Link to="#">
                                                <i className="fas fa-reply-all"></i>
                                                reply
                                            </Link>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utx gh labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation .</p>
                                    </div>
                                    {/* <!-- start reply comment list --> */}
                                    <ul className="comment-list">
                                        {/* <!-- reply comment --> */}
                                        <li className="single-comment wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                            <img src="assets/images/blog-detail/reply2.png" className="img-fluid" alt="Reply" />
                                            <div className="comment-body">
                                                <div className="comment-author d-flex align-items-center justify-content-between">
                                                    <ul className="d-flex align-items-center">
                                                        <li>prience Fou</li>
                                                        <li>jan 06 2020</li>
                                                    </ul>
                                                    <Link to="#">
                                                        <i className="fas fa-reply-all"></i>
                                                        reply
                                                    </Link>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utx gh labore et dolor magna ali Ut enim ad minim veniam, quis</p>
                                            </div>
                                        </li>
                                    </ul>
                                    {/* <!-- end reply comment list --> */}
                                </li>
                                {/* <!-- single comment --> */}
                                <li className="single-comment wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                    <img src="assets/images/blog-detail/reply3.png" className="img-fluid" alt="Reply" />
                                    <div className="comment-body">
                                        <div className="comment-author d-flex align-items-center justify-content-between">
                                            <ul className="d-flex align-items-center">
                                                <li>John Dou</li>
                                                <li>jan 06 2020</li>
                                            </ul>
                                            <Link to="#">
                                                <i className="fas fa-reply-all"></i>
                                                reply
                                            </Link>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utx gh labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation .</p>
                                    </div>
                                </li>
                            </ul>
                            {/* <!-- end comment list --> */}
                        </div>
                        {/* <!-- end comment area --> */}

                        {/* <!-- start leave a reply area --> */}
                        <div className="leave-reply">
                            <h3 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">Leave a Reply</h3>
                            <form action="#" className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <input type="text" placeholder="your name*" required className="input-reply" value={repName} onChange={(e)=>{setRepName(e.target.value)}} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 mt-sm-30">
                                        <input type="email" placeholder="your email*" required className="input-reply" value={repEmail} onChange={(e)=>{setRepEmail(e.target.value)}}/>
                                    </div>
                                    <div className="col-lg-12 mt-30">
                                        <textarea placeholder="your comment*" required className="input-reply" value={repComment} onChange={(e)=>{setRepComment(e.target.value)}}></textarea>
                                    </div>
                                    <div className="col-lg-12 mt-30">
                                        <button type="submit" className="btn-style"><span>submit</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <!-- end leave a reply area --> */}
                    </div>
                </div>
                {/* <!-- end blog detail inner --> */}

                {/* <!-- start blog sidebar area --> */}
                <div className="col-lg-4 order-0 order-lg-1">
                   <SideBar />
                </div>
                {/* <!-- end blog sidebar area --> */}
            </div>
        </div>
    </section>
            {/* <!-- end blog details area --> */}

        </>
    );
}

export default BlogDetails;
