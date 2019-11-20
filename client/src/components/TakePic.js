import React, { Component } from 'react';
import Camera, {IMAGE_TYPES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { Redirect } from 'react-router-dom';
 
class TakePic extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = { dataUri: null };
    this.onTakePhotoAnimationDone = this.onTakePhotoAnimationDone.bind(this);
  }
 
  onTakePhotoAnimationDone (dataUri) {
    console.log('takePhoto');
    this.setState({ dataUri });
    
  }
 
  render () {
    return (
      <div className="App">
        {(this.state.dataUri) 
          ? <Redirect to={{pathname: '/save-post', state: { uri: this.state.dataUri }}}/>
          : <Camera 
              onTakePhotoAnimationDone = {this.onTakePhotoAnimationDone}   
              idealResolution = {{width: 640, height: 480}}
              imageType = {IMAGE_TYPES.JPG}
              imageCompression = {0.97}
            />
        }
      </div>
    );
  }
}
 
export default TakePic;