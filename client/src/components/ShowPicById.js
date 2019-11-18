import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import '../App.css';
import axios from 'axios';

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
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <td>{this.state.title}</td>
          </tr>
          <tr>
            <td><img src={`${this.state.image_url}`} width="100%" alt="free item" /></td>
          </tr>
        </tbody>
      </table>
      <div> 
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          center={
            //this.latLngForMap
            // { 
            //   lat: this.state.latitude.$numberDecimal, 
            //   lng: this.state.longitude.$numberDecimal
            // } // lat/lng bet double quotes, map empty
            // { 
            //   lat: parseFloat(this.state.latitude), 
            //   lng: parseFloat(this.state.longitude)
            // } // map empty
            { 
              lat: this.state.latitude, 
              lng: this.state.longitude
            } // map empty
            // { 
            // lat: 37.813213, 
            // lng: -122.281374
            // }
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
              <br /> <br />
              {/* <Link to="/show-pics" className="btn btn-outline-warning float-left">
                  Show Posts
              </Link> */}
            </div>
            <br />
            {/* <div className="col-md-8 m-auto">

              <hr /> <br />
            </div> */}
          </div>
          <div>
            { PicItem }
          </div>
          


        </div>
      </div>
    );
  }
}

//export default ShowPicById;
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAPS_KEY
})(ShowPicById);