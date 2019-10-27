import React, { Component } from 'react';
//import '../App.css';
//import axios from 'axios';
//import { Link } from 'react-router-dom';
//import PicCard from './PicCard';


import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

import CurrentLocation from './Map';

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };
    render() {
        return (
        // <Map
        //     google={this.props.google}
        //     zoom={14}
        //     style={mapStyles}
        //     initialCenter={{
        //     lat: 37.8044,
        //     lng: -122.2712
        //     }}
        // >
        <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        >
            <Marker
                onClick={this.onMarkerClick}
                name={'Nice chairs'}
            />
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
            >
                <div>
                <h4>{this.state.selectedPlace.name}</h4>
                </div>
            </InfoWindow>
        </CurrentLocation>
        // </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAPS_KEY
})(MapContainer);

