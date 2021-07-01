import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase.js";
import { useAuthentication } from "./../hooks/useAuthentication";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [blog, setBlog] = useState([]);
  const auth = useAuthentication();

  useEffect(() => {
    let firestoreCall;
    var user = firebase.auth().currentUser;
    if (user) {
      firestoreCall = firebase
        .firestore()
        .collection("blog")
        .onSnapshot((snapshot) => {
          const newRichieste = snapshot.docs.map((richiesta) => ({
            id: richiesta.id,
            ...richiesta.data(),
          }));
          console.log(newRichieste);

          setBlog(newRichieste);
        });
    }

    return () => firestoreCall?.();
  }, [auth.loggedIn]);

  return (
    <BlogContext.Provider value={[blog, setBlog]}>
      {props.children}
    </BlogContext.Provider>
  );
};
