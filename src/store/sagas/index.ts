import { fork } from "redux-saga/effects";
import applicationSaga from "./application.sagas";

export function* rootSaga() {
  yield fork(applicationSaga);
}
