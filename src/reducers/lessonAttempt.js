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
  extraReducers: (builder) => {
    builder.addCase(clearState, (state) => {
      return {
        lesson: null,
        incorrectAnswers: [],
        correctAnswers: [],
      };
    });
    builder.addCase(saveLessonAttemptSuccess, (state) => {
      return {
        lesson: null,
        incorrectAnswers: [],
        correctAnswers: [],
      };
    });
  },
});

export const { updateLessonAttempt, startNewLessonAttempt } =
  lessonAttemptSlice.actions;

export default lessonAttemptSlice.reducer;
