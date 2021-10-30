import { createSlice } from "@reduxjs/toolkit";

const defaultVoice = "Google US English";

export const voicesSlice = createSlice({
  name: "lessonattempts",
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

export default voicesSlice.reducer;
