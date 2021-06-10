import React,{useEffect} from 'react';
import Layouts from '../components/global-components/Layouts';
import HeaderV3 from '../components/section-components/Header-v3';
import { sectionData } from './../data/section.json';
import Footer from '../components/global-components/Footer';
import ScrollTop from '../components/global-components/BackToTop';
import ServiceV2 from '../components/section-components/Service-v2';
import Connect from '../components/section-components/Connect';

const ServicePage = () => {
    const data = sectionData.sectionTitle
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <>
            <Layouts pageTitle='Service'>
                <HeaderV3 background={data.service.background} title={data.service.title} pageName={data.service.pageName} />
                <ServiceV2 />
                <Connect />
                <Footer />
                <ScrollTop />
            </Layouts>
        </>
    );
}

export default ServicePage;
