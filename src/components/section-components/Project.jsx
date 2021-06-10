import React from 'react';
import SectionTitle from '../global-components/SectionTitle';
import {sectionData} from './../../data/section.json'
import {Link} from 'react-router-dom'

const Project = () => {
    let data = sectionData.project;
    return (
        <div>
                {/* <!-- start project area --> */}
                <section className="project p-120 bg-blue">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                            <SectionTitle subtitle ={data.sectionHeading.subtitle} title={data.sectionHeading.title} titleContent={data.sectionHeading.content}/>
                            </div>
                            <div className="col-lg-12 single-items">
                                {data.singleProject.map((item, i)=>{
                                    return (
                                        <div key={i} className={`single-item-${i + 1}`}>
                                        <div className={`item wow ${item.animation}`} data-wow-duration="1.5s" data-wow-delay=".4s">
                                            <img src={item.image} className="img-fluid" alt="Project" />
                                            <div className="action">
                                                <span>{item.category}</span>
                                                <h6>{item.title}</h6>
                                                <Link to='/project'>
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
                </section>
                {/* <!-- end project area --> */}
        </div>
    );
}

export default Project;
