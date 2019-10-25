import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PicCard from './PicCard';


import { Map, GoogleApiWrapper } from 'google-maps-react';
//require('dotenv').config();
const googleMapsKey = process.env.REACT_APP_GOOGLEMAPS_KEY;
console.log(googleMapsKey);

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class ShowMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 37.8044,
         lng: -122.2712
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsKey
})(ShowMap);

