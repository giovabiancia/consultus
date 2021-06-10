import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {sectionData} from './../../data/section.json'

const SideBar = () => {
    let data = sectionData.blogDetails;

    const [blogSearch, setBlogSearch] = useState("")
    return (
        <div>
             <aside className="blog-sidebar">
                {/* <!-- single item --> */}
                <div className="single-item bg-blue search-blog wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <form action="#">
                        <label htmlFor="search">
                            <input type="search" id="search" placeholder="search"  value={blogSearch} onChange={(e)=>{setBlogSearch(e.target.value)}}/>
                        </label>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                {/* <!-- single item --> */}
                <div className="single-item bg-blue recent-post mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="item-title">
                        <h5>recent posts</h5>
                    </div>
                    <ul>
                        {data.recentPost.map((item, i)=>{
                            return (
                                <li key={i} className="media">
                                    <img src={item.image} className="img-fluid" alt="Recent Post" />
                                    <div className="media-body">
                                        <span>{item.publishDate}</span>
                                        <Link to="#!">{item.title}</Link>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/* <!-- single item --> */}
                <div className="single-item bg-blue category mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="item-title">
                        <h5>categories</h5>
                    </div>
                    <ul>
                    {data.categores.map((item, i)=>{
                            return (
                                <li key={i}><Link to={item.link}><i className="fas fa-tags"></i>{item.title}</Link></li>
                            )
                        })}
                    </ul>
                </div>
                {/* <!-- single item --> */}
                <div className="single-item bg-blue tags mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="item-title">
                        <h5>tags</h5>
                    </div>
                    <div className="tag-items">
                        {data.tags.map((item, i)=>{
                                return (
                                    <Link key={i} to={item.link}>{item.title}</Link>
                                )
                            })}
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default SideBar;
