import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PicCard from './PicCard';


class ShowMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/posts')
      .then(res => {
        this.setState({
          post: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowMap');
      })
  };


  render() {
    const posts = this.state.post;
    let postList;

    if(!posts) {
      postList = "there is no post record!";
    } else {
      postList = posts.map((post, k) =>
        <PicCard post={post} key={k} />
      );
    }

    return (
      <div className="ShowMap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">CURB-ALERT</h2>
            </div>

            <div className="col-md-11">
              
              {/* <Link to="/create-sighting" className="btn btn-outline-warning float-right">
                + Add New Sighting
              </Link>
              <Link to="/sighting" className="btn btn-outline-warning float-right">
                See All Sightings
              </Link> */}
              <hr />
            </div>

          </div>
              
          <div className="list">
                {postList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowMap;
