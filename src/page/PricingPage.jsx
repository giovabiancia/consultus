import React,{useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import HeaderV3 from '../components/section-components/Header-v3';
import Pricing from '../components/section-components/Pricing';
import { sectionData } from './../data/section.json';
import { Helmet } from "react-helmet";

const PricingPage = () => {
    let data = sectionData.sectionTitle;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <>
             <Layouts  pageTitle='Pricing Page'>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Pricing | ProntoConsulenti</title>
                <meta
                    name="description"
                    content="Confronta i migliori consulenti finanziari, assicurativi e fiscali presenti sulla nostra piattaforma e scegli quello che fa per te  "
                />
            </Helmet>

                <HeaderV3 background={data.pricing.background} title={data.pricing.title} pageName={data.pricing.pageName} />
                <Pricing />
                <Connect />
                <Footer />
             </Layouts>

        </>
    );
}

export default PricingPage;
