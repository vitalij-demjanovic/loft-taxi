import {takeEvery, call, put} from 'redux-saga/effects'
import {ADDRESSLIST} from "../store/actions";
import { serverAddressList } from "../api/api";

export function* callAddressSaga() {
   const list = yield call(serverAddressList)
    yield put({type:ADDRESSLIST, label: list})
}

export function* AddressSag () {
    yield takeEvery(ADDRESSLIST, callAddressSaga)
}
