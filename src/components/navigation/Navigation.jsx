import React, { useContext} from "react";
import PropTypes from 'prop-types'
import './Navigation.css'
import NavLogo from '../../assets/image/NavLogo.png'
import AuthContext from "../../auth/AuthContext";

const Navigation = ({navigation, Out}) => {
    const context = useContext(AuthContext)
    return (
      <>
    <div className="navigation">
      <div className="n-container">
        <div className="navigation-logo">
          <img src={NavLogo} alt="logo" />
        </div>
        <ul className="nav-list">
          <li className="nav-list-item" onClick={() => navigation('map')}>Карта</li>
          <li className="nav-list-item" onClick={() => navigation('profile')}>Профиль</li>
          <li className="nav-list-item" onClick={() => Out(context.logOut())}>Выйти</li>
        </ul>
      </div>
    </div>
    </>
    );
}

Navigation.propTypes = {
    navigation: PropTypes.func,
    Out: PropTypes.func
}

export default Navigation
