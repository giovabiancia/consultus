import React, { useContext, useState, useEffect } from "react";
import SingleMemberInfo from './SingleMember';
import { sectionData } from './../../data/section.json';
import { useAuthentication } from '../../hooks/useAuthentication';
import { ProfileContext } from '../../context/ProfileContext';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import SecurityIcon from '@material-ui/icons/Security';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import ComputerIcon from '@material-ui/icons/Computer';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import TimelineIcon from '@material-ui/icons/TrendingUp';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import BlogCarousel from "../section-components/BlogCarousel";
const ComponentProfiloConsulente = () => {
    let data = sectionData.teamDetails;
    const auth = useAuthentication()
    const [profilo, setProfilo] = useContext(ProfileContext);
    const [competenze, setCompetenze]= useState([])

    useEffect(() => {
        let array = []
        profilo.competenze.map((i)=>{
            let title = i.title
            array.push(title)
        })
        setCompetenze(array)

    }, [])


    return (
        <>
                {/* <!-- start team details area --> */}
    <section className="team-detail pt-120">
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4">
                    <SingleMemberInfo profilo={profilo} />


                </div>


                <div className="col-lg-8">

                    <div className="team-inner ">
                    <div className="single-item mb-4"  style={{marginTop:60}}>
                            <div className="item-title">
                                <h4>Profilo Professionale</h4>

                            </div>
                            <p>
                                {profilo.about}
                            </p>

                        </div>

                        <div className="single-item mt-30 " >
                            <div className="item-title">
                                <h4>Su di me</h4>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <h6>Società</h6>
                                    <p>{profilo.banca}</p>
                                </div>
                                <div className="col-4">
                                    <h6>Capitale Gestito</h6>
                                    <p> € {profilo.patrimonio}</p>
                                </div>
                                <div className="col-4">
                                    <h6>Dove Opero</h6>
                                    <p> {profilo.indirizzo}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <h6>Titolo di studio</h6>
                                    <p>{profilo.titoloStudio}</p>
                                </div>
                                <div className="col-4">
                                    <h6>Età</h6>
                                    <p>{profilo.anni} anni</p>
                                </div>
                                <div className="col-4">
                                    <h6>Anni di esperienza</h6>
                                    <p> {profilo.esperienza} anni</p>
                                </div>
                            </div>
                                 </div>
                         <div className="single-item mb-4 " style={{marginTop:60}} >
                            <div className="item-title">
                                <h4>Competenze Principali</h4>

                            </div>

                            <div className="row">
                                <div className="col-4 mt-4">
                                <div class="center">
                                    {competenze.includes('Analisi Strumenti finanziari')?<FindInPageIcon fontSize="large"  style={{ color: '#3D58E4'}}></FindInPageIcon>:<FindInPageIcon fontSize="large" ></FindInPageIcon> }


                                <small>Analisi Strumenti finanziari</small>

                            </div>
                            <div class="center mt-4">
                            {competenze.includes('Trading Online')?<ComputerIcon fontSize="large"  style={{ color: '#3D58E4'}}></ComputerIcon>:<ComputerIcon fontSize="large" ></ComputerIcon> }

                                <small>Trading Online</small>

                            </div>
                            <div class="center mt-4">
                            {competenze.includes('Gestione patrimoniale')?<TimelineIcon fontSize="large"  style={{ color: '#3D58E4'}}></TimelineIcon>:<TimelineIcon fontSize="large" ></TimelineIcon> }


                                <small>Gestione Patrimoniale</small>

                            </div>

                                </div>

                                <div className="col-4">
                                <div class="center mt-4">
                                {competenze.includes('Pianificazione finanziaria')?<AssessmentIcon fontSize="large"  style={{ color: '#3D58E4'}}></AssessmentIcon>:<AssessmentIcon fontSize="large" ></AssessmentIcon> }


                                <small>Pianificazione Finanziaria</small>

                            </div>
                            <div class="center mt-4">
                            {competenze.includes('Ottimizzazione portafoglio di investimento')?<AccountBalanceWalletIcon fontSize="large"  style={{ color: '#3D58E4'}}></AccountBalanceWalletIcon>:<AccountBalanceWalletIcon fontSize="large" ></AccountBalanceWalletIcon> }

                                <small>Ottimizzazione portafoglio</small>

                            </div>
                            <div class="center mt-4">
                            {competenze.includes('Consulenza Assicurativa')?<SecurityIcon fontSize="large"  style={{ color: '#3D58E4'}}></SecurityIcon>:<SecurityIcon fontSize="large" ></SecurityIcon> }


                                <small>Consulenza Assicurativa</small>

                            </div>

                                </div>
                                <div className="col-4 mt-4">
                                <div class="center">
                                {competenze.includes('Pianificazione Pensionistica')?<LocalAtmIcon fontSize="large"  style={{ color: '#3D58E4'}}></LocalAtmIcon>:<LocalAtmIcon fontSize="large" ></LocalAtmIcon> }


                                <small>Pianificazione Pensionistica</small>

                            </div>
                            <div class="center mt-4">
                            {competenze.includes('Consulenza sul credito')?<WorkOutlineIcon fontSize="large"  style={{ color: '#3D58E4'}}></WorkOutlineIcon>:<WorkOutlineIcon fontSize="large" ></WorkOutlineIcon> }


                                <small>Consulenza sul credito</small>

                            </div>

                            <div class="center mt-4">
                            {competenze.includes('Asset allocation')?<EqualizerIcon fontSize="large"  style={{ color: '#3D58E4'}}></EqualizerIcon>:<EqualizerIcon fontSize="large" ></EqualizerIcon> }

                                <small>Asset Allocation</small>

                            </div>

                                </div>

                            </div>

                        </div>

                       {/*  <div className="single-item " style={{marginTop:60}}>
                            <div className="item-title">
                                <h4>Esperienza e riconoscimenti</h4>
                            </div>
                            <table className="table table-responsive" style={{width: "100%"}}>
                                <thead>
                                    <tr>
                                        <th scope="col" style={{width: "25%"}}>
                                            <p>year</p>
                                        </th>
                                        <th scope="col" style={{width: "30%"}}>
                                            <p>department</p>
                                        </th>
                                        <th scope="col" style={{width: "25%"}}>
                                            <p>position</p>
                                        </th>
                                        <th scope="col" style={{width: "20%"}}>
                                            <p>company</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data.experienceInfo.singleExp.map((item, i)=>{
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <p>{item.year}</p>
                                                </td>
                                                <td>
                                                    <p>{item.department}</p>
                                                </td>
                                                <td>
                                                    <p>{item.position}</p>
                                                </td>
                                                <td>
                                                    <p>{item.company}</p>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div> */}

                    </div>
                </div>
            </div>

        </div>
        <BlogCarousel consulente={profilo}></BlogCarousel>
    </section>
    {/* <!-- end team details area --> */}

        </>
    );
}

export default ComponentProfiloConsulente;
