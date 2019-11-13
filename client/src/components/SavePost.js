import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ImagePreview from './ImagePreview'; 
var aws = require('aws-sdk'); 
require('dotenv').config();
const imageName = new Date().getTime() + '.jpg';

class SavePost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      image_url:'https://techtonica-final-project.s3-us-west-1.amazonaws.com/'+ imageName,
      date_posted: new Date().toLocaleDateString(),
      latitude: '',
      longitude: '',
      claimed: false
    };
  }

  // get current location
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({ 
            latitude: position.coords.latitude, 
            longitude: position.coords.longitude})
        },
        (err) => {
          console.log('Error from geolocation')
        }
    );
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // addUrlToDb = (data) => {
  //   this.setState({ image_url: data.Location });
  // } 

  onSubmit = e => {
    e.preventDefault();
    const dataToDb = {
      title: this.state.title,
      image_url: this.state.image_url,
      date_posted: this.state.date_posted,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      claimed: this.state.claimed
    };
    
    // my datauri img coming from TakePic
    let myDataUri = this.props.history.location.state.uri;

    // transform dataURI into base64
    const base64Data = new Buffer.from(myDataUri.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    //console.log(base64Data);

    // Configure aws with your accessKeyId and your secretAccessKey
    aws.config.update({
        region: 'us-west-1', // Put your aws region here
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
    })

    const S3_BUCKET = process.env.REACT_APP_BUCKET
    const s3 = new aws.S3();  // Create a new instance of S3

    // Set up the payload of what we are sending to the S3 api
    const s3Params = {
      Bucket: S3_BUCKET, // bucket
      Key: imageName,
      Body: base64Data,
      ACL:'public-read',
      ContentEncoding: 'base64',
      ContentType: 'image/jpeg'
    };

    // upload to s3
    s3.upload(s3Params, function (err, dataToS3) {
        if (err) {
            console.log("Error", err);
        } if (dataToS3) {
            console.log("Upload Success", dataToS3.Location);
            //this.addUrlToDb(data);
            // dataToDb.image_url = dataToS3.Location; // empty on db
            // console.log(dataToDb.image_url);
        }
    });

    //console.log(data.Location);
    //this.setState({ image_url: data.Location }); // no url on db
    
    // send to db
    axios
      .post('/api/posts', dataToDb)
      .then(res => {
        this.setState({
          title: '',
          image_url: '',
          date_posted: '',
          latitude:'',
          longitude:'',
          claimed: ''
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
