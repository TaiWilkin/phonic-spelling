import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Lesson from "./components/Lesson";
import Lessons from "./components/Lessons";
import Auth from "./components/Auth";
import Attempts from "./components/Attempts";
import Acknowledgments from "./components/Acknowledgments";
import Settings from "./components/Settings";
import Pretest from "./components/Pretest";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import { checkIfLoggedIn } from "./reducers/auth";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIfLoggedIn());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/signin">
            <Auth />
          </Route>
          <Route path="/register">
            <Auth />
          </Route>
          <PrivateRoute path="/acknowledgments">
            <Acknowledgments />
          </PrivateRoute>
          <PrivateRoute path="/attempts">
            <Attempts />
          </PrivateRoute>
          <PrivateRoute path="/settings">
            <Settings />
          </PrivateRoute>
          <PrivateRoute path="/lessons/:id">
            <Lesson />
          </PrivateRoute>
          <PrivateRoute path="/pretest">
            <Pretest />
          </PrivateRoute>
          <Route exact path="/lessons">
            <Lessons />
          </Route>
          <Route exact path="/">
            <Redirect to="/lessons" />
          </Route>
        </Switch>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        closeOnClick
        rtl={false}
        draggable
      />
    </div>
  );
}
