import { useState } from "react";
import { firebase_storage } from "./auth/firebase_storage";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getNotes } from "./api/upload";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import "./styles/upload.css";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { notetile } from "./components";
import { parseNote } from "./utils/utils";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange, purple, green, grey } from "@mui/material/colors";
import { useAuth } from "./contexts/AuthContext";
import { createTab } from "./api/upload";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: purple[500],
    },
    secondary: {
      main: grey[500],
    },
  },
});

function Upload() {
  // State to store uploaded file
  const { currentUser } = useAuth();
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
      alert("Please select a file first!");
    }

    const storageRef = ref(
      firebase_storage,
      `/files/${currentUser.email}/${file.name}`
    );

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

            let new_notes = [];

            transcribed_notes.map((data, index) => {
              new_notes.push(parseNote(String(data)));
            });

            console.log(new_notes);

            setNotes(new_notes);
            createTab({
              UID: currentUser.email,
              filename: file.name.replace(/ /g, "_"),
              tabs: new_notes,
            });
          });
          // tell flask image is uploaded

          // get result from flask and display
        });
      }
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="upload-parent">
        <Box className="upload-main">
          <Box className="upload-banner">
            <h1>Upload Your Files and get Playin'</h1>
            <p>
              {" "}
              A dictionary can be created using two methods. The Object Literal
              method or by using the new keyword. However, we focus on the
              former. This is because it is very likely that you have used
              dictionaries before and this method follows a familiar syntax.{" "}
            </p>
          </Box>
          <Box className="upload-interactive">
            <Button variant="outlined">
              <Input type="file" onChange={handleChange} accept="/image/*" />
            </Button>

            {/* <button onClick={handleUpload}>Upload to Firebase</button> */}
            <Button onClick={handleUpload} variant="contained">
              Upload
            </Button>
          </Box>
          <Box className="upload-percent">
            <Box sx={{ width: "100%" }}>
              <LinearProgress variant="determinate" value={percent} />
            </Box>
          </Box>
          <Box className="upload-output">
            {notes.map((data, index) => notetile({ note: data }))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Upload;
