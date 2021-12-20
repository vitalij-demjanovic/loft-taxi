import React from "react";
import Login from './pages/Login/Login'
import Navigation from './components/navigation/Navigation'
import './global.css'
import Registration from "./pages/Registraion/Registration";

class App extends React.Component {
  state = { currentPage: 'navigation' }

  naviTogo = (page) => {
    this.setState({
      currentPage: page
    })
  }
  
  render() {
    return (
      <div className="App">
        {this.state.currentPage === 'login' && <Login logIn={this.naviTogo} navigation={this.naviTogo}></Login>}
        {this.state.currentPage === 'registration' && <Registration navigation={this.naviTogo}></Registration>}
        {this.state.currentPage === 'navigation' && <Navigation logOut={this.naviTogo}></Navigation>}
      </div>
    )
  }
}

export default App
