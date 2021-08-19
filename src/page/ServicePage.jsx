import React,{useEffect} from 'react';
import Layouts from '../components/global-components/Layouts';
import HeaderV3 from '../components/section-components/Header-v3';
import { sectionData } from './../data/section.json';
import Footer from '../components/global-components/Footer';
import ScrollTop from '../components/global-components/BackToTop';
import ServiceV2 from '../components/section-components/Service-v2';
import Connect from '../components/section-components/Connect';
import Count from '../components/section-components/Count-v3'
import { Helmet } from "react-helmet";
const ServicePage = () => {
    const data = sectionData.sectionTitle
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <>
            <Layouts pageTitle='Service'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Scegli ProntoConsulenti   </title>
                    <meta
                        name="description"
                        content="Grazie a ProntoConsulenti potrai trovare nuovi clienti in tutta Italia !"
                    />
                </Helmet>
                <HeaderV3 background={data.service.background} title={data.service.title} pageName={data.service.pageName} />

                <ServiceV2 />
                <Count></Count>

                <Connect />
                <Footer />
                <ScrollTop />
            </Layouts>
        </>
    );
}

export default ServicePage;
