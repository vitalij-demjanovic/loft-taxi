export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const REGISTRATION = 'REGISTRATION'
export const CARDSAVE = 'CARDSAVE'
export const DONECARD = 'DONECARD'
export const ADDRESSLIST = 'ADDRESSLIST'
export const ADDRESSLIST_SUCCES = 'ADDRESSLIST_SUCCES'
export const BOOK_TRIP = 'BOOK_TRIP'
export const GET_TRIP_SUCCES = 'GET_TRIP_SUCCES'

export const logIn = () => ({type: LOG_IN})
export const logOut = () => ({type: LOG_OUT})
export const doneCard = () => ({type: DONECARD})
export const addresslist = () => ({type: ADDRESSLIST})
export const seccessTrip = () => ({type: GET_TRIP_SUCCES})
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: { email, password }
})
export const registration = (email, password, name, surname) => ({
    type: REGISTRATION,
    payload: { email, password, name, surname }
})
export const cardSave = (cardNumber, expiryDate, cardName, cvc, token) => ({
    type: CARDSAVE,
    payload: { cardNumber, expiryDate, cardName, cvc, token }
})

export const bookTrip = ( address1, address2 ) => ({
    type: BOOK_TRIP,
    payload: { address1, address2 }
})
