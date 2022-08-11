import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./assets/css/main.css";
import Authentication from "./components/Authentication";
import IndexHeader from "./components/IndexHeader";
import IndexMajor from "./components/IndexMajor";
import IndexPosts from "./components/IndexPosts";
import IndexSection from "./components/IndexSection";
import ModuleHeader from "./components/ModuleHeader";
import NotableTitle from "./components/NotableTitle";
import NotesMain from "./components/NotesMain";
import Profile from "./components/Profile";
import ProfileHeader from "./components/ProfileHeader";
import Sidebar from "./components/Sidebar";
import UploadFile from "./components/UploadFile";
import SetUp from "./components/SetUp";
import { useEffect, useState } from "react";

import {
  browserSessionPersistence,
  getAuth,
  onAuthStateChanged,
  setPersistence,
} from "firebase/auth";

function App() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const auth = getAuth();
  const location = useLocation();

  setPersistence(auth, browserSessionPersistence).then(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && !login) {
        setLogin(true);
        navigate("/");
      } else if (!user && !location.pathname.includes("/authentication")) {
        navigate("/authentication");
      }
    });
  });
  /**
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    
    var user = auth.currentUser;
    console.log(user);
    if (user) {
      setLogin(true);
      navigate("/");
    } else {
      navigate("/authentication");
    }
  }, login);
  */

  return (
    <div className="App">
      <NotableTitle />
      <body className="is-preload">
        <div id="wrapper">
          <div id="main">
            <div className="inner">
              <IndexHeader />

              <Routes>
                <Route path="/upload" element={<UploadFile />} />
                <Route path="/authentication" element={<Authentication />} />
                <Route path="/module/*" element={<ModuleHeader module="" />} />
                <Route path="/notes/*" element={<IndexSection />} />
                <Route path="/setUp/*" element={<ProfileHeader />} />
                <Route path="/profile/*" element={<ProfileHeader />} />
                <Route path="/" element={<IndexSection />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>

              <Routes>
                <Route
                  path="/module/*"
                  element={<IndexMajor text="Search Results:" />}
                />
                <Route
                  path="/"
                  element={<IndexMajor text="Newest Uploads" />}
                />
                <Route path="*" />
              </Routes>
              <Routes>
                <Route path="/module/*" element={<IndexPosts />} />
                <Route path="/notes/*" element={<NotesMain />} />
                <Route path="/setUp/*" element={<SetUp />} />
                <Route path="/profile/*" element={<Profile />} />
                <Route path="/" element={<IndexPosts />} />
                <Route path="*" />
              </Routes>
            </div>
          </div>
          <Sidebar />
        </div>
      </body>
    </div>
  );
}

export default App;
