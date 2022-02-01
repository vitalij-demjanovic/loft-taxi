import {takeEvery, call, put} from 'redux-saga/effects'
import { serverRoute } from "../api/api";
import {BOOK_TRIP, GET_TRIP_SUCCES } from "../store/actions";

export function* fetchTripSaga(action) {
    const { address1, address2 } = action.payload
    const data = yield call(serverRoute, address1, address2)
    if (data) {
        yield put({type: GET_TRIP_SUCCES, payload: data});
        console.log(data)
    }
}

export function* tripSaga() {
    yield takeEvery(BOOK_TRIP, fetchTripSaga)
}
