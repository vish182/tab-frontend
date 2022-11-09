import { useState } from "react";
import { firebase_storage } from "./auth/firebase_storage";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getNotes } from "./api/upload";

function Upload() {
  // State to store uploaded file
  const [file, setFile] = useState("");

  const [notes, setNotes] = useState([]);

  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(firebase_storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);

          //   let transcribed_notes;

          getNotes({ download_url: url }).then((transcribed_notes) => {
            console.log(transcribed_notes);
            setNotes(transcribed_notes);
          });
          // tell flask image is uploaded

          // get result from flask and display
        });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleChange} accept="/image/*" />
      <button onClick={handleUpload}>Upload to Firebase</button>
      <p>{percent} "% done"</p>
      <div>{JSON.stringify(notes)}</div>
    </div>
  );
}

export default Upload;
