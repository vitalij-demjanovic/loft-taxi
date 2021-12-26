import React from "react";

export const AuthContext = React.createContext({
    isLoggedIn: false,
   logIn(email, password) {
        if (email === 'test@test.com' && password === '123123') {
            return  this.isLoggedIn = true
        }
   },
    logOut() {
       return this.isLoggedIn = false
    }
});

export default AuthContext

