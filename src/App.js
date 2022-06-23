import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase-config";
import "./assets/css/main.css";
import Authentication from "./components/Authentication";
import IndexHeader from "./components/IndexHeader";
import IndexMajor from "./components/IndexMajor";
import IndexPosts from "./components/IndexPosts";
import IndexSection from './components/IndexSection';
import ModuleHeader from './components/ModuleHeader';
import NotableTitle from './components/NotableTitle';
import NotesMain from "./components/NotesMain";
import Sidebar from './components/Sidebar';
import UploadFile from "./components/UploadFile";


function App() {
  
  

  return (

    <div className="App">
      <NotableTitle />
      <body class="is-preload">
        <div id="wrapper">
          <div id="main">
          
            <IndexHeader />
            <Router>
              <Routes>
                <Route path="/upload" element={ <UploadFile />} /> 
                <Route path="/authentication" element={ <Authentication />}/>
                <Route path="/" element={ <IndexSection /> } />
                <Route path="/module" element={ <ModuleHeader module="CS2040S"/>} />

              </Routes>

              <Routes>
                <Route path="/" element={ <IndexMajor text="Newest Uploads" />} />
                
                <Route path="/module" element={ <IndexMajor text="Highly-Rated Notes"/>} />
              </Routes>
              <Routes>
                <Route path="/" element={ <IndexPosts /> } />
                <Route path="/module" element= { <IndexPosts /> } />
                <Route path="/notes" element={ <NotesMain /> } />
              </Routes>
            </Router>
          </div>
          <Sidebar />
        </div>
        
        
        
      </body>
    </div>
  );
  /*
  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/browser.min.js"></script>
  <script src="assets/js/breakpoints.min.js"></script>
  <script src="assets/js/util.js"></script>
  <script src="assets/js/main.js"></script>
  */
}

export default App;
