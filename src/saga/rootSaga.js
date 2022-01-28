import {fork, all  } from 'redux-saga/effects'

import {cardSaga} from "./cardSaga";
import {authSaga} from "./authSaga";
import {AddressSag} from "./addressSaga";
import {registrationSaga} from "./registrationSaga";
import {tripSaga} from "./tripSaga";

export function* rootSaga () {
    yield all([
        fork(cardSaga),
        fork(authSaga),
        fork(AddressSag),
        fork(registrationSaga),
        fork(tripSaga)
    ])
}
