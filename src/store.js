import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import lessonAttemptsReducer from "./reducers/lessonAttempts";
import lessonAttemptReducer from "./reducers/lessonAttempt";
import voiceReducer from "./reducers/voice";
import audioReducer from "./reducers/audio";

const reducers = combineReducers({
  auth: authReducer,
  lessonAttempts: lessonAttemptsReducer,
  lessonAttempt: lessonAttemptReducer,
  voice: voiceReducer,
  audio: audioReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware =
  process.env.NODE_ENV === "development" ? [thunk, logger] : [thunk];

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "development",
  middleware,
});

export default store;
