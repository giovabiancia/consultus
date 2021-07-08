import React,{ useState, useContext, useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import BlogDetailsInner from '../components/blog-components/BlogDetails'
import HeaderV3 from '../components/section-components/Header-v3';
import { sectionData } from './../data/section.json';
import { BlogContext } from '../context/BlogContext';

const BlogDetails = (props) => {

    let dati = props.location.state.dati
    let data = sectionData.sectionTitle;
    const [articles] = useContext(BlogContext);
  const [news, setNews] = useState({});
  const [newsSys, setNewsSys] = useState({});
  let imgattr = "image";
  let publicUrl = process.env.PUBLIC_URL + "/";
  let propsData = props.data;


   useEffect(() => {
    const location = window.location.pathname;
    var segment_array = location.split("/");
    var last_segment = segment_array.pop().toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "").replace(/20/g, "-")
    console.log(last_segment)

    articles.map((art) => {

       let titolo = art.nome
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
      if (titolo == last_segment) {
        setNews(art);
        setNewsSys(art.sys);

      }
    });
  }, [articles]);

  useEffect(() => {
    window.scrollTo(0,0);
}, [])


    return (
       <Layouts  pageTitle="Blog Details">
           <HeaderV3  background={data.singleBlog.background} title={dati.nome} pageName={dati.nomeConsulente}  />
           <BlogDetailsInner dati={news}/>
           <Connect />
           <Footer />
       </Layouts>
    );
}

export default BlogDetails;
