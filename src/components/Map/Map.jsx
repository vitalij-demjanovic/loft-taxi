import React from "react";
import mapboxgl from 'mapbox-gl'
import './Map.css'
import Booking from "../mapComponent/Booking/Booking";
import Navigation from "../navigation/Navigation";

class Map extends React.Component {
    map = null
    mapContainer = React.createRef()

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoidml0YWxpai1kZW1qYW5vdmljIiwiYSI6ImNreGdqbG0yYzNwdDYyeG81MjU2bGxmemsifQ.WNTjuzHq0-hy5eiM1w86Rw';

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [37.61811564003847, 55.743017084632726],
            zoom: 12
        })
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        return (
            <>
                <Navigation/>
                <div className='map-container'>
                    <Navigation/>
                    <div className="map" ref={this.mapContainer}/>
                    <div className="map-booking">
                        <Booking/>
                    </div>
                </div>
            </>
        );
    }
}

export default Map







