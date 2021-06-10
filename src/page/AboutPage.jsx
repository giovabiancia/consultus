import React,{useEffect} from 'react';
import Layouts from '../components/global-components/Layouts';
import HeaderV3 from '../components/section-components/Header-v3';
import AboutV2 from '../components/section-components/About-v2'
import Count from '../components/section-components/Count';
import { sectionData } from './../data/section.json';
import Service from '../components/section-components/Service';
import Client from '../components/section-components/Client';
import Connect from '../components/section-components/Connect';
import Footer from '../components/global-components/Footer';
import ScrollTop from '../components/global-components/BackToTop';
const AboutPage = () => {
    const data = sectionData.sectionTitle
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <>
            <Layouts pageTitle='Abouts'>
                <HeaderV3 background={data.about.background} title={data.about.title} pageName={data.about.pageName} />
                <AboutV2 />
                <Count />
                <Service />
                <Client />
                <Connect />
                <Footer />
                <ScrollTop />
            </Layouts>
        </>
    );
}

export default AboutPage;
