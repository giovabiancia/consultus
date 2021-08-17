import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase.js";
import { useAuthentication } from "./../hooks/useAuthentication";

export const SubscriptionContext = createContext();

export const SubscriptionProvider = (props) => {
  const [abbonamento, setAbbonamento] = useState(false);
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
          snapshot.forEach((document) => {
            document.ref
              .collection("subscriptions")
              .onSnapshot((querySnapshot) => {
                if (!querySnapshot.empty) {
                  const newRichieste = querySnapshot.docs.map((richiesta) => ({
                    id: richiesta.id,
                    ...richiesta.data(),
                  }));
                  console.log(newRichieste[0].status);
                  setAbbonamento(newRichieste[0].status);
                }

                return;
              });
          });
        });
    }

    return () => firestoreCall?.();
  }, [auth.loggedIn]);

  return (
    <SubscriptionContext.Provider value={[abbonamento, setAbbonamento]}>
      {props.children}
    </SubscriptionContext.Provider>
  );
};
