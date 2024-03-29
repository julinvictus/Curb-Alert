import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

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
      .get('/api/posts')
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
        <div class="col-12 col-md-6 col-lg-4 pic-column" >
          <div class="pic-card-wrapper">
            <PicCard post={post} key={k} />
          </div>
        </div>
      );
    }

    return (
      // <div class="ui two column grid">
      //   {postList}
      // </div>

      // <div className="ShowPics">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-xs-12 col-md-12">
      //         <div className="list">
      <div class="row">
                  {postList}
      </div>

      
      //         </div>
      //       </div>           
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default ShowPic;
