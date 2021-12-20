import React from "react";
import Login from './pages/Login/Login'
import './global.css'
import Registration from "./pages/Registraion/Registration";
import Home from "./pages/Home/Home";

class App extends React.Component {
  state = { currentPage: 'home' }

  naviTogo = (page) => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.currentPage === 'login' && <Login navigation={this.naviTogo}/>}
        {this.state.currentPage === 'registration' && <Registration navigation={this.naviTogo}/>}
        {this.state.currentPage === 'home' && <Home/>}
      </div>
    )
  }
}

export default App
