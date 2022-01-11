import { REGISTRATION } from "../actions";
import {serverRegistration} from "../../api/api";

export const regMiddleware = (store) => (next) => async (action) => {
    if (action.type === REGISTRATION) {
        const { email, password, name, surname } = action.payload
        await serverRegistration(email, password, name, surname)
    } else {
        next(action)
    }
}
