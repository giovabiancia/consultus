 import React, {useContext, useEffect} from 'react';
 import SectionTitle from '../global-components/SectionTitle';
import {sectionData} from './../../data/section.json'
import {Link, useHistory} from 'react-router-dom'
import { RisultatiContext } from '../../context/RisultatiContext';

 const Team = () => {
    let data = sectionData.team;
    const [consulenti, setConsulenti] = useContext(RisultatiContext)
    const history =useHistory()
    const handleLink=(item)=>{
        history.push({
            pathname:'/consulente/'+item.nome+'-'+item.cognome+'',
            state:item
    })
    }
    useEffect(() => {
        consulenti.filter((cons)=>cons.active==true)
    }, [])






     return (
         <div>
                 {/* <!-- start team area --> */}
                <section className={`team p-120 ${window.location.pathname === "/team" ? "team-page" : 3}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
{/*                             <SectionTitle subtitle ={data.sectionHeading.subtitle} title={data.sectionHeading.title} titleContent={data.sectionHeading.content}/>
 */}                            </div>
                            <div className="col-lg-12">
                                <div className="row justify-content-center">

                                    {consulenti.map((item, i)=>{
                                        return (
                                            <div className="col-lg-4 col-md-6 wow " style={{cursor:'pointer'}} data-wow-duration="1.5s" data-wow-delay=".4s" key={i}>
                                                <div className="item" onClick={()=>handleLink(item)}>
                                                    <div className="image">
                                                        <img src={item.foto} className="img-fluid" alt="Team Member" />
                                                        <div className="overlay">
                                                            <ul className="d-flex justify-content-center">
                                                                <li>
                                                                    <Link to={item.facebook}><i className="fab fa-facebook-f"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link to={item.twitter}><i className="fab fa-twitter"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link to={item.instagram}><i className="fab fa-instagram"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link to={item.linkedin}><i className="fab fa-linkedin-in"></i></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="shape">
                                                        <div className="text">
                                                            <a onClick={()=>handleLink(item)}>{item.nome} {item.cognome}</a>
                                                            <span>{item.email}</span>
                                                        </div>
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
                {/* <!-- end team area --> */}
         </div>
     );
 }

 export default Team;
