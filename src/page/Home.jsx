import React, { Component } from 'react';
import ScrollTop from '../components/global-components/BackToTop';
import Footer from '../components/global-components/Footer';
import About from '../components/section-components/About';
import Client from '../components/section-components/Client';
import Count from '../components/section-components/Count';
import Connect from '../components/section-components/Connect';
import News from '../components/section-components/New';
import Offer from '../components/section-components/Offer';
import Partner from '../components/section-components/Partner';
import Project from '../components/section-components/Project';
import Service from '../components/section-components/Service';
import Team from '../components/section-components/Team';
import Layouts from './../components/global-components/Layouts';
import Header from '../components/section-components/Header';

class Home extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
   render(){ 
       return(
           <Layouts pageTitle='Home'>
               <Header />
               <Offer />
               <Count />
               <About />
               <Service />
               <Team />
               <Project />
               <Client />
               <Partner />
               <News />
               <Connect />
               <Footer />
               <ScrollTop />
           </Layouts>
       )
   }
   
        
      
    
}
export default Home;