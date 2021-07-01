import React,{useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import BlogDetailsInner from '../components/blog-components/BlogDetails'
import HeaderV3 from '../components/section-components/Header-v3';
import { sectionData } from './../data/section.json';

const BlogDetails = (props) => {
    let dati = props.location.state.dati
    let data = sectionData.sectionTitle;

    useEffect(() => {
        window.scrollTo(0,0);
        console.log(dati)
}, [])
    return (
       <Layouts  pageTitle="Blog Details">
           <HeaderV3  background={data.singleBlog.background} title={dati.nome} pageName={dati.nomeConsulente}  />
           <BlogDetailsInner dati={dati}/>
           <Connect />
           <Footer />
       </Layouts>
    );
}

export default BlogDetails;
