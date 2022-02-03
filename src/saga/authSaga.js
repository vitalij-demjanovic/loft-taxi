import { takeEvery, call, put } from 'redux-saga/effects'
import {AUTHENTICATE, LOG_IN, logIn} from "../store/actions";
import {serverLogin} from "../api/api";

export function* authenticateSaga(action) {
    const { email, password } = action.payload
    const success = yield call(serverLogin, email, password)
    const token = success.token
    if (success.success === true) {
        yield put(logIn())
        yield put({type:LOG_IN, token: token})
        localStorage.setItem('token', token)
    }
}

export function* authSaga () {
    yield takeEvery(AUTHENTICATE, authenticateSaga)
}

