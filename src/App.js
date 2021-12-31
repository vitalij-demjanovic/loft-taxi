import React, { useState} from "react";
import './global.css'
import AuthContext from "./auth/AuthContext";
import AppRoute from "./components/AppRouter/AppRoute";

const App = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    console.log(isLoggedIn)
    return (
      <div className="App">
          <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
              <AppRoute logi={isLoggedIn}/>
          </AuthContext.Provider>
      </div>
    )
}

export default  App
