import logo from "./logo.svg";
import { Bar } from "./tab";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./signin";
import SignUp from "./signup";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
// import ResponsiveAppBar from "./components";
import Upload from "./upload";
import PersistentDrawerLeft from "./scrap";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useAuth } from "./contexts/AuthContext";
import { useHistory } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PrivateRoute from "./auth/private_route";
import LoggedInRouteRoute from "./auth/loggedIn_route";
import MyTabs from "./mytabs";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const App = () => {
  const { currentUser, logout, currentUserDoc } = useAuth();
  const history = useHistory();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            Guitar Transcriber
          </Typography>
          <Typography variant="h6" noWrap component="div">
            .
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
          {!currentUser && (
            <ListItem key="Login" disablePadding>
              <ListItemButton
                onClick={async () => {
                  //await logout();
                  // handleCloseUserMenu();
                  history.push("/signin");
                }}
              >
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          )}
          {!currentUser && (
            <ListItem key="Register" disablePadding>
              <ListItemButton
                onClick={async () => {
                  // handleCloseUserMenu();
                  history.push("/signup");
                }}
              >
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
          )}
          {currentUser && (
            <ListItem key="id" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={currentUser.email} />
              </ListItemButton>
            </ListItem>
          )}
          {currentUser && (
            <ListItem key="My Tabs" disablePadding>
              <ListItemButton
                onClick={async () => {
                  //await logout();
                  // handleCloseUserMenu();
                  history.push("/mytabs");
                }}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="My Tabs" />
              </ListItemButton>
            </ListItem>
          )}
          <ListItem key="Sample Tabs" disablePadding>
            <ListItemButton
              onClick={async () => {
                //await logout();
                // handleCloseUserMenu();
                history.push("/sampletabs");
              }}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Sample Tabs" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          {/* {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
          {currentUser && (
            <ListItem key="Logout" disablePadding>
              <ListItemButton
                onClick={async () => {
                  await logout();
                  // handleCloseUserMenu();
                  history.push("/signin");
                }}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* <BrowserRouter> */}
        {/* <Navbar /> */}
        {/* <ResponsiveAppBar /> */}
        <LoggedInRouteRoute path="/signin" exact component={SignIn} />
        <LoggedInRouteRoute path="/signup" exact component={SignUp} />
        <Route path="/sampletabs" exact component={Bar} />
        <Route path="/" exact component={Upload} />
        <PrivateRoute path="/upload" component={Upload} />
        <PrivateRoute path="/mytabs" component={MyTabs} />
        {/* <Route path="scrap" component={PersistentDrawerLeft} /> */}

        {/* <PrivateRoute path="/time" exact component={Time} /> */}
        {/* <Footer/>  */}
        {/* </BrowserRouter> */}
      </Main>
    </Box>
  );
};

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         {/* <Navbar /> */}
//         {/* <ResponsiveAppBar /> */}
//         <Route path="/signin" exact component={SignIn} />
//         <Route path="/signup" exact component={SignUp} />
//         <Route path="/" exact component={Bar} />
//         <Route path="/upload" component={Upload} />
//         <Route path="scrap" component={PersistentDrawerLeft} />

//         {/* <PrivateRoute path="/time" exact component={Time} /> */}
//         {/* <Footer/>  */}
//       </BrowserRouter>
//     </AuthProvider>
//     // <>
//     //   <PersistentDrawerLeft />
//     // </>
//   );
// }

export default App;
