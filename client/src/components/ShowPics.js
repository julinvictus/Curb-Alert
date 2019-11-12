import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import PicCard from './PicCard';


class ShowPic extends Component {
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
        console.log('Error from ShowPic');
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
      <div className="ShowPics">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="list">
                  {postList}
              </div>
            </div>

            
          </div>

          
        </div>
      </div>
    );
  }
}

export default ShowPic;
