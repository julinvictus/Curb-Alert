import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

import TakePic from './TakePic';

class SavePost extends Component {

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
        return (
            
        <div>
            {/* {
                (this.state.dataUri)
                <ImagePreview dataUri={this.state.dataUri} />
            } */}
        </div>
        );
      }
    }
    
    
    export default SavePost;
