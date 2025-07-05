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
    loading: false,
  },
  reducers: {
    saveLessonAttemptSuccess: (state, { payload }) => {
      const existingAttempts = state.attempts[payload.lesson];
      if (!existingAttempts) {
        state.attempts[payload.lesson] = [payload];
      } else {
        state.attempts[payload.lesson] = [...existingAttempts, payload];
      }
      state.loading = false;
    },
    beginSaveLessonAttempt: (state) => {
      state.loading = true;
    },
    getLessonAttemptsSuccess: (state, { payload }) => {
      state.attempts = payload;
      state.loading = false;
    },
    beginGetLessonAttempts: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(clearState, (state) => {
      return { attempts: {} };
    });
  },
});

export const {
  saveLessonAttemptSuccess,
  getLessonAttemptsSuccess,
  beginGetLessonAttempts,
  beginSaveLessonAttempt,
} = lessonAttemptsSlice.actions;

export const saveLessonAttempt =
  ({ lesson, incorrectAnswers, correctAnswers }) =>
  (dispatch) => {
    dispatch(beginSaveLessonAttempt());
    firebaseAddLessonAttempt({
      lesson,
      incorrectAnswers,
      correctAnswers,
    })
      .then((attempt) => {
        dispatch(saveLessonAttemptSuccess(attempt));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

export const getLessonAttempts = () => (dispatch) => {
  dispatch(beginGetLessonAttempts());
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
