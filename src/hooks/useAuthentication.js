import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
var FacebookProvider = new firebase.auth.FacebookAuthProvider();

export function useAuthentication() {
  const [authenticated, setAuthenticated] = useState("");
  const [error, setError] = useState("");
  function login() {
    auth.signInWithPopup(provider);
  }
  function logout() {
    auth.signOut().then(function (error) {
      alert(error);
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
      .catch((error) => alert(error));
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
        setError(true);
        alert(error);
      }
    );
  }, []);
  return {
    login,
    logout,
    error,
    fbLogin,
    signUpEmail,
    signInEmail,
    loggedIn: authenticated,
  };
}
