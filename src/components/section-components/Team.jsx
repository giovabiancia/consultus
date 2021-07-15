 import React, {useContext, useEffect} from 'react';
 import SectionTitle from '../global-components/SectionTitle';
import {sectionData} from './../../data/section.json'
import {Link, useHistory} from 'react-router-dom'
import { RisultatiContext } from '../../context/RisultatiContext';
import Grow from '@material-ui/core/Grow';
import CardConsulente from './CardConsulente';

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



                                    {consulenti.map((item, i)=>{
                                        return (
                                            <div className="col-xl-3 col-lg-4 col-md-6 wow " style={{cursor:'pointer'}} data-wow-duration="1.5s" data-wow-delay=".4s" key={i}>
                                                <Grow in timeout={1000}>
                                                    <CardConsulente consulente = {item} ></CardConsulente>
                                                </Grow>

                                            </div>
                                        )
                                    })}
                                </div>

                    </div>
                </section>
                {/* <!-- end team area --> */}
         </div>
     );
 }

 export default Team;
