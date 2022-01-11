import { serverSaveCard } from "../../api/api";
import {CARDSAVE, DONECARD} from "../actions";

export const CardMiddleware = (store) => (next) => async (action) => {
    if (action.type === CARDSAVE) {
        const { cardNumber, expiryDate, cardName, cvc, token } = action.payload
        await serverSaveCard(cardNumber, expiryDate, cardName, cvc, token)
        store.dispatch({type:DONECARD, received: true})
    } else {
        next(action)
    }
}
