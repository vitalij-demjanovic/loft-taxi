import { createStore, applyMiddleware } from "redux"
import rootReducer from './reducers'
import createSagaMiddleware  from 'redux-saga'
// import { authMiddleware } from "./Middleware/authMiddleware";
// import {regMiddleware} from "./Middleware/regMiddleware";
// import { CardMiddleware } from "./Middleware/cardMiddleware";
import {authSaga} from "../saga/authSaga";
import {cardSaga} from "../saga/cardSaga";
import {registrationSaga} from "../saga/registrationSaga";
import {AddressSag} from "../saga/addressSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))


sagaMiddleware.run(authSaga)
sagaMiddleware.run(cardSaga)
sagaMiddleware.run(registrationSaga)
sagaMiddleware.run(AddressSag)
