import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/auth";
import lessonAttemptsReducer from "./reducers/lessonAttempts";

export default configureStore({
  reducer: {
    auth: authReducer,
    lessonAttempts: lessonAttemptsReducer
  }
});
