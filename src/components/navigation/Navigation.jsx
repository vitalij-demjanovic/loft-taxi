import React from "react";
import './Navigation.css'
import NavLogo from '../../assets/image/NavLogo.png'
import Map from "../../pages/Map/Map";
import Profile from '../../pages/Profile/Profile'
import Login from '../..//pages/Login/Login'
class Navigation extends React.Component {
  state = { currentPage: 'map' }

  naviTogo = (page) => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <>
    <div className="navigation">
      <div className="n-container">
        <div className="navigation-logo">
          <img src={NavLogo} alt="" />
        </div>
        <ul className="nav-list">
          <li className="nav-list-item" onClick={() => {this.naviTogo('map')}}>Карта</li>
          <li className="nav-list-item" onClick={() => {this.naviTogo('profile')}}>Профиль</li>
          <li className="nav-list-item" onClick={() => this.props.logOut('login')}>Выйти</li>
        </ul>
      </div>
    </div>
    <main>
      {this.state.currentPage === 'map' && <Map></Map>}
      {this.state.currentPage === 'profile' && <Profile></Profile>}
      {this.state.currentPage === 'login' && <Login></Login>}
    </main>
    </>
    );
  }
}

export default Navigation