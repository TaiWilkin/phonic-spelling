import { createSlice } from "@reduxjs/toolkit";
import { clearState } from "./auth";
import { saveLessonAttemptSuccess } from "./lessonAttempts";

export const lessonAttemptSlice = createSlice({
  name: "lessonattempt",
  initialState: {
    lesson: null,
    incorrectAnswers: [],
    correctAnswers: [],
  },
  reducers: {
    updateLessonAttempt: (state, { payload }) => {
      state.incorrectAnswers = [
        ...state.incorrectAnswers,
        ...payload.incorrectAnswers,
      ];
      state.correctAnswers = [
        ...state.correctAnswers,
        ...payload.correctAnswers,
      ];
    },
    startNewLessonAttempt: (state, { payload }) => ({
      lesson: payload,
      incorrectAnswers: [],
      correctAnswers: [],
    }),
  },
  extraReducers: {
    [clearState]: (state) => ({
      lesson: null,
      incorrectAnswers: [],
      correctAnswers: [],
    }),
    [saveLessonAttemptSuccess]: (state) => ({
      lesson: null,
      incorrectAnswers: [],
      correctAnswers: [],
    }),
  },
});

export const { updateLessonAttempt, startNewLessonAttempt } =
  lessonAttemptSlice.actions;

export default lessonAttemptSlice.reducer;
