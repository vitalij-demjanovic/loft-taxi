import { takeEvery, call } from 'redux-saga/effects'
import { serverRegistration } from "../api/api";
import {REGISTRATION} from "../store/actions";

export function* registrationSaveSaga(action) {
    const { email, password, name, surname } = action.payload
    yield call(serverRegistration, email, password, name, surname)
}

export function* registrationSaga() {
    yield takeEvery(REGISTRATION, registrationSaveSaga)
}
