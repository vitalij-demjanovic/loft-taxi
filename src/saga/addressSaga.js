import {takeEvery, call, put} from 'redux-saga/effects'
import {ADDRESSLIST_SUCCES} from "../store/actions";
import { serverAddressList } from "../api/api";

export function* callAddressSaga() {
   const { addresses } = yield call(serverAddressList)
    yield put({type:ADDRESSLIST_SUCCES, payload: addresses})
}

export function* AddressSag () {
    yield takeEvery(ADDRESSLIST_SUCCES, callAddressSaga)
}
