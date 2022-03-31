import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { firebaseGetSettings, firebaseUpdateSettings } from "../firebase";

import { defaultVoice } from "../util";

export const voicesSlice = createSlice({
  name: "voice",
  initialState: {
    voice: defaultVoice,
  },
  reducers: {
    setVoice: (state, { payload }) => {
      state.voice = payload || defaultVoice;
    },
  },
});

export const { setVoice } = voicesSlice.actions;

export const saveSettings =
  ({ voice }) =>
  (dispatch) => {
    firebaseUpdateSettings({ voice })
      .then(({ voice }) => {
        dispatch(setVoice(voice));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

export const getSettings = () => (dispatch) => {
  firebaseGetSettings()
    .then(({ voice }) => {
      dispatch(setVoice(voice));
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.message);
    });
};

export default voicesSlice.reducer;
