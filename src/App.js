import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light"); // whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("red");
      document.body.style.backgroundColor = "#a90202";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils-Light Mode";
    }
  };
  const toggleMode1 = () => {
    if (mode === "light") {
      setMode("blue");
      document.body.style.backgroundColor = "#17175c";
      showAlert("Blue mode has been enabled", "success");
      // document.title = "TextUtils-Blue Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils-Light Mode";
    }
  };
  const toggleMode2 = () => {
    if (mode === "light") {
      setMode("green");
      document.body.style.backgroundColor = "#236918";
      showAlert("Green mode has been enabled", "success");
      // document.title = "TextUtils-Green Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils-Light Mode";
    }
  };
  const toggleMode3 = () => {
    if (mode === "light") {
      setMode("purple");
      document.body.style.backgroundColor = "#5d1c61";
      showAlert("Purple mode has been enabled", "success");
      // document.title = "TextUtils-Purple Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text-Utilities"
          mode={mode}
          toggleMode={toggleMode}
          toggleMode1={toggleMode1}
          toggleMode2={toggleMode2}
          toggleMode3={toggleMode3}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces  👇"
                mode={mode}
              />
            </Route>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
