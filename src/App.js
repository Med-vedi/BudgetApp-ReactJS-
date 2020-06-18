import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import MainPage from "./components/MainPage";
import { AuthProvider } from "./Auth";
import PrivatRoute from "./PrivatRoute";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          {/* <Switch> */}
            <PrivatRoute exact path="/" component={MainPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          {/* </Switch> */}
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
