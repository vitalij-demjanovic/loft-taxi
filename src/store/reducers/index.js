import { combineReducers } from "redux";
import auth from "./AuthReducers";
import card from './CardReducers'
import address from './addressReducer'
import trip from './tripReducer'

export default combineReducers({ auth, card, address, trip})
