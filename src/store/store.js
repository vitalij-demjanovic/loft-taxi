import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from './reducers'
import { authMiddleware } from "./Middleware/authMiddleware";
import {regMiddleware} from "./Middleware/regMiddleware";
import { CardMiddleware } from "./Middleware/cardMiddleware";

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(authMiddleware),
        applyMiddleware(regMiddleware),
        applyMiddleware(CardMiddleware)
        )
)
