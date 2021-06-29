import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase.js";
import { useAuthentication } from "./../hooks/useAuthentication";

export const RisultatiContext = createContext();

export const RisultatiProvider = (props) => {
  const [consulenti, setConsulenti] = useState([]);
  const auth = useAuthentication();

  useEffect(() => {
    let firestoreCall;

    firestoreCall = firebase
      .firestore()
      .collection("consulenti")

      .onSnapshot((snapshot) => {
        const newRichieste = snapshot.docs.map((richiesta) => ({
          id: richiesta.id,
          ...richiesta.data(),
        }));
        console.log(newRichieste);

        setConsulenti(newRichieste);
      });
    console.log("hey");

    return () => firestoreCall?.();
  }, []);

  return (
    <RisultatiContext.Provider value={[consulenti, setConsulenti]}>
      {props.children}
    </RisultatiContext.Provider>
  );
};
