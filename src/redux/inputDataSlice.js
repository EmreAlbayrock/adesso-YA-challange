import { createSlice } from "@reduxjs/toolkit";

export const inputDataSlice = createSlice({
  name: "inputData",
  initialState: {
    value: {
      minFood: 0,
      maxFood: 200,
      minWood: 0,
      maxWood: 200,
      minGold: 0,
      maxGold: 200,
    },
  },

  reducers: {
    changeInputData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeInputData } = inputDataSlice.actions;
export default inputDataSlice.reducer;
