import React, { createContext, useState, useEffect } from "react";

export const ConsultantStepContext = createContext();

export const ConsultantStepProvider = (props) => {
  const [activeStep, setConsultantStep] = useState(0);

  return (
    <ConsultantStepContext.Provider value={[activeStep, setConsultantStep]}>
      {props.children}
    </ConsultantStepContext.Provider>
  );
};
