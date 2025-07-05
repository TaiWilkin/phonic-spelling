import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
        <Routes>
          <Route path="/signin" element={<Auth isSignin />} />
          <Route path="/register" element={<Auth />} />
          <Route
            path="/acknowledgments"
            element={
              <PrivateRoute>
                <Acknowledgments />
              </PrivateRoute>
            }
          />
          <Route
            path="/attempts"
            element={
              <PrivateRoute>
                <Attempts />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="/lessons/:id"
            element={
              <PrivateRoute>
                <Lesson />
              </PrivateRoute>
            }
          />
          <Route
            path="/pretest"
            element={
              <PrivateRoute>
                <Pretest />
              </PrivateRoute>
            }
          />
          <Route exact path="/lessons" element={<Lessons />} />
          <Route exact path="/" element={<Navigate to="/lessons" />} />
        </Routes>
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
