import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ImagePreview from './ImagePreview'; 
import ItemLocation from './ItemLocation';
var aws = require('aws-sdk'); 
require('dotenv').config();

class SavePost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      image_url:'',
      date_posted: new Date().toLocaleDateString(),
      latitude: '',
      longitude: '',
      claimed: false
      // date_posted: new Date().toLocaleDateString(),
      // latitude: null,
      // longitude: null,
      // claimed: false
    };
  }

  // get curent location
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude})
        },
        (err) => {
            console.log('Error from geolocation')
        }
    );
}

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      image_url: this.state.image_url,
      date_posted: this.state.date_posted,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      claimed: this.state.claimed
    };
    
    // let myDataUri = this.props.history.location.state.uri;

    // // transform dataURI into base64
    // const base64Data = new Buffer.from(myDataUri.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    // //console.log(base64Data);

    // // Configure aws with your accessKeyId and your secretAccessKey
    // aws.config.update({
    //     region: 'us-west-1', // Put your aws region here
    //     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    //     secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
    // })

    // const S3_BUCKET = process.env.REACT_APP_BUCKET
    // const s3 = new aws.S3();  // Create a new instance of S3

    // // Set up the payload of what we are sending to the S3 api
    // const s3Params = {
    //   Bucket: S3_BUCKET, // bucket
    //   Key: new Date().getTime() + '.jpg', // folder/file
    //   Body: base64Data,
    //   ACL:'public-read',
    //   ContentEncoding: 'base64',
    //   ContentType: 'image/jpeg'
    // };

    // // upload to s3
    // s3.upload(s3Params, function (err, data) {
    //     if (err) {
    //         console.log("Error", err);
    //     } if (data) {
    //         console.log("Upload Success", data.Location);
    //     }
    // });
    
    // send to db
    axios
      .post('http://localhost:5000/api/posts', data)
      .then(res => {
        this.setState({
          title: '',
          image_url: '',
          date_posted: '',
          // image_url: data.Location,
          // date_posted: new Date().toLocaleDateString(),
          latitude:'',
          longitude:'',
          claimed: ''
          // claimed: false
        })
        this.props.history.push('/');
        console.log('Post added to db')
      })
      .catch(err =>{
        console.log('Error from SavePost');
      })
  };
    
  render() {
    return (
      <div className="SavePost">
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
              {/* {console.log(this.props.history.location.state.uri)} */}
              <br />
              <form noValidate onSubmit={this.onSubmit}>

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
                    placeholder='Image url'
                    name='image_url'
                    className='form-control'
                    value={this.state.image_url}
                    onChange={this.onChange}
                  />
                </div>

                {/* <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Date Posted'
                    name='date_posted'
                    className='form-control'
                    value={this.state.date_posted}
                    onChange={this.onChange}
                  />
                </div> */}
                
                {/* <ItemLocation></ItemLocation> */}

                {/* <div className='form-group'>
                    <input
                        type='integer'
                        placeholder='Latitude'
                        name='latitude'
                        className='form-control'
                        value={this.state.latitude}
                        onChange={this.onChange}
                    /> 
                </div>
                <div className='form-group'>
                    <input
                        type='integer'
                        placeholder='Longitude'
                        name='longitude'
                        className='form-control'
                        value={this.state.longitude}
                        onChange={this.onChange}
                    />
                </div> */}

                {/* <div className='form-group'>
                  <input
                    type='boolean'
                    placeholder='Claimed?'
                    name='claimed'
                    className='form-control'
                    value={this.state.claimed}
                    onChange={this.onChange}
                  />
                </div> */}
                

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
