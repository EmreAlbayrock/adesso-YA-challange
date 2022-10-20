import { createSlice } from "@reduxjs/toolkit";

export const selectedAgeSlice = createSlice({
  name: "selectedAge",
  initialState: {
    value: "All",
  },

  reducers: {
    changeSelectedAge: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeSelectedAge } = selectedAgeSlice.actions;
export default selectedAgeSlice.reducer;
