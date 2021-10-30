import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/auth";
import lessonAttemptsReducer from "./reducers/lessonAttempts";
import voiceReducer from "./reducers/voice";

export default configureStore({
  reducer: {
    auth: authReducer,
    lessonAttempts: lessonAttemptsReducer,
    voice: voiceReducer,
  },
});
