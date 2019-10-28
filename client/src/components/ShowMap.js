import React, { Component } from 'react';
//import '../App.css';
import axios from 'axios';
//import { Link } from 'react-router-dom';
//import PicCard from './PicCard';


import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            post: [],
           // state = {
                showingInfoWindow: false,  //Hides or the shows the infoWindow
                activeMarker: {},          //Shows the active marker upon click
                selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
            //};
        };
    }

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
    componentDidMount() {
        axios
          .get('http://localhost:5000/api/posts')
          .then(res => {
            this.setState({
                post: res.data
            })
            console.log(this.state);

          })
          .catch(err =>{
            console.log('Error from ShowPic');
          })
    };
    displayMarkers = () => {
        return this.state.post.map((post, index) => {
            console.log(post.latitude.$numberDecimal);
          return <Marker key={index} id={index} position={{
           lat: post.latitude.$numberDecimal,
           lng: post.longitude.$numberDecimal
         }}
         
         onClick={this.onMarkerClick}
         name={post.title} 
         />
        //  <InfoWindow 
        //     marker={this.state.activeMarker}  
        //     visible={this.state.showingInfoWindow} 
        //     onClose={this.onClose}
        //     >
        //     <div>
        //         <h4>{this.state.selectedPlace.name}</h4>
        //     </div>
        // </InfoWindow>
        })
    }
    render() {
        //const posts = this.state.post;
        return (
        // <Map
        //     google={this.props.google}
        //     zoom={14}
        //     style={{width: '100%', height: '100%'}}
        //     initialCenter={{
        //     lat: 37.8044,
        //     lng: -122.2712
        //     }}
        // >
        
        <CurrentLocation
            centerAroundCurrentLocation
            google={this.props.google}
        >
            {/* <Marker
                onClick={this.onMarkerClick}
                name={'Nice chairs'}
            /> */}
            {/* <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
            > */}
                {/* <div>
                <h4>{this.state.selectedPlace.name}</h4>
                </div> */}
            {/* </InfoWindow> */}
            {this.displayMarkers()}
            {/* <Marker name={'current location'} /> */}
        </CurrentLocation>
        // </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAPS_KEY
})(MapContainer);

