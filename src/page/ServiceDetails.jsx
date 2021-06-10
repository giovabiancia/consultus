import React,{useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import HeaderV3 from '../components/section-components/Header-v3';
import ServiceDetailsInner from '../components/Service-components/Service-details';
import { sectionData } from './../data/section.json';

const ServiceDetails = () => {
    const data = sectionData.sectionTitle
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <>
            <Layouts  pageTitle='Service Details'>
                <HeaderV3 background={data.serviceDetails.background} title={data.serviceDetails.title} pageName={data.serviceDetails.pageName} />
                <ServiceDetailsInner />
                <Connect />
                <Footer />
            </Layouts>
        </>
    );
}

export default ServiceDetails;
