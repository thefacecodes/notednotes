import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import SigninAuth from "../components/SigninAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import { NotesContext } from "../components/AppContext";
import Router, { useRouter } from "next/router";

function signin() {
  const { state, dispatch } = useContext(NotesContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch({ type: "USER_ACTIVE", payload: user });
        dispatch({ type: "openModal", payload: "Log in success" });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const myError = errorMessage.replace("Firebase", "Note.d");
        dispatch({ type: "openModal", payload: myError });
        console.log(errorMessage);
      });
  };

  useEffect(() => {
    if (state.isAuthenticated) {
      Router.push("/dashboard");
    }
  }, [state.isAuthenticated]);

  return (
    <div className="signin">
      <form onSubmit={signIn}>
        <h1 className="text-[30px] mb-8 font-semibold font-clash">Sign in</h1>
        <label htmlFor="email">Email</label>
        <div className="input">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
          />
        </div>
        <label htmlFor="password">Password</label>
        <div className="input">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
          />
        </div>
        <button
          type="submit"
          className="bg-black my-8 rounded text-white h-[40px]"
        >
          Sign in
        </button>
        <SigninAuth />
        <p className="mt-4 text-center font-clash">
          Have no account ?{" "}
          <Link className="text-[#667085]" href="/signup">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default signin;
