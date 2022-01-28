import {BOOK_TRIP} from '../actions'

const initialSate = {
    trip: []
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialSate, action) {
    switch (action.type) {
        case BOOK_TRIP: {
            return { trip: action.payload }
        }
        default:
            return  state
    }
}
