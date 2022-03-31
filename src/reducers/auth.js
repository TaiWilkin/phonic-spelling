import { createSlice, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  firebaseSignin,
  firebaseSignout,
  firebaseRegister,
  watchAuthState,
} from "../firebase";
import { getLessonAttempts } from "./lessonAttempts";
import { getSettings } from "./voice";

export const clearState = createAction("clearState");

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    handleSignin: (state, { payload }) => {
      state.user = payload;
      state.error = null;
    },
    handleSignout: (state) => {
      state.user = false;
      state.error = null;
    },
  },
});

export const { handleSignin, handleSignout } = authSlice.actions;

export const register = (email, password) => (dispatch) => {
  firebaseRegister(email, password)
    .then((userCredential) => {
      const { uid, accessToken, email } = userCredential.user;
      dispatch(handleSignin({ uid, accessToken, email }));
      dispatch(getLessonAttempts());
      dispatch(getSettings());
    })
    .catch((error) => {
      dispatch(handleSignout());
      dispatch(clearState());
      toast.error(error.message);
    });
};

export const signin = (email, password) => (dispatch) => {
  firebaseSignin(email, password)
    .then((userCredential) => {
      const { uid, accessToken, email } = userCredential.user;
      dispatch(handleSignin({ uid, accessToken, email }));
      dispatch(getLessonAttempts());
      dispatch(getSettings());
    })
    .catch((error) => {
      dispatch(handleSignout());
      dispatch(clearState());
      toast.error(error.message);
    });
};

export const signout = () => (dispatch) => {
  firebaseSignout()
    .then(() => {
      dispatch(handleSignout());
      dispatch(clearState());
    })
    .catch((error) => {
      dispatch(handleSignout());
      dispatch(clearState());
      toast.error(error.message);
    });
};

export const checkIfLoggedIn = () => (dispatch) => {
  watchAuthState((user) => {
    if (user) {
      const { uid, accessToken, email } = user;
      dispatch(handleSignin({ uid, accessToken, email }));
      dispatch(getLessonAttempts());
      dispatch(getSettings());
    } else {
      dispatch(handleSignout());
      dispatch(clearState());
    }
  });
};

export default authSlice.reducer;
