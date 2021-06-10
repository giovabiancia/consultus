import React,{useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import HeaderV3 from '../components/section-components/Header-v3';
import ProjectV2 from '../components/section-components/Project-v2';
import { sectionData } from './../data/section.json';


const ProjectPage = () => {
    let data = sectionData.sectionTitle;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <>
            <Layouts pageTitle='Project'>
                <HeaderV3  background={data.project.background} title={data.project.title} pageName={data.project.pageName}/>
                <ProjectV2 />
                <Connect />
                <Footer />
            </Layouts>
        </>
    );
}

export default ProjectPage;
