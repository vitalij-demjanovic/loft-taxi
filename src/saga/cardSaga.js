import { takeEvery, call, put } from 'redux-saga/effects'
import { CARDSAVE, DONECARD } from "../store/actions";
import {serverSaveCard} from "../api/api";

export function* cardSaveSaga(action) {
    const { cardNumber, expiryDate, cardName, cvc, token } = action.payload
    yield call(serverSaveCard, cardNumber, expiryDate, cardName, cvc, token)
    yield put({type: DONECARD, received: true})
}

export function* cardSaga () {
    yield takeEvery(CARDSAVE, cardSaveSaga)
}
