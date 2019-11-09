import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ImagePreview from './ImagePreview'; 
import ItemLocation from './ItemLocation';

global.atob = require("atob");
const Blob = require('node-blob');

class SavePost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      image_url:'',
      date_posted: new Date().toLocaleDateString(),
      latitude: null,
      longitude: null,
      claimed: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      image_url: this.state.image,
      date_posted: this.state.date_posted,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      claimed: this.state.claimed
    };
    
    // transforms dataURI into blob
    //let myDataUri = {this.props.history.location.state.uri}
    function dataURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for(var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
    }

    // generate name for image
    const generateNameForImage = (length) => {
      let result           = '';
      let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    
    // send to db
    axios
      .post('http://localhost:5000/api/posts')
      .then(res => {
        this.setState({
          title: '',
          image_url:'',
          date_posted: new Date().toLocaleDateString(),
          latitude:'',
          longitude:'',
          claimed: false
        })
      })
      .catch(err =>{
        console.log('Error from SavePost');
      })
  };
    
  render() {
    return (
      <div className="CreateSighting">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              {/* <Link to="/" className="btn btn-outline-warning float-left">
                  See Animal List
              </Link>
              <Link to="/sighting" className="btn btn-outline-warning float-left">
                  See All Sightings
              </Link> */}
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">New post</h1>
              <ImagePreview 
                dataUri={this.props.history.location.state.uri} 
              />
              {console.log(this.props.history.location.state.uri)}
              <br />
              <form noValidate onSubmit={this.onSubmit}>

                {/* <UploadPic></UploadPic> */}
                {/* <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Image'
                    name='image'
                    className='form-control'
                    value={this.props.history.location.state.uri}
                    onChange={this.onChange}
                  />
                </div> */}
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Date Posted'
                    name='date_posted'
                    className='form-control'
                    value={this.state.date_posted}
                    onChange={this.onChange}
                  />
                </div>
                
                <ItemLocation></ItemLocation>

                <div className='form-group'>
                  <input
                    type='boolean'
                    placeholder='Claimed?'
                    name='claimed'
                    className='form-control'
                    value={this.state.claimed}
                    onChange={this.onChange}
                  />
                </div>
                

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
                <br />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SavePost;
