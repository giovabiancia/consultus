import React,{useEffect, useContext, useState} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import HeaderV3 from '../components/section-components/Header-v4';
import Team from '../components/section-components/Team';
import Consulente from '../components/team-components/ComponentConsulente';
import TeamDetailsInnerv2 from '../components/team-components/ComponentProfiloUtente';
import { ProfileContext } from '../context/ProfileContext';
import { RisultatiContext } from '../context/RisultatiContext';
import { sectionData } from '../data/section.json';
import { useAuthentication } from '../hooks/useAuthentication';

import firebase from '../firebase'



const ProfiloConsulente = (props) => {

    const [consulenti, setConsulenti] = useContext(RisultatiContext)

    const auth = useAuthentication()
     const [profilo, setProfilo] = useState([])
    let data = sectionData.sectionTitle;
   /* s */
useEffect(() => {
    const location = window.location.pathname;
    var segment_array = location.split("/");
    var last_segment = segment_array.pop().toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "").replace(/20/g, "-")

    consulenti.map((prof) => {

       let nome = prof.nome
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
       let cognome = prof.cognome
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
        let titolo = nome+'-'+cognome
      if (titolo == last_segment) {
        setProfilo(prof);

      }
    });

  }, [consulenti]);
  useEffect(() => {
    window.scrollTo(0,0);
    console.log('hei')
     const db = firebase.firestore();
   /*  const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('consulenti').doc(profilo.id);
    storyRef.update({ views: increment }); */






}, [profilo])



    return (
        <>
            <Layouts  pageTitle='Team Details'>
                <HeaderV3 background={data.teamDetails.background}  title={profilo.nome+ profilo.cognome}   />

                {/* distinguo tra profilo consulente e profilo normale */}
                <Consulente profilo={profilo}  />


            {/*   <Team />  */}
             {/*   <Connect /> */}
                <Footer />
            </Layouts>
        </>
    );
}

export default ProfiloConsulente;
