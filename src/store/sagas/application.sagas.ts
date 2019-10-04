import { put, takeEvery } from "redux-saga/effects";
import { applicationActions } from "../actions";

function* initializeApplication() {
  yield put(applicationActions.actions.setInitialized(true));
}

export default function* watcher() {
  yield takeEvery(applicationActions.names.initialize, initializeApplication);
}
