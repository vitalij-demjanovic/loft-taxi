import { LOG_IN, logIn} from "../actions";
import { serverLogin } from "../../api/api";
import {AUTHENTICATE} from "../actions";

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        let { email, password} = action.payload
        const success = await serverLogin(email, password)
        const token = success.token
        if (success.success === true) {
            store.dispatch(logIn())
            store.dispatch({ type: LOG_IN, token: token })
            localStorage.setItem('token', token)
        }
    } else {
        next(action)
    }
}

