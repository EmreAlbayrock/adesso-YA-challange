import { createSlice } from "@reduxjs/toolkit";

export const foodCheckSlice = createSlice({
  name: "foodCheck",
  initialState: {
    value: false,
  },
  reducers: {
    changeFoodCheckState: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeFoodCheckState } = foodCheckSlice.actions;
export default foodCheckSlice.reducer;
