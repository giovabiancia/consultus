import React, { createContext, useState, useEffect } from "react";

export const RegistrationStepContext = createContext();

export const RegistrationStepProvider = (props) => {
  const [activeStep, setRegistrationStep] = useState(0);

  return (
    <RegistrationStepContext.Provider value={[activeStep, setRegistrationStep]}>
      {props.children}
    </RegistrationStepContext.Provider>
  );
};
