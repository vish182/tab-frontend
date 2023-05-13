import { useEffect, useState } from "react";
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
import { getMyTabsList } from "./api/mytabs";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { Bar } from "./tab";

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

function MyTabs() {
  // State to store uploaded file
  const { currentUser } = useAuth();

  const [myTabsList, setMyTabsList] = useState([]);

  const [notes, setNotes] = useState([]);

  // progress
  const [percent, setPercent] = useState(0);

  const [activeTab, setActiveTab] = useState(-1);

  const loadTabsList = async () => {
    let templist = await getMyTabsList({ UID: currentUser.email });
    setMyTabsList(templist);
    console.log("templist: ", templist);
  };

  useEffect(() => {
    console.log(currentUser.email);
    loadTabsList();
  }, []);

  const handleActiveIndex = (filename) => {
    return () => {
      let indx = -1;

      myTabsList.forEach((element, i) => {
        console.log(element);
        if (element.filename == filename) {
          indx = i;
        }
      });

      setActiveTab(indx);
    };
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
          <div sx={{ width: "100%" }}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {myTabsList.length != 0 &&
                myTabsList.map((value) => (
                  <ListItemButton onClick={handleActiveIndex(value.filename)}>
                    <ListItem key={value.filename} disableGutters>
                      <ListItemText primary={value.filename} />
                    </ListItem>
                  </ListItemButton>
                ))}
            </List>
            <div>
              {/* <Box className="upload-output">
                {activeTab != -1 &&
                  myTabsList[activeTab].tabs.map((data, index) =>
                    notetile({ note: data })
                  )}
              </Box> */}
              <Box>{activeTab != -1 && <Bar tabs={myTabsList[activeTab].tabs}/>}</Box>
              {/* JSON.stringify(myTabsList[activeTab].tabs) &&  */}
              {/* {JSON.stringify(myTabsList)} */}
            </div>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MyTabs;
