import React,{useState, useContext, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { RisultatiContext } from '../../context/RisultatiContext';
import {sectionData} from './../../data/section.json'
import SideBar from './SideBar';

const BlogDetails = (props) => {
    let data = sectionData.blogDetails;
    let dati = props.dati

    const [consulenti, setConsulenti] = useContext(RisultatiContext)
    const [repName, setRepName] = useState("");
    const [repEmail, setRepEmail] = useState("");
    const [repComment, setRepComment] = useState("");

    console.log(props.dati)

     useEffect(() =>{
        consulenti.filter((cons)=> cons.uid == dati.idConsulente)

    }
     )


    const history =useHistory()
    const handleLink=()=>{
        history.push({
            pathname:'/consulente/'+consulenti[0].nome+'-'+consulenti[0].cognome+'',
            state:consulenti[0]
    })
    }



    return (
        <>
            {/* <!-- start blog details area --> */}
        <section className="blog-detail pt-30">
        <div className="container">
            <div className="row">
                {/* <!-- start blog detail inner --> */}
                <div className="col-lg-8 order-1 order-lg-0">
                    <div className="detail-inner ">
{/*                         <img src={dati.immagine} className="img-fluid wow fadeInUp" style={{maxHeight:300}} alt="Single Blog" data-wow-duration="1.5s" data-wow-delay=".3s" />
 */}                        <h3 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">{dati.nome}</h3>
                        <div className="blog-meta media align-items-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                            {/* <div className="author media align-items-center">
                                <img src={dati.immagineConsulente} className="img-fluid" alt="Author" />
                                <p>By: {dati.nomeConsulente}</p>
                            </div> */}
                            {/* <ul className="meta-list media">
                                <li className="d-flex align-items-center">
                                    <i className="fas fa-calendar-alt"></i>
                                    <p>{data.publishDate}</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="far fa-comment"></i>
                                    <p>Comments: {data.commentCount}</p>
                                </li>
                            </ul> */}
                        </div>
                        <div dangerouslySetInnerHTML={{__html: dati.contenuto}}></div>






                        {/* <!-- start leave a reply area --> */}
                       {/* <!-- end leave a reply area --> */}
                    </div>
                </div>
                {/* <!-- end blog detail inner --> */}

                {/* <!-- start blog sidebar area --> */}
                <div className="col-lg-4 order-0 order-lg-1">
                   <SideBar dati = {dati} consulente={consulenti[0]} />
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
