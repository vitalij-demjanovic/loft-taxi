import {takeEvery, call, put} from 'redux-saga/effects'
import { serverRoute } from "../api/api";
import { BOOK_TRIP } from "../store/actions";

export function* fetchTripSaga(action) {
    const { address1, address2 } = action.payload
     const  trip   = yield call(serverRoute, address1, address2)
    yield put({type: BOOK_TRIP, payload: trip})
}

export function* tripSaga() {
    yield takeEvery(BOOK_TRIP, fetchTripSaga)
}
