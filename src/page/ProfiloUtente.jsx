import React,{useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import HeaderV3 from '../components/section-components/Header-v3';
import Team from '../components/section-components/Team';
import TeamDetailsInner from '../components/team-components/Team-details';
import { sectionData } from '../data/section.json';
import { useAuthentication } from '../hooks/useAuthentication';


const ProfiloUtente = () => {
    const auth = useAuthentication()
    let data = sectionData.sectionTitle;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <>
            <Layouts  pageTitle='Team Details'>
                <HeaderV3 background={data.teamDetails.background} title={auth.loggedIn.displayName} pageName={auth.loggedIn.email} />
                <TeamDetailsInner />
            {/*   <Team /> */}
                <Connect />
                <Footer />
            </Layouts>
        </>
    );
}

export default ProfiloUtente;
