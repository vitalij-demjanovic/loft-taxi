import React from "react";

export const AuthContext = React.createContext({});

export const logIn = (email, password) => {
    if (email === 'test@test.com' && password === '123123') {
        return true
    }
}

export const logOut = () => {
    return false
}

export default AuthContext
