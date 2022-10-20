import { createSlice } from "@reduxjs/toolkit";

export const woodCheckSlice = createSlice({
  name: "woodCheck",
  initialState: {
    value: false,
  },

  reducers: {
    changeWoodCheckState: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeWoodCheckState } = woodCheckSlice.actions;
export default woodCheckSlice.reducer;
