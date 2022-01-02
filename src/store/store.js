import { createStore, applyMiddleware } from "redux"
import rootReducer from './reducers'
import { authMiddleware } from "./Middleware/authMiddleware";
import {regMiddleware} from "./Middleware/regMiddleware";

export const store = createStore(rootReducer, applyMiddleware(authMiddleware, regMiddleware))

