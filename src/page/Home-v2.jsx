import React, { Component } from 'react'
import Footer from '../components/global-components/Footer'
import Layouts from '../components/global-components/Layouts'
import AboutV2 from '../components/section-components/About-v2'
import ClientV2 from '../components/section-components/Client-v2'
import Connect from '../components/section-components/Connect'
import Contact from '../components/section-components/Contact'
import CountV2 from '../components/section-components/Count-v2'
import HeaderV2 from '../components/section-components/Header-v2'
import News from '../components/section-components/New'
import NewsLetter from '../components/section-components/NewsLetter'
import Partner from '../components/section-components/Partner'
import Pricing from '../components/section-components/Pricing'
import ProjectV2 from '../components/section-components/Project-v2'
import ServiceV2 from '../components/section-components/Service-v2'

export default class HomeV2 extends Component {
    componentDidMount(){
        
            window.scrollTo(0,0);
 
    }
    render() {
        return (
            <Layouts pageTitle='Home-v2'>
                <HeaderV2 />
                <AboutV2 />
                <NewsLetter />
                <ServiceV2 />
                <ProjectV2 />
                <Pricing />
                <ClientV2 />
                <CountV2 />
                <Contact />
                <Partner />
                <News />
                <Connect />
                <Footer />
            </Layouts>
        )
    }
}
