import React,{useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import BlogDetailsInner from '../components/blog-components/BlogDetails'
import HeaderV3 from '../components/section-components/Header-v3';
import { sectionData } from './../data/section.json';

const BlogDetails = () => {
    let data = sectionData.sectionTitle;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
       <Layouts  pageTitle="Blog Details">
           <HeaderV3  background={data.singleBlog.background} title={data.singleBlog.title} pageName={data.singleBlog.pageName}  />
           <BlogDetailsInner/>
           <Connect />
           <Footer />
       </Layouts>
    );
}

export default BlogDetails;
