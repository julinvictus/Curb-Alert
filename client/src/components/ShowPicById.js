import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import axios from 'axios';

import '../App.css';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '500px',
    height: '500px'
  }
};

class ShowPicById extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // state for db
        title: "",
        image_url: "",
        latitude: "",
        longitude: "",
        // state for googlemaps api
        showingInfoWindow: false,  
        activeMarker: {},         
        selectedPlace: {}
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    })
  }
  onClose = props => {
      if (this.state.showingInfoWindow) {
          this.setState({
              showingInfoWindow: false,
              activeMarker: null
          });
      }
  };

  componentDidMount() {
    console.log("Print id: " + this.props.match.params.id);
    axios
      .get('/api/posts/'+this.props.match.params.id)
      .then(res => {
        var data = res.data;
        console.log("data var: " +data);
        this.setState({
          title: data.title,
          image_url: data.image_url,
          latitude: parseFloat(data.latitude.$numberDecimal),
          longitude: parseFloat(data.longitude.$numberDecimal),
        })
        console.log(this.state);
      })
      .catch(err => {
        console.log("Error from ShowPicById");
      })
  };

  render() {
    console.dir(this.state);
    console.log('latitude', this.state.latitude)
    console.log('longitude', this.state.longitude)

    let PicItem = <div>
      <div class="card">
        <div class="card-header">
            <h5 class="card-title"><b>{this.state.title}</b></h5>
        </div>
        <div className="card-body" >
            <img src={`${this.state.image_url}`} class="card-img" width="100%" alt="free item" />
        </div>          
      </div>
      <div>
        <a href={`https://maps.google.com/maps?q=${this.state.latitude},${this.state.longitude}`} target="_blank"><button type="button" className="btn btn-outline-warning btn-block mt-4">Get directions on Google Maps! </button></a>
      </div><br />
      <div> 
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          center={
            { 
              lat: this.state.latitude, 
              lng: this.state.longitude
            } 
          }
        >
          <Marker 
            onClick={this.onMarkerClick} 
            name={this.state.title} 
            position={
              {
                lat: this.state.latitude, 
                lng: this.state.longitude
              }
            }
            
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h6>{this.state.selectedPlace.name}</h6>
            </div>
          </InfoWindow>
        </Map>
      </div>
    </div>

    return (
      <div className="ShowPicById">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              { PicItem }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAPS_KEY
})(ShowPicById);