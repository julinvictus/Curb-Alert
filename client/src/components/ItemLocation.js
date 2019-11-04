import React from 'react'
import ReactDOM from 'react-dom'

class ItemLocation extends React.Component {
    constructor(props){
        super(props);
        this.state = { lat: null, lng: null, errorMessage: ''}

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude, lng: position.coords.longitude})
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        );
    }

    render(){
        if (this.state.errorMessage && !this.state.lat && !this.state.lng){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat && this.state.lng){
            return <div>Latitude: {this.state.lat}<br />Longitude: {this.state.lng}</div> 
        }
            
        return <div>Loading..</div>
    }
}

export default ItemLocation;