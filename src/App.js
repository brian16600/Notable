import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
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
import SetUp from "./components/SetUp";
import { getAuth } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebase-config";
import { useEffect, useState } from "react";

function App() {
  const auth = getAuth();
  const navigate = useNavigate();

  const userRef = collection(db, "users");
  const q = query(userRef, orderBy("uid"));
  const [registeredUser, setRegisteredUser] = useState(false);

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      const user = auth.currentUser;
      const userId = user.uid;
      onSnapshot(q, (snapshot) => {
        for (let i = 0; i < snapshot.docs.length; i++) {
          const doc = snapshot.docs[i];
          const docUid = doc.get("uid");
          if (docUid === userId) {
            setRegisteredUser(true);
          }
        }
      });
      console.log(registeredUser);
      registeredUser ? navigate("/") : navigate("/setUp");
      //navigate("/");
    } else {
      navigate("/authentication");
    }
  }, [registeredUser]);

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
                <Route path="/setUp/*" element={<IndexSection />} />
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
              </Routes>
              <Routes>
                <Route path="/module/*" element={<IndexPosts />} />
                <Route path="/notes/*" element={<NotesMain />} />
                <Route path="/setUp/*" element={<SetUp />} />
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
