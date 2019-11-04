import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

import TakePic from './TakePic';

class SavePost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      image_url:'',
      date_posted: new Date().toLocaleDateString(),
      latitude:'',
      longitude:'',
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
      image_url: this.state.image_url,
      date_posted: this.state.date_posted,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      claimed: this.state.claimed
    };
    
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
              <form noValidate onSubmit={this.onSubmit}>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Image URL'
                    name='image_url'
                    className='form-control'
                    value={this.state.image_url}
                    onChange={this.onChange}
                  />
                </div>

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

                <div className='form-group'>
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
                </div>

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
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SavePost;
