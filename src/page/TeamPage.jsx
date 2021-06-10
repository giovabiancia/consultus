import React,{useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import HeaderV3 from '../components/section-components/Header-v3';
import Team from '../components/section-components/Team';
import { sectionData } from './../data/section.json';

const TeamPage = () => {
    let data = sectionData.sectionTitle;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <>
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
