import { combineReducers } from "redux";
import auth from "./AuthReducers";
import reg from './RegReducers'

export default combineReducers({ auth, reg })
