import React, { useContext} from "react";
import './Navigation.css'
import NavLogo from '../../assets/image/NavLogo.png'
import {logOut, AuthContext} from "../../auth/AuthContext";
import { Link } from "react-router-dom";

const Navigation = () => {
    const { setIsLoggedIn } = useContext(AuthContext)
    const UnAuthorization = (event) => {
        event.preventDefault()
        setIsLoggedIn(logOut)
    }
    return (
      <>
    <div className="navigation">
      <div className="n-container">
        <div className="navigation-logo">
          <img src={NavLogo} alt="logo" />
        </div>
        <ul className="nav-list">
          <li className="nav-list-item"> <Link to='/map' >Карта</Link></li>
          <li className="nav-list-item"><Link to='/profile' >Профиль</Link></li>
          <li className="nav-list-item" onClick={UnAuthorization}>Выйти</li>
        </ul>
      </div>
    </div>
    </>
    );
}

export default Navigation
