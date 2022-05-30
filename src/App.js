import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/css/main.css';
import IndexActions from './components/IndexActions'
import IndexForm from './components/IndexForm'
import IndexHeader from './components/IndexHeader'
import IndexInput from './components/IndexInput'
import IndexMajor from './components/IndexMajor'
import IndexMenu from './components/IndexMenu'
import IndexMiniPosts from './components/IndexMiniPosts'
import IndexPosts from './components/IndexPosts'
import IndexSection from './components/IndexSection'
import IndexTopContributors from './components/IndexTopContributors'
import NotableTitle from './components/NotableTitle'
import Sidebar from './components/Sidebar'
import { useState } from "react";
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut,} from 'firebase/auth';
import {auth} from './firebase-config';

function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (

      <div className="App">
        <NotableTitle />
        <body class="is-preload">
          <div id="wrapper">
            <div id="main">
            <div>
              <div>
                <h3> Register New User </h3>
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
                <h3> Sign in </h3>
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

              <IndexHeader />
              <IndexSection />
              <IndexMajor />
              <IndexPosts />
            </div>
            <Sidebar />
          </div>
          <script src="assets/js/jquery.min.js"></script>
    			<script src="assets/js/browser.min.js"></script>
    			<script src="assets/js/breakpoints.min.js"></script>
    			<script src="assets/js/util.js"></script>
    			<script src="assets/js/main.js"></script>
        </body>
      </div>
  );
}

export default App;
