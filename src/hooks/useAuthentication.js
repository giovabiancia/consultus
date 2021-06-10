import { useEffect, useState } from "react";
import firebase from "../firebase";

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
var FacebookProvider = new firebase.auth.FacebookAuthProvider();

export function useAuthentication() {
  const [authenticated, setAuthenticated] = useState("loading");
  const [error, setError] = useState("loading");
  function login() {
    auth.signInWithPopup(provider);
  }
  function logout() {
    auth.signOut().then(function (error) {
      console.log("error");
    });
  }
  function signInEmail(email, pwd) {
    auth.signInWithEmailAndPassword(email, pwd).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
  }
  function signUpEmail(name, email, pwd) {
    auth
      .createUserWithEmailAndPassword(email, pwd)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => console.log(error));
  }
  function fbLogin() {
    auth.signInWithPopup(FacebookProvider);
  }

  useEffect(() => {
    auth.onAuthStateChanged(
      function (user) {
        if (user) {
          setAuthenticated(user);
        } else {
          setAuthenticated();
        }
      },
      function (error) {
        console.log("error");
      }
    );
  }, []);
  return {
    login,
    logout,
    fbLogin,
    signUpEmail,
    signInEmail,
    loggedIn: authenticated,
  };
}
