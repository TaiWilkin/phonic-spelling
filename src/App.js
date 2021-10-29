import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HStack, Heading, Spacer } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

import Lesson from "./components/Lesson";
import Lessons from "./components/Lessons";
import NavigationDrawer from "./components/NavigationDrawer";
import AuthButtons from "./components/AuthButtons";
import Auth from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";
import Attempts from "./components/Attempts";

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
        <HStack p="10px" bg="black">
          <NavigationDrawer />
          <Heading pl="5" color="white" size="lg">
            Phonic Spelling
          </Heading>
          <Spacer />
          <AuthButtons />
        </HStack>
        <Switch>
          <Route path="/signin">
            <Auth />
          </Route>
          <Route path="/register">
            <Auth />
          </Route>
          <PrivateRoute path="/attempts">
            <Attempts />
          </PrivateRoute>
          <Route path="/lessons/:id">
            <Lesson />
          </Route>
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
