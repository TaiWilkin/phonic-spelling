import { createSlice } from "@reduxjs/toolkit";
import { clearState } from "./auth";
import { saveLessonAttemptSuccess } from "./lessonAttempts";

export const lessonAttemptSlice = createSlice({
  name: "lessonattempt",
  initialState: {
    incorrectAnswers: [],
    correctAnswers: [],
  },
  reducers: {
    updateLessonAttempt: (state, { payload }) => {
      state.incorrectAnswers =
        state.incorrectAnswers + payload.incorrectAnswers;
      state.correctAnswers = state.correctAnswers + payload.correctAnswers;
    },
    startNewLessonAttempt: (state) => ({
      incorrectAnswers: [],
      correctAnswers: [],
    }),
  },
  extraReducers: {
    [clearState]: (state) => ({ incorrectAnswers: [], correctAnswers: [] }),
    [saveLessonAttemptSuccess]: (state) => ({
      incorrectAnswers: [],
      correctAnswers: [],
    }),
  },
});

export const { updateLessonAttempt } = lessonAttemptSlice.actions;

export default lessonAttemptSlice.reducer;
