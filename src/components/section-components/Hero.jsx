import React,{ useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { Link, useHistory } from 'react-router-dom';
import ButtonSignUp from '../ButtonSignUp-V2';
import ButtonConsultant from '../ButtonConsultant';
import { sectionData } from './../../data/section.json';
import { Select, TextField } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Paper from '@material-ui/core/Paper';

function Hero (props){
    const [isOpen, setOpen] = useState(false)
    let data = sectionData.banner;
    let publicUrl = process.env.PUBLIC_URL+'/'

    const history = useHistory()
    const goToRequest = () => {
        history.push("/request");
      };

    const handleClick =()=>{
        history.push('/registrazione-consulente')
    }
    return(
        <>
        {/* <!-- start banner area --> */}
        <section className="banner" style={{background:`url(${publicUrl + data.background})`,backgroundSize: "cover", backgroundPosition:'center'}}>
            <div id="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-text center" data-wow-duration="1s" data-wow-delay=".3s">
                            {/* <p>{data.subtitle}</p> */}
                            <h3 style={{color:'white'}}>{data.title}</h3>
                            <small className="center align-center mt-3" style={{color:'white', fontSize:14}} >
                                {data.content}
                            </small>
                            <div className="item card mt-4 homeItem" style={{background:'#fafafaf0'}} >
                                <div className="container  ">
                                  {/*   <div className="row">
                                        <div className="col-12 center p-2">
                                        <h6> Quale consulente stai cercando</h6>

                                        </div>

                                    </div> */}

                                    <div className="row p-4" style={{height:'100%', marginTop:0}}>
                                        <div className="col-lg-4 col-md-12 center  " style={{flexDirection:'row',alignItems: 'center', justifyContent:'center'}}>


                                        <FormControl variant="filled" >

                                            <Select
                                                native
                                                variant="outlined"

                                                inputProps={{
                                                    name: 'age',
                                                    id: 'filled-age-native-simple',
                                                }}
                                                style={{ width:'100%'}}


                                                >
                                                    <option aria-label="None" value="" disabled defaultValue default>Seleziona consulente</option>
                                                    <option value={'Consulente Finanziario'}>Consulente Finanziario</option>
                                                    <option value={'Consulente Assicurativo'}>Consulente Assicurativo</option>
                                                    <option value={'Consulente del Credito'}>Consulente del Credito</option>
                                            </Select>
                                        </FormControl>
                                        </div>
                                        <div className="col-lg-4 col-md-12 center marginProv   " style={{flexDirection:'row',alignItems: 'center', justifyContent:'center'}}>

                                            <Autocomplete
                                                id="combo-box-demo"
                                                options={top100Films}
                                                getOptionLabel={(option) => option.title}
                                                style={{padding:0, width:'100%'}}
                                                className="ml-2 "
                                                variant="outlined"

                                                renderInput={(params) => <TextField      variant="outlined" {...params} label="Provincia"  style={{padding:0}} />}
                                            />





                                        </div>
                                        <div className="col-lg-4 col-md-12 center">
                                  {/*       <ButtonSignUp></ButtonSignUp> */}
                                        <button className="btn-style" onClick={goToRequest}>
                                            <span>Inizia Richiesta</span>
                                        </button>

                                        </div>


                                    </div>




                                </div>

                            </div>

                            {/* <ul className="d-flex">
                                <li>
                                    <ButtonSignUp></ButtonSignUp>
                                    <button className="btn-style mt-4" onClick={handleClick}>
                                        <span>consulente?</span>
                                    </button>
                                </li>
                                <li>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="LCmsrVOXzZc" onClose={() => setOpen(false)} />
                                     <Link to="#!" className="special-btn d-flex align-items-center" onClick={()=>{setOpen(true)}}>
                                        <div className="vid-btn">
                                            <span className="btn-inner"><i className="fas fa-play"></i></span>
                                        </div>
                                        How we work
                                    </Link>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
                <span className="line line4"></span>
            </div>
        </section>
        {/* <!-- end banner area --> */}

        </>

    )
}
const top100Films = [

{"title":"Agrigento"},
{"title":"Alessandria"},
{"title":"Ancona"},
{"title":"Aosta"},
{"title":"Arezzo"},
{"title":"Ascoli Piceno"},
{"title":"Asti"},
{"title":"Avellino"},
{"title":"Bari"},
{"title":"Barletta-Andria-Trani"},
{"title":"Belluno"},
{"title":"Benevento"},
{"title":"Bergamo"},
{"title":"Biella"},
{"title":"Bologna"},
{"title":"Bolzano"},
{"title":"Brescia"},
{"title":"Brindisi"},
{"title":"Cagliari"},
{"title":"Caltanissetta"},
{"title":"Campobasso"},
{"title":"Carbonia-Iglesias"},
{"title":"Caserta"},
{"title":"Catania"},
{"title":"Catanzaro"},
{"title":"Chieti"},
{"title":"Como"},
{"title":"Cosenza"},
{"title":"Cremona"},
{"title":"Crotone"},
{"title":"Cuneo"},
{"title":"Enna"},
{"title":"Fermo"},
{"title":"Ferrara"},
{"title":"Firenze"},
{"title":"Foggia"},
{"title":"Forlì-Cesena"},
{"title":"Frosinone"},
{"title":"Genova"},
{"title":"Gorizia"},
{"title":"Grosseto"},
{"title":"Imperia"},
{"title":"Isernia"},
{"title":"La Spezia"},
{"title":"L Aquila"},
{"title":"Latina"},
{"title":"Lecce"},
{"title":"Lecco"},
{"title":"Livorno"},
{"title":"Lodi"},
{"title":"Lucca"},
{"title":"Macerata"},
{"title":"Mantova"},
{"title":"Massa-Carrara"},
{"title":"Matera"},
{"title":"Messina"},
{"title":"Milano"},
{"title":"Modena"},
{"title":"Monza e della Brianza"},
{"title":"Napoli"},
{"title":"Novara"},
{"title":"Nuoro"},
{"title":"Olbia-Tempio"},
{"title":"Oristano"},
{"title":"Padova"},
{"title":"Palermo"},
{"title":"Parma"},
{"title":"Pavia"},
{"title":"Perugia"},
{"title":"Pesaro e Urbino"},
{"title":"Pescara"},
{"title":"Piacenza"},
{"title":"Pisa"},
{"title":"Pistoia"},
{"title":"Pordenone"},
{"title":"Potenza"},
{"title":"Prato"},
{"title":"Ragusa"},
{"title":"Ravenna"},
{"title":"Reggio Calabria"},
{"title":"Reggio Emilia"},
{"title":"Rieti"},
{"title":"Rimini"},
{"title":"Roma"},
{"title":"Rovigo"},
{"title":"Salerno"},
{"title":"Medio Campidano"},
{"title":"Sassari"},
{"title":"Savona"},
{"title":"Siena"},
{"title":"Siracusa"},
{"title":"Sondrio"},
{"title":"Taranto"},
{"title":"Teramo"},
{"title":"Terni"},
{"title":"Torino"},
{"title":"Ogliastra"},
{"title":"Trapani"},
{"title":"Trento"},
{"title":"Treviso"},
{"title":"Trieste"},
{"title":"Udine"},
{"title":"Varese"},
{"title":"Venezia"},
{"title":"Verbano-Cusio-Ossola"},
{"title":"Vercelli"},
{"title":"Verona"},
{"title":"Vibo Valentia"},
{"title":"Vicenza"},
{"title":"Viterbo"}

  ];

export default Hero;