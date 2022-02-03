import {BOOK_TRIP, GET_TRIP_SUCCES} from '../actions'

const initialSate = {
    trip: [],
    successTrip: false
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialSate, action) {
    switch (action.type) {
        case BOOK_TRIP: {
            return {...state}
        }
        case GET_TRIP_SUCCES: {
            return {
                ...state,
                trip: action.payload,
                successTrip: true
            }
        }
        default:
            return  state
    }
}
