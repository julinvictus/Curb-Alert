import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

// source code : ./src/demo/AppWithImagePreview/ImagePreview
import ImagePreview from './ImagePreview'; 
import SavePost from './SavePost';

 
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
        {
          (this.state.dataUri)
            ? <ImagePreview dataUri={this.state.dataUri} />
            : <Camera onTakePhotoAnimationDone = {this.onTakePhotoAnimationDone} />
        }
      </div>
    );
  }
}
 
export default TakePic;