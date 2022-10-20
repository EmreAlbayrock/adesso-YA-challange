import { createSlice } from "@reduxjs/toolkit";

export const selectedDataSlice = createSlice({
  name: "selectedData",
  initialState: {
    value: [],
  },

  reducers: {
    changeSelectedData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeSelectedData } = selectedDataSlice.actions;
export default selectedDataSlice.reducer;
