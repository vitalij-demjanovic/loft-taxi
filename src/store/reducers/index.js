import { combineReducers } from "redux";
import auth from "./AuthReducers";
import card from './CardReducers'

export default combineReducers({ auth, card })
