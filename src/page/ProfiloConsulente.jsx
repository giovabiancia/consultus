import React,{useEffect, useContext, useState} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import HeaderV3 from '../components/section-components/Header-v4';
import Team from '../components/section-components/Team';
import Consulente from '../components/team-components/ComponentConsulente';
import TeamDetailsInnerv2 from '../components/team-components/ComponentProfiloUtente';
import { ProfileContext } from '../context/ProfileContext';
import { sectionData } from '../data/section.json';
import { useAuthentication } from '../hooks/useAuthentication';



const ProfiloConsulente = (props) => {
    const auth = useAuthentication()
    const [profilo, setProfilo] = useState(props.location.state)
    let data = sectionData.sectionTitle;
    useEffect(() => {
        window.scrollTo(0,0);
        console.log(profilo)
}, [])
    return (
        <>
            <Layouts  pageTitle='Team Details'>
                <HeaderV3 background={data.teamDetails.background}  title={profilo.nome+ profilo.cognome}   />

                {/* distinguo tra profilo consulente e profilo normale */}
                  <Consulente profilo={profilo} />


            {/*   <Team /> */}
            {/*     <Connect />
                <Footer /> */}
            </Layouts>
        </>
    );
}

export default ProfiloConsulente;
