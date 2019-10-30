import React, { Component } from 'react';
//import '../App.css';
import axios from 'axios';
//import { Link } from 'react-router-dom';
//import PicCard from './PicCard';


import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';

export class ShowMap extends Component {
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
         name={'Current location'} 
        >
         <InfoWindow 
            marker={this.state.activeMarker}  
            visible={this.state.showingInfoWindow} 
            //onClose={this.onClose}
            >
            <div>
                <h4>{this.state.selectedPlace.name}</h4>
            </div>
        </InfoWindow>
        </Marker>
       })
    }
    render() {
        const posts = this.state.post;
        console.log(posts);
        //let postsList;

        // if(!posts) {
        //     postsList = "there is no record!";
        //   } else {
        //     postsList = posts.map((post, index) => 
        //         //console.log(post.latitude.$numberDecimal);
        //       <Marker key={index} id={index} position={{
        //        lat: post.latitude.$numberDecimal,
        //        lng: post.longitude.$numberDecimal
        //      }}/>
        //     );
        // }
        // console.log(postsList);

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

            {/* {postsList} */}
            {/* <Marker
                name={'Dolores park'}
                position={{lat: 37.759703, lng: -122.428093}} />
            <Marker /> */}
            {/* {posts.map((post, index) => {
                return <Marker
                    key={index}
                    position={{
                                lat: parseFloat(post.latitude.$numberDecimal),
                                lng: parseFloat(post.longitude.$numberDecimal)
                    }}
                    //onClick={this.onMarkerClick}
                    //name={this.props.locations[idx].title}

                />
            })} */}

            {/* <Marker name={'current location'} /> */}
        </CurrentLocation>
        //</Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAPS_KEY
})(ShowMap);

