import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import S3FileUpload from 'react-s3';

global.atob = require("atob");
const Blob = require('node-blob');

require('dotenv').config();

const config = {
    bucketName: 'techtonica-final-project',
    region: 'us-west-1',
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
}
let myDataUri = 'data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7'

class UploadPic extends Component {
    // constructor(){
    //   super();
    // }
    
    dataURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for(var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
    }

    blobToFile(theBlob, fileName){
        //A Blob() is almost a File() - it's just missing the two properties below which we will add
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
    }

    handleUpload(){
        //console.log('e.target.files[0]');
        console.log(this.blobToFile( this.dataURItoBlob(this.myDataUri), "image.jpg" ));
        S3FileUpload
            .uploadFile(this.blobToFile( this.dataURItoBlob(this.myDataUri), "image.jpg" ), config)
            // show image URL
            .then(data => console.log(data.location))
            .catch(err => console.error(err))
    }

    // original
    // handleUpload(e){
    //     console.log('e.target.files[0]');
    //     S3FileUpload
    //         .uploadFile(e.target.files[0], config)
    //         // show image URL
    //         .then(data => console.log(data.location))
    //         .catch(err => console.error(err))
    // }
    render(){
        return (

            //original***************************
            // <div className="UploadPic">
            //     <center>
            //     <h1>UPLOAD A FILE</h1>
            //     <input onChange={this.handleUpload} type="file"/>
            //     <br/>
            //     </center>
            // </div>

            <div className="UploadPic">
            <center>
            <h1>UPLOAD A FILE</h1>
            <button onClick={this.handleUpload}>
                Click me to upload file
            </button>
            <br/>
            </center>
            </div>

            

            // <div className="UploadPic">
            //     <ImagePreview dataUri={this.props.history.location.state.uri} />
            //     <center>
            //     <h1>UPLOAD A FILE</h1>
            //     <input 
            //         type='text'
            //         placeholder='Image URL'
            //         name='image_url'
            //         className='form-control'
            //         value={this.props.history.location.state.uri}
            //         onChange={this.handleUpload}
            //     />
            //     <br/>
            //     </center>
            // </div>


        )
    }
}

export default UploadPic;