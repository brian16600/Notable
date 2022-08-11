import defaultPic from "./images/defaultprofilepic.jpg";
import { db } from "../firebase-config";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Profile() {
  const [profile, setProfile] = useState([]);
  const auth = getAuth();
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const userId = user.uid;
      const usersRef = collection(db, "users");
      const q = query(usersRef);
      const arr = new Array();
      onSnapshot(q, (snapshot) => {
        for (let i = 0; i < snapshot.docs.length; i++) {
          const doc = snapshot.docs[i];
          const docUid = doc.get("uid");
          if (docUid === userId) {
            arr.push({ ...doc.data() });
          }
        }
        setProfile(arr);
        if (arr.length < 1) {
          navigate("/setUp");
        }
      });
    }
  }, [profile]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/authentication");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="profile">
      <div class="space-top">
        <span class="image left">
          <img src={defaultPic}></img>
          <table class="alt">
            <tbody>
              {profile.map(({ name, course, yearOfStudy, bio, createdAt }) => (
                <>
                  <tr>
                    <td>Name:</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td>Course:</td>
                    <td>{course}</td>
                  </tr>
                  <tr>
                    <td>Year Of Study:</td>
                    <td>{yearOfStudy}</td>
                  </tr>
                  <tr>
                    <td>About Me:</td>
                    <td>{bio}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </span>
      </div>
      <div class="logout">
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </div>
  );
}

export default Profile;
