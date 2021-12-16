import React from "react";
import './Navigation.css'
import NavLogo from "../../logoVariant/NavLogo";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="n-container">
        <div className="navigation-logo">
          <NavLogo></NavLogo>
        </div>
        <ul className="nav-list">
          <li className="nav-list-item">Карта</li>
          <li className="nav-list-item">Профиль</li>
          <li className="nav-list-item">Выйти</li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation