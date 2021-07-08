import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {sectionData} from './../../data/section.json'
import {  useHistory } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';
import firebase from "../../firebase"

const SideBar = (props) => {
    let data = sectionData.blogDetails;
    const auth = useAuthentication()

    const [blogSearch, setBlogSearch] = useState("")
    const history =useHistory()
    console.log(props.dati)
    const handleLink=()=>{
        history.push({
            pathname:'/consulente/'+props.consulente.nome+'-'+props.consulente.cognome+'',
            state:props.consulente
    })
    }
    const handleDelete=()=>{
        var answer = window.confirm("Sicuro di voler eliminare l' articolo?");
        if (answer) {
            //some code
            history.push('/profilo')
            firebase.firestore().collection("blog").doc(props.dati.id).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }
        else {
            return
        }
    }
    const handleModifica=()=>{
        history.push({
            pathname:'/modifica-articolo',
            state:props.dati
    })
    }




    return (
        <div>
             <aside className="blog-sidebar">
                {/* <!-- single item --> */}
               {/*  <div className="single-item bg-blue search-blog wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <form action="#">
                        <label htmlFor="search">
                            <input type="search" id="search" placeholder="search"  value={blogSearch} onChange={(e)=>{setBlogSearch(e.target.value)}}/>
                        </label>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div> */}
                {/* <!-- single item --> */}
                <div className="single-item bg-blue recent-post mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="item-title">
                        <h5>Autore</h5>
                    </div>
                    <ul>


                                <li  className="media">
                                    <img src={props.dati.immagineConsulente} className="img-fluid" alt="Recent Post" />
                                    <div className="media-body">
                                        <span>{props.dati.nomeConsulente}</span>
                                        <span>{props.dati.bancaConsulente}</span>
                                        <a style={{cursor: 'pointer'}} onClick={handleLink}>Vedi Profilo</a>
                                    </div>
                                </li>

                    </ul>


                    {auth.loggedIn && auth.loggedIn.uid== props.consulente.uid?


                        <div className="item">
                            <button className="btn btn-danger mt-4" onClick={handleDelete}>Elimina articolo</button>

                            <br></br>

                            <button className="btn btn-warning mt-4" onClick={handleModifica}>Modifica</button>

                        </div>:null

                    }









                </div>
                {/* <!-- single item --> */}
               {/*  <div className="single-item bg-blue category mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
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
                </div> */}
                {/* <!-- single item --> */}
                {/* <div className="single-item bg-blue tags mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
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
                </div> */}
            </aside>
        </div>
    );
}

export default SideBar;
