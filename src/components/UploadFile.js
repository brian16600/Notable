import { useEffect, useRef, useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase-config";

import "../assets/css/main.css";

function UploadFile() {
  /**scroll to top automatically. Since coming from some
  pages like home, the user will be at the bottom of the page.
  */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fileRef = useRef();

  const [formData, setFormData] = useState({
    description: "",
    title: "",
    moduleCode: "",
    notesUrl: "",
    createdAt: Timestamp.now().toDate().toISOString().substr(11, 8),
  });

  const [progress, setProgress] = useState(0);

  const handleModuleCodeChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTitleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNotesChange = (e) => {
    setFormData({ ...formData, notesUrl: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.notesUrl) {
      alert("Please fill all the fields");
      return;
    }

    fileRef.current.value = "";
    const storageRef = ref(storage, `notes/${formData.notesUrl.name}`);
    const uploadNotes = uploadBytesResumable(storageRef, formData.notesUrl);
    uploadNotes.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err.code);
      },

      () => {
        getDownloadURL(uploadNotes.snapshot.ref).then((url) => {
          const notesRef = collection(db, "notes");
          addDoc(notesRef, {
            title: formData.title,
            moduleCode: formData.moduleCode,
            description: formData.description,
            notesUrl: url,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              alert("Notes Uploaded!");
              setFormData({
                description: "",
                title: "",
                moduleCode: "",
                notesUrl: "",
              });
              setProgress(0);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
    );
  };

  return (
    <>
      <div class="col">
        <div class="upload">
          <label>
            <h3>Module Code</h3>
          </label>
          <input
            type="text"
            name="moduleCode"
            value={formData.moduleCode}
            onChange={(e) => handleModuleCodeChange(e)}
          />
        </div>
        <div class="upload">
          <label>
            <h3>Title</h3>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => handleTitleChange(e)}
          />
        </div>

        <div class="upload">
          <label>
            <h3>Description</h3>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={(e) => handleDescriptionChange(e)}
          />
        </div>
        <div class="upload">
          <label>
            <h3>Upload Notes</h3>
          </label>
          <input
            type="file"
            ref={fileRef}
            name="notesUrl"
            onChange={(event) => {
              handleNotesChange(event);
            }}
          />
          <div>Progress:{progress}</div>
        </div>
        <button onClick={handlePublish}>Upload</button>
      </div>
    </>
  );
}

export default UploadFile;
