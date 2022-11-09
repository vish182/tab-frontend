import logo from "./logo.svg";
import { Bar } from "./tab";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./signin";
import SignUp from "./signup";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import ResponsiveAppBar from "./components";
import Upload from "./upload";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <Navbar /> */}
        <ResponsiveAppBar />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={Bar} />
        <Route path="/upload" component={Upload} />

        {/* <PrivateRoute path="/time" exact component={Time} /> */}
        {/* <Footer/>  */}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
