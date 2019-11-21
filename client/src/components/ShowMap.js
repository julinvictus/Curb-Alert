import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './CurrentLocation';

export class ShowMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
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
        axios
          .get('/api/posts')
          .then(res => {
            this.setState({
                post: res.data
            })
            console.log(this.state);

          })
          .catch(err =>{
            console.log('Error from ShowMap');
          })
    };
    displayMarkers = () => {
        return this.state.post.map((post, index) => {
            console.log(post.latitude.$numberDecimal);
            console.log(post.longitude.$numberDecimal);
             
            return <Marker key={index} id={index} position={{
                    lat: post.latitude.$numberDecimal,
                    lng: post.longitude.$numberDecimal
                }}
                name={post.title} 
                image={post.image_url}
                onClick={this.onMarkerClick}
            />
        }) 
    }

    displayInfoWindow = () => {
        const post = this.state.post.map((post, index) => {            
            return <InfoWindow key={index} id={index}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
        > 
            <div>
                
                <h6>{this.state.selectedPlace.name}</h6>
                {/* <Link to={`/show-pic-by-id/${post._id}`}> */}
                {/* <a href={`https://maps.google.com/maps?q=${this.state.latitude},${this.state.longitude}`}> */}
                <img src={this.state.selectedPlace.image}  width="100%" alt="map"/>
                {/* </a> */}
                {/* </Link> */}
            </div>
        </InfoWindow> 
        
        }) 
        console.log(post)
        return post;
    }

    render() {
        const posts = this.state.post;
        console.log(posts);
        return (
        
         <CurrentLocation
              centerAroundCurrentLocation
              google={this.props.google}
         >  
            {this.displayMarkers()}
            {this.displayInfoWindow()}
        </CurrentLocation>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAPS_KEY
})(ShowMap);

