import {
  BrowserRouter as Router,
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
import Sidebar from "./components/Sidebar";
import UploadFile from "./components/UploadFile";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

function App() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/");
    } else {
      navigate("/authentication");
    }
  }, []);
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
                <Route path="/" element={<IndexSection />} />
                <Route path="/module/*" element={<ModuleHeader module="" />} />
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
              </Routes>
              <Routes>
                <Route path="/module/*" element={<IndexPosts />} />
                <Route path="/notes/*" element={<NotesMain />} />
                <Route path="/" element={<IndexPosts />} />
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
