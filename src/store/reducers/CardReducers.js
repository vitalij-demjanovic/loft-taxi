import { DONECARD } from "../actions";

const initialSate = {
    received: false
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialSate, action) {
    switch (action.type) {
        case DONECARD: {
            return { received: true }
        }
        default:
            return  state
    }
}
