import React, {useContext, useState} from "react";
import Login from './pages/Login/Login'
import './global.css'
import Registration from "./pages/Registraion/Registration";
import Home from "./pages/Home/Home";
import PropTypes from "prop-types";
import AuthContext from "./auth/AuthContext";

const App = () =>{
  const [currentPage, setPage] = useState('login')
    const context = useContext(AuthContext)

   const naviTogo = (page) => {
      context.isLoggedIn ? setPage('home') : setPage('login')
    };

  const naviRegistration = (page) => {
      setPage('registration')
  }

  const naviLogin = (page) => {
    setPage('login')
  }

    return (
      <div className="App">
          <AuthContext.Provider value={context}>
              {currentPage === 'login' && <Login showPage={naviTogo} navigation={naviRegistration}/>}
              {currentPage === 'registration' && <Registration navigation={naviLogin}/>}
              {currentPage === 'home' && <Home Out={naviTogo} />}
          </AuthContext.Provider>
      </div>
    )
}

App.protoTypes ={
    isLoggedIn: PropTypes.bool
}

export default  App
