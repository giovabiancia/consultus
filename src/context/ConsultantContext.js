import React, { createContext, useState } from "react";

export const ConsultantContext = createContext();

export const ConsultantProvider = (props) => {
  const [request, setConsultant] = useState({
    activeStep: 0,
    nome: "",
    cognome: "",
    email: "",
    certificato: "",
    anni: "",
    patrimonio: "",
    titoloStudio: "",
    banca: "",
    esperienza: "",
    specializzazione: "",
    competenze: [],
    about: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    indirizzo: "",
    portafoglio: "",
    fondoPensione: "",
    rischio: 0,
    fotoURL: "",
    progress: 0,

    error: false,

    open: false,
  });

  return (
    <ConsultantContext.Provider value={[request, setConsultant]}>
      {props.children}
    </ConsultantContext.Provider>
  );
};
