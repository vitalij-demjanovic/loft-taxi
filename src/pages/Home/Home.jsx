import React from 'react';
import Navigation from '../../components/navigation/Navigation'
import Map from "../../components/Map/Map";
import Profile from "../Profile/Profile";

class Home extends React.Component {
    state = { currentPage: 'map' }

    naviTogo = (page) => {
        this.setState({
            currentPage: page
        })
        if (this.state.currentPage === 'login') {

        }
    }

    render() {
        return (
            <div className="home-page">
                <header>
                    <Navigation navigation={this.naviTogo}/>
                </header>
                <main>
                    {this.state.currentPage === 'map' && <Map/>}
                    {this.state.currentPage === 'profile' && <Profile/>}
                </main>
            </div>
        )
    }
}

export default Home;