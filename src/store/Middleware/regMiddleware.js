import { registration } from "../actions";
import { serverRegistration } from "../../api/api";
import { REGISTRATION } from "../actions";

export const regMiddleware = (store) => (next) => async (action) => {
    if (action.type === REGISTRATION) {
        const { email, password, name, surname } = action.payload
        const success = await serverRegistration(email, password, name, surname)
        if (success) {
            store.dispatch(registration())
        }
    } else {
        next(action)
    }
}
