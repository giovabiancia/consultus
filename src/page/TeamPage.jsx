import React,{useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import HeaderV3 from '../components/section-components/Header-v3';
import Team from '../components/section-components/Team';
import { sectionData } from './../data/section.json';
import { Helmet } from "react-helmet";


const TeamPage = () => {
    let data = sectionData.sectionTitle;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>I nostri consulenti | ProntoConsulenti</title>
          <meta
            name="description"
            content="Confronta i migliori consulenti finanziari, assicurativi e fiscali presenti sulla nostra piattaforma e scegli quello che fa per te  "
          />
        </Helmet>

            <Layouts  pageTitle='Team'>
                <HeaderV3 background={data.team.background} title={data.team.title} pageName={data.team.pageName} />
                <Team />
                <Connect />
                <Footer />
            </Layouts>
        </>
    );
}

export default TeamPage;
