import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase-config";

function UploadFile() {
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };
  const [progress, setProgress] = useState(0);
  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, "./notes/${file.name}");
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
      }
    );
  };
  return (
    <div>
      <form onSubmit={formHandler}>
        <input type="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadFile;
