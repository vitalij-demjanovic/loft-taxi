import { combineReducers } from "redux";
import auth from "./AuthReducers";
import card from './CardReducers'
import address from './addressReducer'

export default combineReducers({ auth, card, address })
