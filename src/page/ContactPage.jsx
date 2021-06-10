import React,{useEffect} from 'react';
import Map from '../components/section-components/Map';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import HeaderV3 from '../components/section-components/Header-v3';
import { sectionData } from './../data/section.json';
import ContactInner from '../components/section-components/ContactInner';

const ContactPage = () => {
    let data = sectionData.sectionTitle;
    let mapData = sectionData.mapDescription;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <Layouts pageTitle="Contact Page">
            <HeaderV3 background={data.contact.background} title={data.contact.title} pageName={data.contact.pageName} />
            <ContactInner />
            <Map let={mapData.let} lng={mapData.lng} zoom={mapData.zoom} mapLetLng={mapData.mapLetLng.center} />
            <Connect />
            <Footer />
        </Layouts>
    );
}

export default ContactPage;
