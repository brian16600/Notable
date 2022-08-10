import { useState } from "react";

import { getAuth } from "firebase/auth";
import { db } from "../firebase-config";
import { Timestamp, collection, addDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

export default function SetUp() {
  const auth = getAuth();
  const user = auth.currentUser;
  const userId = user.uid;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    yearOfStudy: "",
    course: "",
    createdAt: Timestamp.now().toDate().toISOString().substr(11, 8),
    uid: userId,
  });

  const handleNameChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBioChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleYearOfStudyChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCourseChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePublish = () => {
    if (
      !formData.name ||
      !formData.bio ||
      !formData.course ||
      !formData.yearOfStudy
    ) {
      alert("Please fill all the fields");
      return;
    }
    const usersRef = collection(db, "users");
    addDoc(usersRef, {
      name: formData.name,
      bio: formData.bio,
      yearOfStudy: formData.yearOfStudy,
      course: formData.course,
      uid: formData.uid,
      createdAt: Timestamp.now().toDate(),
    })
      .then(() => {
        alert("Done!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>
        It seems that you don't have a profile yet. Let others know more about
        you!
      </h2>
      <div class="upload">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => handleNameChange(e)}
        />
      </div>
      <div class="upload">
        <label>Year Of Study</label>
        <input
          type="text"
          name="yearOfStudy"
          value={formData.yearOfStudy}
          onChange={(e) => handleYearOfStudyChange(e)}
        />
      </div>
      <div class="upload">
        <label>Course</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={(e) => handleCourseChange(e)}
        />
      </div>
      <div class="upload">
        <label>Bio: About You!</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={(e) => handleBioChange(e)}
        />
      </div>
      <button onClick={handlePublish}>Save</button>
    </div>
  );
}
