import React, { createContext, useState } from "react";

export const RequestContext = createContext();

export const RequestProvider = (props) => {
  const [request, setRequest] = useState({
    activeStep: 0,
    importoV: false,
    importo: 0,
    investire: false,
    risparmiare: false,
    mutuo: false,
    finanziamento: false,
    migliorareInvestimento: false,
    pensione: false,
    genere: "",
    anni: "",
    indirizzo: "",
    portafoglio: "",
    fondoPensione: "",
    rischio: 0,
    arcoTemporale: "",
    importoFinanziamento: "",
    error: false,
    checked: false,
    ckecked2: true,
    open: false,
  });

  return (
    <RequestContext.Provider value={[request, setRequest]}>
      {props.children}
    </RequestContext.Provider>
  );
};
