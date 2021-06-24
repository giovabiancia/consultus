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
const TeamDetailsInnerv2 = () => {
    let data = sectionData.teamDetails;
    const auth = useAuthentication()
    const [profilo, setProfilo] = useContext(ProfileContext);
    const [competenze, setCompetenze]= useState([])



    return (
        <>
                {/* <!-- start team details area --> */}
    <section className="team-detail pt-120">
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4">

                    <button className="button btn btn-danger" onClick={auth.logout}>Logout</button>

                </div>
                <div className="col-lg-8">
                    <h4> Il tuo profilo </h4>

                </div>


            </div>
        </div>
    </section>
    {/* <!-- end team details area --> */}

        </>
    );
}

export default TeamDetailsInnerv2;
