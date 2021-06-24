import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase.js";
import { useAuthentication } from "./../hooks/useAuthentication";

export const ProfileContext = createContext();

export const ProfileProvider = (props) => {
  const [profilo, setProfilo] = useState(false);
  const auth = useAuthentication();

  useEffect(() => {
    let firestoreCall;
    var user = firebase.auth().currentUser;
    if (user) {
      firestoreCall = firebase
        .firestore()
        .collection("consulenti")
        .where("uid", "==", user.uid)
        .onSnapshot((snapshot) => {
          const newRichieste = snapshot.docs.map((richiesta) => ({
            id: richiesta.id,
            ...richiesta.data(),
          }));
          console.log(newRichieste[0]);

          setProfilo(newRichieste[0]);
        });
    }

    return () => firestoreCall?.();
  }, [auth.loggedIn]);

  return (
    <ProfileContext.Provider value={[profilo, setProfilo]}>
      {props.children}
    </ProfileContext.Provider>
  );
};
