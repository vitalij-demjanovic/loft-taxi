import React  from "react";
import mapboxgl from 'mapbox-gl'
import './Map.css'
import {connect} from "react-redux";
import Booking from "../mapComponent/Booking/Booking";
import Navigation from "../navigation/Navigation";
import Confirmation from "../mapComponent/confirmation/Confirmation";

class Map extends React.Component {
    map = null
    mapContainer = React.createRef()

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoidml0YWxpai1kZW1qYW5vdmljIiwiYSI6ImNreGdqbG0yYzNwdDYyeG81MjU2bGxmemsifQ.WNTjuzHq0-hy5eiM1w86Rw';

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [30.308611, 59.937500],
            zoom: 12
        })

    }


    componentWillUnmount() {
        this.map.remove()
    }

    drawRoute = (map, coordinates) => {
        map.flyTo({
            center: coordinates[0],
            zoom: 15
        });

        map.addLayer({
            id: "route",
            type: "line",
            source: {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates
                    }
                }
            },
            layout: {
                "line-join": "round",
                "line-cap": "round"
            },
            paint: {
                "line-color": "#ffc617",
                "line-width": 8
            }
        });
    };

    componentDidUpdate() {
            this.drawRoute(this.map, this.props.trip);
    }


    render() {
        return (
            <>
                <Navigation/>
                <div className='map-container'>
                    <Navigation/>
                    <div className="map" ref={this.mapContainer}/>
                    <div className="map-booking">
                        {this.props.successTrip
                        ?
                            <Confirmation/>
                        :
                            <Booking/>

                        }
                    </div>
                </div>
            </>
        );
    }
}

export default connect((state) => ({
    trip:state.trip.trip,
    successTrip: state.trip.successTrip
}))(Map)







