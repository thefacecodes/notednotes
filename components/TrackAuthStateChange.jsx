import React, { useContext, useEffect } from "react";
import { NotesContext } from "./AppContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Modal from "./Modal";

function TrackAuthStateChange() {
  const { state, dispatch } = useContext(NotesContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        dispatch({ type: "USER_ACTIVE", payload: user });
        // ...
      } else {
        // User is signed out
        dispatch({ type: "NO_USER" });
        // ...
      }
    });
  });

  return <>{state.modalOpen && <Modal />}</>;
}

export default TrackAuthStateChange;
