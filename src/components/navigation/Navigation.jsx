import React from "react";
import './Navigation.css'
import NavLogo from '../../assets/image/NavLogo.png'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logOut} from "../../store/actions";

const Navigation = (props) => {
    const UnAuthorization = (event) => {
        event.preventDefault()
        props.logOut()
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

export default connect(
    null,
    {logOut}
)(Navigation)
