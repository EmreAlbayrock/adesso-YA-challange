import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import foodCheckReducer from "./foodCheckSlice";
import woodCheckReducer from "./woodCheckSlice";
import goldCheckReducer from "./goldCheckSlice";
import selectedAgeReducer from "./selectedAgeSlice";
import selectedDataReducer from "./selectedDataSlice";
import inputDataReducer from "./inputDataSlice";
import unitsReducer from "./unitsSlice";
import unitsSaga from "./unitsSaga";

const saga = createSagaMiddleware();
export default configureStore({
  reducer: {
    foodCheck: foodCheckReducer,
    woodCheck: woodCheckReducer,
    goldCheck: goldCheckReducer,
    selectedAge: selectedAgeReducer,
    selectedData: selectedDataReducer,
    inputData: inputDataReducer,
    units: unitsReducer,
  },
  middleware: [saga],
});
saga.run(unitsSaga);
