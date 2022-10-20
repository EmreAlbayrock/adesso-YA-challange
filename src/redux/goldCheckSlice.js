import { createSlice } from "@reduxjs/toolkit";

export const goldCheckSlice = createSlice({
  name: "goldCheck",
  initialState: {
    value: false,
  },

  reducers: {
    changeGoldCheckState: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeGoldCheckState } = goldCheckSlice.actions;
export default goldCheckSlice.reducer;
