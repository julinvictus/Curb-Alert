import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';


class ItemLocation extends React.Component {
    constructor(props){
        super(props);
        this.state = { lat: null, lng: null, errorMessage: ''}  
    }

    componentDidMount(){
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
            return (
                <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                <input
                    type='integer'
                    placeholder='Latitude'
                    name='latitude'
                    className='form-control'
                    value={this.state.lat}
                    onChange={this.onChange}
                /> 
            </div>
            <div className='form-group'>
            <input
                    type='integer'
                    placeholder='Longitude'
                    name='longitude'
                    className='form-control'
                    value={this.state.lng}
                    onChange={this.onChange}
            />
            </div>
            </form>
            )
            
                {/* <div>Latitude: {this.state.lat}<br />Longitude: {this.state.lng}</div>  */}
            
        }
            
        return <Spinner />
    }
}

export default ItemLocation;