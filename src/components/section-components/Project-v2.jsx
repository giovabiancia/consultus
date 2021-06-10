import React from 'react';
import {sectionData} from './../../data/section.json'
import SectionTitle from '../global-components/SectionTitle';
import { Link } from 'react-router-dom';

const ProjectV2 = () => {
    let data = sectionData.projectV2;
    return (
        <>
            {/* <!-- start project area --> */}
            <section className={`project pt-120 pb-90 project-style2 ${window.location.pathname === '/project' ? " ": "bg-blue"}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                        <SectionTitle subtitle ={data.sectionHeading.subtitle} title={data.sectionHeading.title} titleContent={data.sectionHeading.content}/>
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                {}
                                {data.singleProject.map((item, i)=>{
                                    return (
                                        <div className="col-lg-4 col-md-6" key={i}>
                                            <div className={`item wow  ${item.animation}`} data-wow-duration="1.5s" data-wow-delay=".3s">
                                                <img src={item.image} className="img-fluid" alt="Project" />
                                                <div className="action">
                                                    <span>{item.category}</span>
                                                    <h6>{item.title}</h6>
                                                    <Link to="/project" className="popup-image">
                                                        <i className="fas fa-plus"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end project area --> */}
        </>
    );
}

export default ProjectV2;
