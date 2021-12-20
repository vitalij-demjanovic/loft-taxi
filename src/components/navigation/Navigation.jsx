import React from "react";
import './Navigation.css'
import NavLogo from '../../assets/image/NavLogo.png'

const Navigation = (props) => {

    return (
      <>
    <div className="navigation">
      <div className="n-container">
        <div className="navigation-logo">
          <img src={NavLogo} alt="logo" />
        </div>
        <ul className="nav-list">
          <li className="nav-list-item" onClick={() => props.navigation('map')}>Карта</li>
          <li className="nav-list-item" onClick={() => props.navigation('profile')}>Профиль</li>
          <li className="nav-list-item" onClick={() => props.logOut('login')}>Выйти</li>
        </ul>
      </div>
    </div>
    </>
    );
}

export default Navigation
