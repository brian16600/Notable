import { useEffect, useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase-config";
import { toast } from "react-toastify";
import { v4 } from "uuid";

function UploadFile() {
  /** 
  const [fileUpload, setFileUpload] = useState(null);
  const uploadFile = () => {
    if (fileUpload == null) return;
    const imageRef = ref(storage, `notes/${fileUpload.name + v4()}`);
    uploadBytes(imageRef, fileUpload).then(() => {
      alert("File uploaded");
    });
  };
  */

  const [formData, setFormData] = useState({
    description: "",
    title: "",
    notesUrl: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

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

    const storageRef = ref(storage, `/notes/${Date.now()}${formData.notesURl}`);

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
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          notesUrl: "",
        });

        getDownloadURL(uploadNotes.snapshot.ref).then((url) => {
          const notesRef = collection(db, "notes");
          addDoc(notesRef, {
            title: formData.title,
            description: formData.description,
            notesUrl: url,
            createdAt: Timestamp.now().toDate(),
            likes: [],
          })
            .then(() => {
              alert("Notes Uploaded!");
              toast("Notes added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding Notes", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <div>
      <label>Title</label>
      <input
        name="title"
        value={formData.title}
        onChange={(e) => handleTitleChange(e)}
      />

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={(e) => handleDescriptionChange(e)}
      />

      <label>Notes</label>
      <input
        type="file"
        name="notesUrl"
        onChange={(event) => {
          handleNotesChange(event);
        }}
      />

      <button onClick={handlePublish}>Upload</button>
    </div>
  );
}

export default UploadFile;
