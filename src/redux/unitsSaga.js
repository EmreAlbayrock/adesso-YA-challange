import { call, put, takeLatest } from "redux-saga/effects";
import { getUnitsSuccess } from "./unitsSlice";

function* workGetUnits() {
  const units = yield call(() => fetch("/age-of-empires-units.json"));
  const formattedUnits = yield units.json();
  yield put(getUnitsSuccess(formattedUnits));
}

export default function* fetchDataSaga() {
  yield takeLatest("units/getUnitsFetch", workGetUnits);
}
