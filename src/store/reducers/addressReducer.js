import { ADDRESSLIST } from "../actions";

const initialSate = {
    label: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialSate, action) {
    switch (action.type) {
        case ADDRESSLIST: {
            return { label: action.payload }
        }
        default:
            return state
    }
}
