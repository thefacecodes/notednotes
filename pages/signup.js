import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import SigninAuth from "../components/SigninAuth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import Router, { useRouter } from "next/router";
import { NotesContext } from "../components/AppContext";

function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(NotesContext);

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "USER_ACTIVE", payload: user });
        dispatch({
          type: "openModal",
          payload: "Account created successfully",
        });
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const myError = errorMessage.replace("Firebase", "Note.d");
        dispatch({ type: "openModal", payload: myError });
        console.log(error.message);
        // ..
      });
  };

  useEffect(() => {
    if (state.isAuthenticated) {
      Router.push("/dashboard");
    }
  }, [state.isAuthenticated]);

  return (
    <div className="signin">
      <form onSubmit={signUp}>
        <h1 className="text-[30px] mb-8 font-semibold font-clash">Sign up</h1>
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
          Sign up
        </button>
        <SigninAuth />
        <p className="mt-4 text-center font-clash">
          Already have an account ?{" "}
          <Link className="text-[#667085]" href="/signin">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default signup;
