import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import S3FileUpload from 'react-s3';
require('dotenv').config();

const config = {
    bucketName: 'techtonica-final-project',
    region: 'us-west-1',
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
}

class UploadPic extends Component {
    // constructor(){
    //   super();
    // }
    handleUpload(e){
        console.log(e.target.files[0]);
        S3FileUpload
            .uploadFile(e.target.files[0], config)
            // show image URL
            .then(data => console.log(data.location))
            .catch(err => console.error(err))
    }
    render(){
        return (
            <div className="UploadPic">
                <center>
                <h1>UPLOAD A FILE</h1>
                <input onChange={this.handleUpload} type="file"/>
                <br/>
                </center>
            </div>

        )
    }
}

export default UploadPic;