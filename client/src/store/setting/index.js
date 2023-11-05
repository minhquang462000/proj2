import { createSlice } from "@reduxjs/toolkit";

const Setting = createSlice({
  name: "setting",
  initialState: {
    darkMode: false,
  },
  reducers: {
    ChangeMode: (state) => {
      state.darkMode = !state.darkMode;
      return state;
    },
  },
});
export const {ChangeMode} = Setting.actions;
export default Setting.reducer;
