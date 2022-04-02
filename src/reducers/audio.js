import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const WORDNIK_SEARCH =
  "https://us-central1-phonic-spelling.cloudfunctions.net/wordnik/";

export const audioSlice = createSlice({
  name: "audio",
  initialState: {},
  reducers: {
    startFetchAudio: (state, { payload }) => {
      state[payload.word] = {
        word: payload.word,
        fetching: true,
      };
    },
    fetchAudioSuccess: (state, { payload }) => {
      state[payload.word] = {
        ...payload,
        word: payload.word,
        fetching: false,
      };
    },
    fetchAudioFailure: (state, { payload }) => {
      state[payload.word] = {
        word: payload.word,
        fetching: false,
        error: payload.error,
      };
    },
  },
});

export const { startFetchAudio, fetchAudioSuccess, fetchAudioFailure } =
  audioSlice.actions;

export const getAudio = (word) => (dispatch, getState) => {
  const { audio } = getState();
  if (!word || !!audio[word]) return;

  dispatch(startFetchAudio({ word }));

  return axios
    .get(`${WORDNIK_SEARCH}${word}`)
    .then(({ data }) => {
      if (data.length) {
        dispatch(fetchAudioSuccess({ audioURLs: data, word }));
      } else {
        dispatch(fetchAudioFailure({ word, error: "Audio not available." }));
      }
    })
    .catch((error) => {
      dispatch(
        fetchAudioFailure({
          word,
          error: error?.response?.data || "Audio not available.",
        })
      );
    });
};

export default audioSlice.reducer;
