import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  }, []);

  const auth = getAuth();

  const register = () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        navigate("/");
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((response) => {
        // Signed in
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.freshToken
        );
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        const errorMessage = error.message;
      });
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div>
        <div>
          <h2>First time here?</h2>
          <h2>Register New User below:</h2>
          <input
            placeholder="Email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <button onClick={register}> Create User</button>
        </div>

        <div>
          <h2>Sign in:</h2>
          <input
            placeholder="Email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button onClick={login}> Sign in</button>
        </div>
      </div>

      <div>
        <h4> User Logged In: </h4>
        {user?.email}
        <button onClick={logout}> Sign Out </button>
      </div>
    </div>
  );
}

export default Authentication;
