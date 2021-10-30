import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  firebaseGetLessonAttempts,
  firebaseAddLessonAttempt,
} from "../firebase";
import { clearState } from "./auth";

export const lessonAttemptsSlice = createSlice({
  name: "lessonattempts",
  initialState: {
    attempts: {},
  },
  reducers: {
    saveLessonAttemptSuccess: (state, { payload }) => {
      const existingAttempts = state.attempts[payload.lesson];
      if (!existingAttempts) {
        state.attempts[payload.lesson] = [payload];
      } else {
        state.attempts[payload.lesson] = [...existingAttempts, payload];
      }
    },
    getLessonAttemptsSuccess: (state, { payload }) => {
      state.attempts = payload;
    },
  },
  extraReducers: {
    [clearState]: (state) => ({ attempts: {} }),
  },
});

export const { saveLessonAttemptSuccess, getLessonAttemptsSuccess } =
  lessonAttemptsSlice.actions;

export const saveLessonAttempt =
  ({ lesson, missedWords, completedWords }) =>
  (dispatch) => {
    firebaseAddLessonAttempt({ lesson, missedWords, completedWords })
      .then((attempt) => {
        dispatch(saveLessonAttemptSuccess(attempt));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

export const getLessonAttempts = () => (dispatch) => {
  firebaseGetLessonAttempts()
    .then((attempts) => {
      dispatch(getLessonAttemptsSuccess(attempts));
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.message);
    });
};

export default lessonAttemptsSlice.reducer;
